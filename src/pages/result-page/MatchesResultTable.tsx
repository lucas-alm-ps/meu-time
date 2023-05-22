import Table from '../../components/Table';

interface MatchResult extends Record<string, unknown> {
	wins: number;
	draws: number;
	loses: number;
	games: number;
}

interface MatchesResultTableProps {
	data: MatchObject;
}

export default function MatchesResultTable({ data }: MatchesResultTableProps) {
	const titles = ['Jogos', 'Vitórias', 'Empates', 'Derrotas'];
	const columnColors = ['#fff', '#73F50C', '#D01E1F'];
	const matchResults = data && getMatchResults(data);

	console.log('DATA FROM TABLE ', data);

	return (
		<Table<MatchResult>
			data={matchResults}
			titles={titles}
			columnColors={columnColors}
			fontSize='32px'
		/>
	);
}

function getMatchResults(data: MatchObject) {
	if (!data) return [];

	const draws = data.draws.total;
	const wins = data.wins.total;
	const loses = data.loses.total;
	const games = data.played.total;

	return [
		{
			wins,
			draws,
			loses,
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
	loses: Fixture;
	played: Fixture;
}
