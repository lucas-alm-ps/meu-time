import { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledPage } from '../../styles/Page';
import Bar from '../../components/Bar';

export default function MainPage({ children }: { children?: ReactNode }) {
	return (
		<Page>
			<Bar />
			{children}
		</Page>
	);
}

const Page = styled(StyledPage)`
	width: 100vw;
	height: 100vh;
	flex-direction: column;
`;
