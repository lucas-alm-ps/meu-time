import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Bar() {
	return (
		<StyledBar>
			<Link to='/'>
				<Logo />
			</Link>
		</StyledBar>
	);
}

const StyledBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: right;
	padding: 45px 85px 0 85px;
	position: fixed;
	top: 0;
	left: 0;
`;
