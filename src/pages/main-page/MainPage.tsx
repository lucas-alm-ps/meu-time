import { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledPage } from '../../styles/Page';
import Bar from '../../components/Bar';

export default function MainPage({
	children,
	smallerPage,
}: {
	children?: ReactNode;
	smallerPage?: boolean;
}) {
	return (
		<Page smallerPage={smallerPage}>
			<Bar />
			{children}
		</Page>
	);
}

interface PageProps {
	smallerPage?: boolean;
}

const Page = styled(StyledPage)<PageProps>`
	width: 100vw;
	height: 100%;
	flex-direction: column;
	${({ smallerPage }) =>
		smallerPage ? 'padding: 30px 140px' : 'padding: 30px 85px'};
	margin-top: 120px;
	margin-bottom: 20px;
`;
