import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import ChoiceContext from '../context/ChoiceContext';
import { useContext } from 'react';

export default function Bar() {
	const { selectedTeam } = useContext(ChoiceContext);

	return (
		<StyledBar>
			<StyledTeamName>{selectedTeam && selectedTeam}</StyledTeamName>
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
	padding: 15px 85px 15px 85px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #1d1d1d;
`;

const StyledTeamName = styled.h1`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 900;
	font-size: 40px;
	line-height: 47px;
	color: #f5950c;
`;
