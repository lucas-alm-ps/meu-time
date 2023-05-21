import { useEffect, useState } from 'react';
import { getSeasons } from '../service/dataApi';

export default function useSeason() {
	const [selectedSeason, setSelectedSeason] = useState('');
	const [seasonOptions, setSeasonOptions] = useState<string[]>([]);
	const [data, setData] = useState<Season[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	async function fetchSeasons() {
		try {
			setLoading(true);
			const { response } = await getSeasons();
			setData(response);
			setSeasonOptions(response);
			return response as string[];
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchSeasons();
	}, []);

	return {
		seasonOptions,
		seasonLoading: loading,
		seasonError: error,
		setSelectedSeason,
	};
}
