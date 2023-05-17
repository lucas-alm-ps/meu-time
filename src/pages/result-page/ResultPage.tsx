import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';
import GoalsGraph from './GoalsGraph';
import MatchesResultTable from './MatchesResultTable';
import PlayerTable from './PlayerTable';

export default function ResultPage() {
	return (
		<MainPage>
			<BoxTitle>Jogadores</BoxTitle>
			<PlayerTable />

			<BoxTitle>Resultados gerais</BoxTitle>
			<MatchesResultTable />

			<BoxTitle>Estatisticas</BoxTitle>
			<>
				<GoalsGraph />
			</>
		</MainPage>
	);
}
