import { api, handleRequest } from './api';

interface GetPlayersParams {
	team: string;
	season: string;
}

export async function getPlayers({ team, season }: GetPlayersParams) {
	return await handleRequest(() =>
		api.get(`/players/`, { params: { team, season } })
	);
}

export async function getSeasons() {
	return await handleRequest(() => api.get(`v3/leagues/seasons`));
}

export async function getLeaguesByCountry(country: string) {
	return await handleRequest(() =>
		api.get(`v3/leagues/`, { params: { country } })
	);
}

export async function getCountries() {
	return await handleRequest(() => api.get(`v3/countries`));
}

export async function getTeamsByLeague(league: string, season: string) {
	return await handleRequest(() =>
		api.get(`v3/teams/`, { params: { league, season } })
	);
}

export async function getTeamStats(
	teamId: string,
	leagueId: string,
	season: string
) {
	return await handleRequest(() =>
		api.get(`v3/teams/statistics`, {
			params: { team: teamId, season, league: leagueId },
		})
	);
}
