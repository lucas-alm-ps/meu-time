import { useEffect, useState } from 'react';
import { getPlayers } from '../service/dataApi';

export default function usePlayers(
	teamId: string,
	season: string,
	leagueId: string
) {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	async function fetchPlayers() {
		try {
			setLoading(true);
			const { response } = await getPlayers(teamId, season, leagueId);
			setPlayers(response);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchPlayers();
	}, [teamId, season, leagueId]);

	return {
		players,
		playersLoading: loading,
		playersError: error,
	};
}
