/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { createContext, useEffect, useState } from 'react';

interface ApiKeyContent {
	apiKey: string;
	setApiKey: (apiKey: string) => void;
}

const ApiKeyContext = createContext<ApiKeyContent>({
	apiKey: '',
	setApiKey: () => {},
});
export default ApiKeyContext;

interface ApiKeyProviderProps {
	children: React.ReactNode;
}

export function ApiKeyProvider({ children }: ApiKeyProviderProps) {
	const [apiKey, setApiKey] = useState('');
	const [executeEffect, setExecuteEffect] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		if (executeEffect) {
			localStorage.setItem('apiKey', apiKey);
			setIsAuthenticated(isApiKeyValid(apiKey));
			setExecuteEffect(false);
		} else {
			setExecuteEffect(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [apiKey]);

	useEffect(() => {
		const savedApiKey = loadApiKey();
		if (savedApiKey) {
			setApiKey(savedApiKey);
		}
	}, []);

	return (
		<ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
			{children}
		</ApiKeyContext.Provider>
	);
}

function loadApiKey() {
	const apiKey = localStorage.getItem('apiKey');
	return apiKey;
}

function isApiKeyValid(apiKey: string) {
	if (apiKey.length === 0) return false;
	// add api call to check status of api key
	return true;
}
