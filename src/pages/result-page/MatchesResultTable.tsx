import Table from '../../components/Table';

interface MatchResult extends Record<string, unknown> {
	wins: number;
	draws: number;
	losses: number;
	games: number;
}

export default function MatchesResultTable() {
	const titles = ['Jogos', 'Vitórias', 'Empates', 'Derrotas'];
	const columnColors = ['#fff', '#73F50C', '#D01E1F'];
	const matchResults = getMatchResults();

	return (
		<Table<MatchResult>
			data={matchResults}
			titles={titles}
			columnColors={columnColors}></Table>
	);
}

function getMatchResults() {
	return [
		{
			games: 0,
			wins: 0,
			draws: 0,
			losses: 0,
		},
	];
}
