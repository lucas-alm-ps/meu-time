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

type PlayerResponseArray = {
	player: PlayerResponse;
}[];

interface PlayerTableProps {
	data: PlayerResponseArray;
}

export default function PlayerTable({ data }: PlayerTableProps) {
	const titles = [' ', 'Nome', 'Idade', 'Nacionalidade', 'Altura', 'Peso'];
	const columnColors = ['', '#F5950C', '#fff', '#F5950C'];

	const footballPlayers = data && getPlayersData(data);

	return (
		<Table<FootballPlayer>
			titles={titles}
			data={footballPlayers}
			columnColors={columnColors}
		/>
	);
}

function getPlayersData(data: PlayerResponseArray) {
	if (data.length === 0 || !data) return [];
	return data.map((item) => {
		const player = item.player;
		const newPlayer: FootballPlayer = {
			image: player.photo,
			name: player.name,
			age: player.age,
			nationality: player.nationality,
			height: Number(player.height.replace(' cm', '')),
			weight: Number(player.weight.replace(' kg', '')),
		};
		return newPlayer;
	});
}
