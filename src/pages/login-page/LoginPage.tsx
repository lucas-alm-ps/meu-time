import styled from 'styled-components';
import footballPlayer from '../../assets/football-player.png';
import { StyledPage } from '../../styles/Page';
import { Instruction } from '../../styles/Instruction';
import Input from './Input';
import Button from '../../components/Button';
import MainPage from '../main-page/MainPage';
import { useState } from 'react';

export default function LoginPage() {
	const [error, setError] = useState(null);

	return (
		<MainPage>
			<Page>
				<LeftSide>
					<MainText>
						Explore o mundo do futebol em <span>um só lugar</span>
					</MainText>
					<Instruction>Insira sua chave da API-Football</Instruction>
					<Input />
					{error && <ErrorMessage>{error}</ErrorMessage>}
					<Button text='Entrar' setError={setError}/>
				</LeftSide>

				<RightSide>
					<img src={footballPlayer} alt='Football Player' />
				</RightSide>
			</Page>
		</MainPage>
	);
}

const Page = styled(StyledPage)`
	width: auto;
`;

const LeftSide = styled.div`
	width: 50%;
`;

const RightSide = styled.div`
	width: 550px;
`;

const MainText = styled.h1`
	width: 550px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 800;
	font-size: 70px;
	line-height: 82px;
	margin-bottom: 50px;

	color: #ffffff;

	span {
		color: #f5950c;
	}
`;

const ErrorMessage = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	margin-top: 15px;
	color: #f5950c;
`;
