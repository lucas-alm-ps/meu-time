/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from 'react';
import { checkKey } from '../service/dataApi';
import { configureApiHeader } from '../service/api';

interface ApiKeyContent {
	apiKey: string;
	setApiKey: (apiKey: string) => void;
	isAuthenticated: boolean;
	error: Error | null;
}

const ApiKeyContext = createContext<ApiKeyContent>({
	apiKey: '',
	setApiKey: () => {},
	isAuthenticated: false,
	error: null,
});

interface ApiKeyProviderProps {
	children: React.ReactNode;
}

export function ApiKeyProvider({ children }: ApiKeyProviderProps) {
	const [apiKey, setApiKey] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [initializing, setInitializing] = useState(true);

	useEffect(() => {
		if (initializing || !apiKey) return;
		configureApiHeader(apiKey);
		fetchApiKey();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [apiKey]);

	useEffect(() => {
		if (initializing) {
			const savedApiKey = loadApiKey();
			if (!savedApiKey) {
				console.log('No api key found on env file');
			} else {
				setApiKey(savedApiKey);
			}
			setInitializing(false);
		}
	}, [initializing]);

	async function fetchApiKey() {
		try {
			console.log('Checking api key on server');
			const response = await isApiKeyValid();
			setIsAuthenticated(response);
		} catch (err) {
			console.error('Error', err);
			setIsAuthenticated(false);
			setError(err as Error);
		}
	}

	return (
		<ApiKeyContext.Provider
			value={{ apiKey, setApiKey, isAuthenticated, error }}>
			{children}
		</ApiKeyContext.Provider>
	);
}

export function loadApiKey() {
	if (
		typeof import.meta.env.VITE_DEV_MODE !== undefined &&
		import.meta.env.VITE_DEV_MODE === 'true'
	) {
		return import.meta.env.VITE_API_KEY;
	}
	return '';
}

async function isApiKeyValid() {
	return await checkKey();
}

export default ApiKeyContext;
