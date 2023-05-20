import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import ChoicesPage from './pages/choices-page/ChoicesPage';
import ResultPage from './pages/result-page/ResultPage';
import { ChoiceProvider } from './context/ChoiceContext';
import { ApiKeyProvider } from './context/ApiKeyContext';
import ProtectedRoute from './routes/ProtectedRoute';
import React from 'react';

export default function App() {
	return (
		<ApiKeyProvider>
			<ChoiceProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' Component={LoginPage} />
						<Route path='/choose' Component={ChoicesPage} />
						<Route path='/result' Component={ResultPage} />
						<Route
							path='/prot'
							element={
								<ProtectedRoute
									authenticationPath='/'
									outlet={<ChoicesPage />}
								/>
							}
						/>
						<Route path='*' element={<h1>Not Found</h1>} />
					</Routes>
				</BrowserRouter>
			</ChoiceProvider>
		</ApiKeyProvider>
	);
}
