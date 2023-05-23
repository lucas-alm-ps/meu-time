import styled from 'styled-components';
import { Instruction } from '../styles/';
import { useState } from 'react';

interface ChoiceCardProps {
	instruction: string;
	choices: string[];
	title: string;
	setChoice: (choice: string) => void;
	setChoiceId?: (choiceId: string) => void;
	ids?: string[];
	choice: string;
}

export default function ChoiceCard({
	instruction,
	choices,
	title,
	setChoice,
	setChoiceId,
	ids,
	choice,
}: ChoiceCardProps) {
	const [selected, setSelected] = useState(false);

	function handleOptionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
		const selectedIndex = event.target.selectedIndex;
		const selectedChoice = event.target.value;
		setChoice(selectedChoice);
		setSelected(true);
		if (setChoiceId && ids && ids.length > selectedIndex) {
			const selectedId = ids[selectedIndex];
			setChoiceId(selectedId);
		}
	}

	return (
		<>
			{!selected && <Instruction>{instruction}</Instruction>}
			<ChoiceBox selected={selected}>
				<ChoiceTitle selected={selected}>
					{choices.length > 0 ? title : '0 resultados'}
				</ChoiceTitle>

				{choices.length > 0 && (
					<StyledSelect
						onChange={handleOptionSelect}
						selected={selected}
						value={choice}>
						<option value=''>Selecione</option>
						{choices.map((choice, index) => (
							<option
								value={choice}
								key={index}
								id={ids && ids[index - 1]}>
								{choice}
							</option>
						))}
					</StyledSelect>
				)}
			</ChoiceBox>
		</>
	);
}

interface SelectionProps {
	selected: boolean;
}
const ChoiceBox = styled.div<SelectionProps>`
	width: 600px;
	padding: 30px 70px;
	border: 1px solid #656464;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;

	${({ selected }) =>
		selected &&
		`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		`}
`;

const ChoiceTitle = styled.h2<SelectionProps>`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 47px;
	color: #ffffff;
	margin-bottom: 25px;

	${({ selected }) =>
		selected &&
		`
		margin: 0 50px 0 0;
	`}
`;

const StyledSelect = styled.select<SelectionProps>`
	width: 330px;
	height: 65px;

	background: #464444;
	border-radius: 10px;
	border: none;
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

	${({ selected }) =>
		selected &&
		`
		background: #D01E1F;
	`}
`;
