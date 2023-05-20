import axios from 'axios';
import { handleRequest } from './api';

interface GetPlayersParams {
	team: string;
	season: string;
}

export async function getPlayers({ team, season }: GetPlayersParams) {
	return await handleRequest(() =>
		axios.get(`/players/`, { params: { team, season } })
	);
}
