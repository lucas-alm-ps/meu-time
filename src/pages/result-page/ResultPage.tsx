import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';
import PlayerTable from './PlayerTable';

export default function ResultPage() {
	return (
		<MainPage>
			<BoxTitle>Jogadores</BoxTitle>
			<PlayerTable />
		</MainPage>
	);
}
