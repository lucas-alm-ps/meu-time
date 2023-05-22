import { Chart } from 'react-google-charts';
import CardShower from '../../components/CardShower';

interface MinuteData {
	[range: string]: {
		total: number;
		percentage: string;
	};
}

interface GoalsGraphProps {
	data: MinuteData[];
}

export default function GoalsGraph({ data }: GoalsGraphProps) {
	const dataArray = [
		['Minuto', 'Gols'],
		...Object.entries(data).map(([minute, { total }]) => [
			minute + ' min',
			total,
		]),
	];

	return (
		<CardShower title='Gols'>
			<Chart
				chartType='PieChart'
				data={dataArray}
				width={'400px'}
				height={'400px'}
				options={getOptions()}
			/>
		</CardShower>
	);
}

function getOptions() {
	return {
		legend: {
			position: 'none',
			textStyle: {
				color: '#fff',
			},
		},
		backgroundColor: 'transparent',
		pieHole: 0.4,
		pieSliceText: 'label',
	};
}
