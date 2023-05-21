/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import {
	getLeaguesByCountry,
	getSeasons,
	getTeamsByLeague,
} from '../service/dataApi';
import useCountry from '../hooks/useCountry';

interface ChoiceContent {
	countryOptions: string[];
	countryLoading: boolean;
	changeSelection: (name: string, value: string) => void;
}

interface ChoiceProviderProps {
	children: React.ReactNode;
}

interface Selections {
	country: string;
	season: string;
	league: string;
	team: string;
	leagueId: string;
}
type UpdatedSelections = Partial<Selections>;

const ChoiceContext = createContext<ChoiceContent>({
	countryOptions: [],
	countryLoading: false,
	changeSelection: () => {},
});
export default ChoiceContext;

export function ChoiceProvider({ children }: ChoiceProviderProps) {
	const { countryOptions, countryLoading } = useCountry();

	const [selections, setSelections] = useState<Selections>({
		country: '',
		season: '',
		league: '',
		leagueId: '',
		team: '',
	});

	return (
		<ChoiceContext.Provider
			value={{
				countryOptions,
				countryLoading,
				changeSelection,
			}}>
			{children}
		</ChoiceContext.Provider>
	);

	function changeSelection(name: string, value: string) {
		setSelections((prevSelections) => ({
			...prevSelections,
			[name]: value,
		}));
	}

	// async function fetchData() {
	// 	try {
	// 		console.log('fetching data');
	// 		const seasons = await getSeasonsOptions(setLoadingSeasons);
	// 		setSeasonsOptions(seasons);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// async function fetchLeagues(country: string) {
	// 	try {
	// 		const leagues = await getLeagueOptions(country, setLoadingLeagues);
	// 		console.log(leagues);
	// 		setLeaguesOptions(leagues);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	// async function fetchTeams(league: string) {
	// 	try {
	// 		const teams = await getTeamsOptions(
	// 			league,
	// 			selectedSeason,
	// 			setLoadingTeams
	// 		);
	// 		setTeamsOptions(teams);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
}

async function getSeasonsOptions(setLoadingSeasons: (value: boolean) => void) {
	setLoadingSeasons(true);
	try {
		const { response } = await getSeasons();
		setLoadingSeasons(false);
		return response as string[];
	} catch (error) {
		console.log(error);
		return [];
	}
}

// interface LeagueResponse {
// 	league: League;
// }
// async function getLeagueOptions(
// 	country: string,
// 	setLoadingLeagues: (value: boolean) => void
// ): Promise<string[]> {
// 	setLoadingLeagues(true);
// 	try {
// 		const { response } = await getLeaguesByCountry(country);
// 		const leagues = response.map(
// 			({ league }: LeagueResponse) => league.name
// 		);
// 		setLoadingLeagues(false);
// 		return leagues;
// 	} catch (error) {
// 		console.log(error);
// 		return [];
// 	}
// }

async function getTeamsOptions(
	league: string,
	season: string,
	setLoadingTeams: (value: boolean) => void
): Promise<string[]> {
	setLoadingTeams(true);
	try {
		const { response } = await getTeamsByLeague(league, season);
		const teams = response.map((item: any) => item.team.name);
		setLoadingTeams(false);
		return teams;
	} catch (error) {
		console.log(error);
		return [];
	}
}
