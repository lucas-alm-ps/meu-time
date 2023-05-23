import axios, { AxiosResponse } from 'axios';

const api = createApi();

function createApi() {
	return axios.create({
		baseURL: 'https://api-football-v1.p.rapidapi.com/',
		headers: {
			'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
		},
	});
}

async function handleRequest<T>(
	request: () => Promise<AxiosResponse<T>>
): Promise<T> {
	try {
		const response = await request();
		console.log('Response:', response);
		return response.data;
	} catch (error) {
		throw new Error(`Request failed with status ${error}`);
	}
}

function configureApiHeader(apiKey: string) {
	api.defaults.headers['x-rapidapi-key'] = apiKey;
}

export { api, handleRequest, configureApiHeader };

// UNCOMMENT TO SEE REQUEST HEADERS
// api.interceptors.request.use((config) => {
// 	console.log('Request Headers:', config.headers);
// 	return config;
// });
