import { useContext, useEffect, useState } from 'react';
import { getLeaguesByCountry } from '../service/dataApi';
import ChoiceContext from '../context/ChoiceContext';

interface League {
	id: number;
	name: string;
	type: string;
	logo: string;
}
interface LeagueResponse {
	league: League;
}

export default function useLeague(selectedCountry: string) {
	const [selectedLeague, setSelectedLeague] = useState('');
	const [selectedLeagueId, setSelectedLeagueId] = useState('');
	const [leagueOptions, setLeagueOptions] = useState<string[]>([]);
	const [data, setData] = useState<LeagueResponse[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [ids, setIds] = useState<string[]>([]);

	async function fetchLeagues() {
		try {
			setLoading(true);
			const { response } = await getLeaguesByCountry(selectedCountry);
			const leagues = response.map(
				({ league }: LeagueResponse) => league.name
			);
			setData(response);
			setLeagueOptions(leagues);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (selectedCountry !== '') fetchLeagues();
	}, [selectedCountry]);

	useEffect(() => {
		if (data) {
			const ids = data.map(({ league }) => String(league.id));
			setIds(ids);
		}
	}, [data]);

	return {
		leagueOptions,
		leagueLoading: loading,
		leagueError: error,
		setSelectedLeague,
		selectedLeagueId,
		selectedLeague,
		setSelectedLeagueId,
		leagueOptionsId: ids,
	};
}
