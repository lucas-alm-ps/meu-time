import styled from 'styled-components';
import CardShower from '../../components/CardShower';

interface Lineup {
	formation: string;
	played: number;
}

interface FormationCountProps {
	data: Lineup[];
}

export default function FormationCount({ data }: FormationCountProps) {
	const mostPlayedFormation = data && getMostPlayedFormation(data);
	return (
		<CardShower title='Formações'>
			<Box>
				<Formation>
					{mostPlayedFormation && mostPlayedFormation.formation}
				</Formation>
				<FormationNCount>
					{mostPlayedFormation
						? mostPlayedFormation.played + ' jogos'
						: 'Sem dados'}
				</FormationNCount>
			</Box>
		</CardShower>
	);
}

function getMostPlayedFormation(data: Lineup[]) {
	if (!data || data.length <= 0) return null;
	return data.reduce((acc, curr) => {
		if (curr.played > acc.played) {
			return curr;
		}
		return acc;
	});
}

const Formation = styled.h4`
	font-family: 'Roboto';
	font-style: italic;
	font-weight: 600;
	font-size: 48px;
	line-height: 56px;
	color: #f5950c;
	margin-bottom: 10px;
`;

const FormationNCount = styled.h6`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;

	color: #f5950c;
`;

const Box = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
