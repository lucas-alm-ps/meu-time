import axios, { AxiosResponse } from 'axios';
import { loadApiKey } from '../context/ApiKeyContext';

function createApi() {
	const apiKey = loadApiKey();

	const api = axios.create({
		baseURL: 'https://api-football-v1.p.rapidapi.com/',
		headers: {
			'x-rapidapi-key': apiKey,
			'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
		},
	});

	// UNCOMMENT TO SEE REQUEST HEADERS
	// api.interceptors.request.use((config) => {
	// 	console.log('Request Headers:', config.headers);
	// 	return config;
	// });

	return api;
}

export const api = createApi();

export async function handleRequest<T>(
	request: () => Promise<AxiosResponse<T>>
): Promise<T> {
	try {
		const response = await request();
		return response.data;
	} catch (error) {
		throw new Error(`Request failed with status ${error}`);
	}
}
