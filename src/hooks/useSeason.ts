import { useContext, useEffect, useState } from 'react';
import { getSeasons } from '../service/dataApi';
import ApiKeyContext from '../context/ApiKeyContext';

export default function useSeason() {
	const [selectedSeason, setSelectedSeason] = useState('');
	const [seasonOptions, setSeasonOptions] = useState<string[]>([]);
	const [, setData] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const { isAuthenticated } = useContext(ApiKeyContext);

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
		if (isAuthenticated) fetchSeasons();
	}, [isAuthenticated]);

	return {
		seasonOptions,
		seasonLoading: loading,
		seasonError: error,
		setSelectedSeason,
		selectedSeason,
	};
}
