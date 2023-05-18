import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import ChoicesPage from './pages/choices-page/ChoicesPage';
import ResultPage from './pages/result-page/ResultPage';
import { ChoiceProvider } from './context/ChoiceContext';

function App() {
	return (
		<ChoiceProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' Component={LoginPage} />
					<Route path='/choose' Component={ChoicesPage} />
					<Route path='/result' Component={ResultPage} />
				</Routes>
			</BrowserRouter>
		</ChoiceProvider>
	);
}

export default App;
