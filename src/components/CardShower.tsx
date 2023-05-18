import styled from 'styled-components';

interface CardShowerProps {
	title: string;
	children?: React.ReactNode;
}

export default function CardShower({ title, children }: CardShowerProps) {
	return (
		<StyledBox>
			<StyledTitle>{title}</StyledTitle>
			{children}
		</StyledBox>
	);
}

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #464444;
	border-radius: 10px;
	padding: 25px 30px;
`;

const StyledTitle = styled.h5`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 47px;
	color: #ffffff;
`;
