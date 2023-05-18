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
	padding: 45px 85px 30px 85px;
	margin-top: 180px;
	margin-bottom: 120px;
`;
