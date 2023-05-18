import { Chart } from 'react-google-charts';
import CardShower from '../../components/CardShower';

export default function GoalsGraph() {
	const dataMockup = {
		minute: {
			'0-15': {
				total: 4,
				percentage: '6.06%',
			},
			'16-30': {
				total: 17,
				percentage: '25.76%',
			},
			'31-45': {
				total: 11,
				percentage: '16.67%',
			},
		},
	};

	const dataArray = [
		['Minuto', 'Gols'],
		...Object.entries(dataMockup.minute).map(([minute, { total }]) => [
			minute + ' min',
			total,
		]),
	];

	console.log(dataArray);

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
