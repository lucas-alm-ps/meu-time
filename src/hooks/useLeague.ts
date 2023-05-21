import { useEffect, useState } from 'react';
import { getLeaguesByCountry } from '../service/dataApi';

interface League {
	id: number;
	name: string;
	type: string;
	logo: string;
}

export default function useLeague(selectedCountry: string) {
	const [selectedLeague, setSelectedLeague] = useState('');
	const [leagueOptions, setLeagueOptions] = useState<string[]>([]);
	const [data, setData] = useState<League[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	async function fetchLeagues() {
		try {
			setLoading(true);
			const { response } = await getLeaguesByCountry(selectedCountry);
			setData(response);
			const leagues: string[] = response.map(
				(league: League) => league.name
			);
			setLeagueOptions(leagues);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		fetchLeagues();
	}, [selectedCountry]);

	return {
		leagueOptions,
		leagueLoading: loading,
		leagueError: error,
		setSelectedLeague,
	};
}
