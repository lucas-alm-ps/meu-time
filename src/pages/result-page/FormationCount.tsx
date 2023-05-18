import styled from 'styled-components';
import CardShower from '../../components/CardShower';

export default function FormationCount() {
	return (
		<CardShower title='Formações'>
			<Box>
				<Formation>4-3-3</Formation>
				<FormationNCount>53 vezes</FormationNCount>
			</Box>
		</CardShower>
	);
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
