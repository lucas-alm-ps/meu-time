import Table from '../../components/Table';
import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';

export default function ResultPage() {
	return (
		<MainPage>
			<BoxTitle>Jogadores</BoxTitle>
			<Table />
		</MainPage>
	);
}
