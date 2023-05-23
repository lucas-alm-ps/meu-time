import { useEffect, useState } from 'react';
import { getTeamStats } from '../service/dataApi';

export default function useStatistics(
	selectedLeagueId: string,
	selectedSeason: string,
	selectedTeamId: string
) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [minutesGoalsPercentage, setMinutesGoalsPercentage] = useState({});
	const [lineups, setLineups] = useState([]);
	const [fixtures, setFixtures] = useState({});

	async function fetchStatistics() {
		try {
			setLoading(true);
			const { response } = await getTeamStats(
				selectedTeamId,
				selectedLeagueId,
				selectedSeason
			);
			setData(response);
			const {
				fixtures,
				goals: {
					for: { minute },
				},
				lineups,
			} = response;
			setFixtures(fixtures);
			setLineups(lineups);
			setMinutesGoalsPercentage(minute);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (selectedTeamId && selectedLeagueId && selectedSeason) {
			fetchStatistics();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedTeamId, selectedLeagueId, selectedSeason]);

	return {
		statistics: data,
		statisticsLoading: loading,
		statisticsError: error,
		minutesGoalsPercentage,
		lineups,
		fixtures,
	};
}
