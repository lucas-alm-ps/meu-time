import { useContext, useEffect, useState } from 'react';
import { getTeamsByLeague } from '../service/dataApi';
import ChoiceContext from '../context/ChoiceContext';

interface TeamProps {
	selectedLeagueId: string;
	selectedSeason: string;
}

interface Team {
	code: string;
	country: string;
	founded: number;
	id: number;
	logo: string;
	name: string;
	national: boolean;
}
interface TeamResponse {
	team: Team;
}

export default function useTeam({
	selectedLeagueId,
	selectedSeason,
}: TeamProps) {
	const [selectedTeam, setSelectedTeam] = useState('');
	const [teamOptions, setTeamOptions] = useState<string[]>([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [selectedTeamId, setSelectedTeamId] = useState('');
	const [ids, setIds] = useState<string[]>([]);

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
		if (selectedLeagueId && selectedSeason) fetchTeams();
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
