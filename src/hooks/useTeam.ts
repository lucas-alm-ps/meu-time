import { useContext, useEffect, useState } from 'react';
import { getTeamsByLeague } from '../service/dataApi';
import ChoiceContext from '../context/ChoiceContext';

interface TeamProps {
	selectedLeagueId: string;
	selectedSeason: string;
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

	async function fetchTeams() {
		try {
			setLoading(true);
			const response = await getTeamsByLeague(
				selectedLeagueId,
				selectedSeason
			);
			console.log(response);
			const teams = response.map((item: any) => item.team.name);
			setData(response);
			setTeamOptions(teams);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		console.log('NEW CHANGE');
		fetchTeams();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		teamOptions,
		teamLoading: loading,
		teamError: error,
		setSelectedTeam,
		selectedTeam,
	};
}
