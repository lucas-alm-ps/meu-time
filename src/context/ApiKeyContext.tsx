/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { createContext, useEffect, useState } from 'react';

interface ApiKeyContent {
	apiKey: string;
	setApiKey: (apiKey: string) => void;
	isAuthenticated: boolean;
}

const ApiKeyContext = createContext<ApiKeyContent>({
	apiKey: '',
	setApiKey: () => {},
	isAuthenticated: false,
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
		} else {
			console.log('No api key found');
		}
	}, []);

	return (
		<ApiKeyContext.Provider value={{ apiKey, setApiKey, isAuthenticated }}>
			{children}
		</ApiKeyContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function loadApiKey() {
	const apiKey = localStorage.getItem('apiKey');
	if (import.meta.env.VITE_DEV_MODE === 'true') {
		return import.meta.env.VITE_API_KEY;
	}
	return apiKey;
}

function isApiKeyValid(apiKey: string): boolean {
	if (apiKey.length === 0) return false;
	// add api call to check status of api key
	return true;
}
