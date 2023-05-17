import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import ChoicesPage from './pages/choices-page/ChoicesPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={LoginPage} />
				<Route path='/choose' Component={ChoicesPage} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
