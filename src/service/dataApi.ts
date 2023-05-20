import axios, { AxiosResponse } from 'axios';
import { api, handleRequest } from './api';

interface GetPlayersParams {
	team: string;
	season: string;
}

export async function getPlayers({ team, season }: GetPlayersParams) {
	return await handleRequest(() =>
		axios.get(`/players/`, { params: { team, season } })
	);
}

export async function getCountries() {
	const response = handleRequest(() => api.get(`v3/countries`));
	return response;
}
