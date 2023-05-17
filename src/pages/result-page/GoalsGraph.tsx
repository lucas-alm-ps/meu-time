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

	const minuteData = Object.entries(dataMockup.minute).map(
		([minuteRange, range]) => ({
			name: minuteRange,
			percentage: percentageStrToNumber(range.percentage),
		})
	);

	console.log(minuteData);

	return <></>;
}

function percentageStrToNumber(str: string) {
	return Number(str.replace('%', ''));
}
