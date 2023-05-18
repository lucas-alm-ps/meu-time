import styled from 'styled-components';
import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';
import GoalsGraph from './GoalsGraph';
import MatchesResultTable from './MatchesResultTable';
import PlayerTable from './PlayerTable';

export default function ResultPage() {
	return (
		<MainPage>
			<Page>
				<BoxTitle>Jogadores</BoxTitle>
				<PlayerTable />

				<BoxTitle>Resultados gerais</BoxTitle>
				<MatchesResultTable />

				<BoxTitle>Estatisticas</BoxTitle>
				<GoalsGraph />
			</Page>
		</MainPage>
	);
}

const Page = styled.div`
	width: 100%;
	align-items: start;
	flex-direction: column;
`;
