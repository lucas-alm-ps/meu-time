/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

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

	const savedApiKey = loadApiKey();
	if (savedApiKey) {
		setApiKey(savedApiKey);
	}

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
