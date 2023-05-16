import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={LoginPage} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
