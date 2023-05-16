import { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledPage } from '../../styles/Page';

export default function MainPage({ children }: { children?: ReactNode }) {
	return <Page>{children}</Page>;
}

const Page = styled(StyledPage)`
	width: 100vw;
	height: 100vh;
	flex-direction: column;
`;
