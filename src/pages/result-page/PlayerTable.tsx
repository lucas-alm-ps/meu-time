import Table from '../../components/Table';

interface FootballPlayer extends Record<string, unknown> {
	image: string;
	name: string;
	age: number;
	nationality: string;
	height: number;
	weight: number;
}

interface PlayerResponse {
	id: number;
	name: string;
	firstname: string;
	lastname: string;
	age: number;
	birth: {
		date: string;
		place: string;
		country: string;
	};
	nationality: string;
	height: string;
	weight: string;
	injured: boolean;
	photo: string;
}

interface PlayerTableProps {
	data: PlayerResponse[];
}

export default function PlayerTable({ data }: PlayerTableProps) {
	const titles = [' ', 'Nome', 'Idade', 'Nacionalidade', 'Altura', 'Peso'];
	const columnColors = ['', '#F5950C', '#fff', '#F5950C'];

	const footballPlayers = data && getPlayersData(data);

	return (
		<Table<FootballPlayer>
			titles={titles}
			data={footballPlayers}
			columnColors={columnColors}></Table>
	);
}

function getPlayersData(data: PlayerResponse[]) {
	if (data.length === 0 || !data) return [];
	return data.map((player) => {
		const newPlayer: FootballPlayer = {
			image: player.photo,
			name: player.name,
			age: player.age,
			nationality: player.nationality,
			height: Number(player.height),
			weight: Number(player.weight),
		};
		return newPlayer;
	});
}
