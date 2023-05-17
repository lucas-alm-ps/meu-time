import styled from 'styled-components';

interface CardShowerProps {
	title: string;
	children?: React.ReactNode;
}

export default function CardShower({ title, children }: CardShowerProps) {
	return (
		<div>
			<StyledTitle>{title}</StyledTitle>
			{children}
		</div>
	);
}

const StyledTitle = styled.h5`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 47px;
	color: #ffffff;
`;
