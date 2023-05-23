/* eslint-disable @typescript-eslint/no-empty-function */
import styled from 'styled-components';
import footballPlayer from '../../assets/football-player.png';
import { StyledPage } from '../../styles/Page';
import { Instruction } from '../../styles/';
import Input from './Input';
import Button from '../../components/Button';
import MainPage from '../main-page/MainPage';
import { useContext, useState } from 'react';
import ApiKeyContext from '../../context/ApiKeyContext';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
	const [inputValue, setInputValue] = useState('');

	const {
		setApiKey,
		isAuthenticated,
		error: apiKeyError,
	} = useContext(ApiKeyContext);

	if (isAuthenticated) {
		return <Navigate to='/choose' />;
	}

	return (
		<MainPage>
			<Page>
				<LeftSide>
					<MainText>
						Explore o mundo do futebol em <span>um só lugar</span>
					</MainText>
					<Instruction>Insira sua chave da API-Football</Instruction>
					<Input
						inputValue={inputValue}
						setInputValue={setInputValue}
					/>
					{apiKeyError && (
						<ErrorMessage>
							Parece que sua chave não é válida!
						</ErrorMessage>
					)}
					<Button text='Entrar' handleClick={handleClick} />
				</LeftSide>

				<RightSide>
					<img src={footballPlayer} alt='Football Player' />
				</RightSide>
			</Page>
		</MainPage>
	);

	async function handleClick() {
		setApiKey(inputValue);
	}
}

const Page = styled(StyledPage)`
	width: auto;
	display: flex;
	align-items: start;
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
