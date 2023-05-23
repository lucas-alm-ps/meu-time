import { api, handleRequest } from './api';

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

export async function getPlayers(teamId: string, season: string) {
	return await handleRequest(() =>
		api.get(`/v3/players`, {
			params: { team: teamId, season },
		})
	);
}
