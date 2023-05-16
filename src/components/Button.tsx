import styled from 'styled-components';

interface ButtonProps {
	text: string;
}

export default function Button({ text }: ButtonProps) {
	return <StyledButton>{text}</StyledButton>;
}

const StyledButton = styled.button`
	width: auto;
	height: 65px;
	background: #d01e1f;
	border-radius: 10px;
	border: none;
	padding: 0 65px;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 900;
	font-size: 35px;
	line-height: 41px;
	color: #ffffff;
	margin: 30px 0;
	cursor: pointer;
`;
