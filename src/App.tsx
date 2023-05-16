import styled from 'styled-components';
import LoginPage from './pages/login-page/LoginPage';
import { StyledPage } from './styles/Page';

function App() {
	return (
		<MainPage>
			<LoginPage />
		</MainPage>
	);
}

export default App;

const MainPage = styled(StyledPage)`
	width: 100vw;
	height: 100vh;
	flex-direction: column;
`;
