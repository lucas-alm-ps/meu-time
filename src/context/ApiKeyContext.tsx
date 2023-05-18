import { createContext, useState } from 'react';

interface ApiKeyContent {
	apiKey: string;
}

const ApiKeyContext = createContext<ApiKeyContent>({
	apiKey: '',
});
export default ApiKeyContext;

interface ApiKeyProviderProps {
	children: React.ReactNode;
}

export function ApiKeyProvider({ children }: ApiKeyProviderProps) {
	const [apiKey, setApiKey] = useState('');

	return (
		<ApiKeyContext.Provider value={{ apiKey }}>
			{children}
		</ApiKeyContext.Provider>
	);
}
