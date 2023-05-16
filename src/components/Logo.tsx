import styled from 'styled-components';

export default function Logo(): JSX.Element {
	return (
		<StyledLogo>
			<StyledText>Meu</StyledText>
			<StyledTextOrange>Time</StyledTextOrange>
		</StyledLogo>
	);
}
const StyledLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled.title`
	font-family: 'Khand';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 55px;
	color: #d01e1f;
`;

const StyledTextOrange = styled(StyledText)`
	color: #f5950c;
`;
