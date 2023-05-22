export default function usePlayers() {
	const [players, setPlayers] = useState<Player[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	return {
		players,
		playersLoading: loading,
		playersError: error,
	};
}
