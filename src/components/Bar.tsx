import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import ChoiceContext from '../context/ChoiceContext';
import { useContext } from 'react';

interface BarProps {
	teamName?: string;
}

export default function Bar({ teamName }: BarProps) {
	const { team } = useContext(ChoiceContext);

	return (
		<StyledBar>
			<StyledTeamName>{team}</StyledTeamName>
			<Link to='/'>
				<Logo />
			</Link>
		</StyledBar>
	);
}

const StyledBar = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 45px 85px 0 85px;
	position: fixed;
	top: 0;
	left: 0;
`;

const StyledTeamName = styled.h1`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 900;
	font-size: 40px;
	line-height: 47px;
	color: #f5950c;
`;
