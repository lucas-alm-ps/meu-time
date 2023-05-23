import { useContext, useEffect, useState } from 'react';
import { getPlayers } from '../service/dataApi';
import ApiKeyContext from '../context/ApiKeyContext';

export default function usePlayers(teamId: string, season: string) {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const { isAuthenticated } = useContext(ApiKeyContext);

	async function fetchPlayers() {
		try {
			setLoading(true);
			const { response } = await getPlayers(teamId, season);
			console.log(response);
			setPlayers(response);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (teamId && season && isAuthenticated) fetchPlayers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [teamId, season]);

	return {
		players,
		playersLoading: loading,
		playersError: error,
	};
}
