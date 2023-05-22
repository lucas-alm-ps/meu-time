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

export default function ResultPage() {
	const {
		selectedCountry,
		selectedLeagueId,
		selectedTeamId,
		selectedSeason,
	} = useContext(ChoiceContext);

	const { data } = useStatistics(
		selectedLeagueId,
		selectedSeason,
		selectedTeamId
	);

	console.log(data);

	return (
		<MainPage>
			<Page>
				<BoxTitle>Jogadores</BoxTitle>
				<PlayerTable />

				<BoxTitle>Resultados gerais</BoxTitle>
				<MatchesResultTable />

				<BoxTitle>Estatisticas</BoxTitle>
				<StatisticsBox>
					<GoalsGraph />
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
