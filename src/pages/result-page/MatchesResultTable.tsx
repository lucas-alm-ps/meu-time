import Table from '../../components/Table';

interface MatchResult extends Record<string, unknown> {
	wins: number;
	draws: number;
	losses: number;
	games: number;
}

interface MatchesResultTableProps {
	data: MatchObject;
}

export default function MatchesResultTable({ data }: MatchesResultTableProps) {
	const titles = ['Jogos', 'Vitórias', 'Empates', 'Derrotas'];
	const columnColors = ['#fff', '#73F50C', '#D01E1F'];
	const matchResults = getMatchResults(data);

	return (
		<Table<MatchResult>
			data={matchResults}
			titles={titles}
			columnColors={columnColors}
			fontSize='32px'></Table>
	);
}

function getMatchResults(data: MatchObject) {
	const draws = data.draws.total;
	const wins = data.wins.total;
	const losses = data.losses.total;
	const games = data.played.total;

	return [
		{
			wins,
			draws,
			losses,
			games,
		},
	];
}

interface Fixture {
	home: number;
	away: number;
	total: number;
}

interface MatchObject {
	wins: Fixture;
	draws: Fixture;
	losses: Fixture;
	played: Fixture;
}
