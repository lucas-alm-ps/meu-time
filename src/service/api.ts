import axios from 'axios';
import { loadApiKey } from '../context/ApiKeyContext';

function createApi() {
	const apiKey = loadApiKey();

	const api = axios.create({
		baseURL: 'https://v3.football.api-sports.io/',
		headers: {
			'x-rapidapi-key': apiKey,
			'x-rapidapi-host': 'v3.football.api-sports.io',
		},
	});

	// UNCOMMENT TO DEBUG API CALLS
	// api.interceptors.request.use((config) => {
	// 	console.log('Request Headers:', config.headers);
	// 	return config;
	// });

	return api;
}

export const api = createApi();
