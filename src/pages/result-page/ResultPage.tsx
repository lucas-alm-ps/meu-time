import Table from '../../components/Table';
import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';

interface FootballPlayer extends Record<string, unknown> {
	image: string;
	name: string;
	age: number;
	nationality: string;
	height: number;
	weight: number;
}

export default function ResultPage() {
	const titles = [' ', 'Nome', 'Idade', 'Nacionalidade', 'Altura', 'Peso'];
	const columnColors = ['', '#F5950C', '#fff', '#F5950C'];

	const footballPlayers = [
		{
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-9v6iehO3b8igBOrufRG3YPcEiebiNfzdQ&usqp=CAU',
			name: 'Cristiano Ronaldo',
			age: 36,
			nationality: 'Portuguese',
			height: 187,
			weight: 83,
		},
		{
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGv0ZIrLidHrXmxdSY38qwW3_FyQZhJo-sFQ&usqp=CAU',
			name: 'Lionel Messi',
			age: 34,
			nationality: 'Argentinian',
			height: 170,
			weight: 72,
		},
	];

	return (
		<MainPage>
			<BoxTitle>Jogadores</BoxTitle>
			<Table<FootballPlayer>
				titles={titles}
				data={footballPlayers}
				columnColors={columnColors}
			/>
		</MainPage>
	);
}
