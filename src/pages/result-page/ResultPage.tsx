import styled from 'styled-components';
import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';
import GoalsGraph from './GoalsGraph';
import MatchesResultTable from './MatchesResultTable';
import PlayerTable from './PlayerTable';
import FormationCount from './FormationCount';
import { useContext } from 'react';
import ChoiceContext from '../../context/ChoiceContext';
import useStatistics from '../../hooks/useStatistics';
import Spinner from '../../components/Spinner';

export default function ResultPage() {
	const { selectedLeagueId, selectedTeamId, selectedSeason } =
		useContext(ChoiceContext);

	const { fixtures, statisticsLoading, statistics, minutesGoalsPercentage } =
		useStatistics(selectedLeagueId, selectedSeason, selectedTeamId);

	console.log('FIXTURES ', minutesGoalsPercentage);
	if (statisticsLoading || !statistics) return <Spinner />;

	return (
		<MainPage>
			<Page>
				<BoxTitle>Jogadores</BoxTitle>
				<PlayerTable />

				<BoxTitle>Resultados gerais</BoxTitle>
				{fixtures && Object.keys(fixtures).length > 0 && (
					<MatchesResultTable data={fixtures as any} />
				)}

				<BoxTitle>Estatisticas</BoxTitle>
				<StatisticsBox>
					<GoalsGraph data={minutesGoalsPercentage} />
					<FormationCount />
				</StatisticsBox>
			</Page>
		</MainPage>
	);
}

const Page = styled.div`
	width: 100%;
	align-items: start;
	flex-direction: column;
`;

const StatisticsBox = styled.div`
	display: flex;
`;
