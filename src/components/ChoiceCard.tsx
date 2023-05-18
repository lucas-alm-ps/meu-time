import styled from 'styled-components';
import { Instruction } from '../styles/Instruction';
import { useState } from 'react';

interface ChoiceCardProps {
	instruction: string;
	choices: string[];
	title: string;
}

export default function ChoiceCard({
	instruction,
	choices,
	title,
}: ChoiceCardProps) {
	const [choice, setChoice] = useState('');
	

	function handleOptionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
		const selectedChoice = event.target.value;
		setChoice(selectedChoice);
	}

	return (
		<>
			<Instruction>{instruction}</Instruction>
			<ChoiceBox choice={choice}>
				<ChoiceTitle>{title}</ChoiceTitle>

				<StyledSelect onChange={handleOptionSelect}>
					{choices.map((choice, index) => (
						<option value={choice} key={index}>
							{choice}
						</option>
					))}
				</StyledSelect>
			</ChoiceBox>
		</>
	);
}

const ChoiceBox = styled.div`
	width: 470px;
	padding: 30px 70px;
	border: 1px solid #656464;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ChoiceTitle = styled.h2`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 47px;
	color: #ffffff;
	margin-bottom: 25px;
`;

const StyledSelect = styled.select`
	width: 330px;
	height: 65px;

	background: #464444;
	border-radius: 10px;
	padding: 0 20px;

	font-family: 'Roboto';
	font-style: italic;
	font-weight: 700;
	font-size: 28px;
	line-height: 33px;
	color: #b3b3b3;

	text-align: center;

	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

	& option {
		font-weight: 700;
		font-style: normal;
		font-size: 25px;
	}
`;
