import { FaKey as KeyIcon } from 'react-icons/fa';
import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';

export default function Input() {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<StyledInputBox>
			<KeyIcon className='icon' />
			<StyledInput
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='XxXxXxXxXxXxXxXxX'
			/>
		</StyledInputBox>
	);
}

const StyledInputBox = styled.div`
	width: 490px;
	height: 65px;
	background: #464444;
	border-radius: 10px;

	display: flex;
	align-items: center;
	padding: 0 25px;

	.icon {
		margin-right: 25px;
		height: 2em;
		font-size: 25px;
		color: #bdbdbd;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0;
	background: none;
	border: none;
	outline: none;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: 'Roboto';
	font-style: italic;
	font-weight: 700;
	font-size: 28px;
	line-height: 0px;
	color: #fff;

	::placeholder {
		width: 100%;
		height: 100%;
		font-style: bold;
		color: #a2a2a2;
	}
`;
