/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { getTeamsByLeague } from '../service/dataApi';
import ApiKeyContext from '../context/ApiKeyContext';

export default function useTeam(
	selectedLeagueId: string,
	selectedSeason: string
) {
	const [selectedTeam, setSelectedTeam] = useState('');
	const [teamOptions, setTeamOptions] = useState<string[]>([]);
	const [, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [selectedTeamId, setSelectedTeamId] = useState('');
	const [ids, setIds] = useState<string[]>([]);
	const { isAuthenticated } = useContext(ApiKeyContext);

	async function fetchTeams() {
		try {
			setLoading(true);
			const { response } = await getTeamsByLeague(
				selectedLeagueId,
				selectedSeason
			);
			const teams = response.map((item: any) => item.team.name);
			const ids = response.map((item: any) => String(item.team.id));
			setData(response);
			setTeamOptions(teams);
			setIds(ids);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (selectedLeagueId && selectedSeason && isAuthenticated) fetchTeams();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedLeagueId, selectedSeason]);

	return {
		teamOptions,
		teamLoading: loading,
		teamError: error,
		setSelectedTeam,
		selectedTeam,
		teamOptionsId: ids,
		setSelectedTeamId,
		selectedTeamId,
	};
}
