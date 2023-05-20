/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from 'react';
import { getCountries } from '../service/dataApi';

interface ChoiceContent {
	selectedCountry: string;
	selectedLeague: string;
	selectedTeam: string;
	selectedSeason: string;
	countriesOptions: string[];
	leaguesOptions: string[];
	teamsOptions: string[];
	seasonsOptions: string[];
	loadingCountries: boolean;
	loadingLeagues: boolean;
	loadingTeams: boolean;
	loadingSeasons: boolean;
	setSelectedCountry: (inputValue: string) => void;
}

const ChoiceContext = createContext<ChoiceContent>({
	selectedCountry: '',
	selectedLeague: '',
	selectedTeam: '',
	selectedSeason: '',
	countriesOptions: [],
	leaguesOptions: [],
	teamsOptions: [],
	seasonsOptions: [],
	loadingCountries: false,
	loadingLeagues: false,
	loadingTeams: false,
	loadingSeasons: false,
	setSelectedCountry: () => {},
});
export default ChoiceContext;

interface ChoiceProviderProps {
	children: React.ReactNode;
}

export function ChoiceProvider({ children }: ChoiceProviderProps) {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [selectedLeague, setSelectedLeague] = useState('');
	const [selectedTeam, setSelectedTeam] = useState('');
	const [selectedSeason, setSelectedSeason] = useState('');
	const [countriesOptions, setCountriesOptions] = useState<string[]>([]);
	const [leaguesOptions, setLeaguesOptions] = useState<string[]>([]);
	const [teamsOptions, setTeamsOptions] = useState<string[]>([]);
	const [seasonsOptions, setSeasonsOptions] = useState<string[]>([]);
	const [loadingCountries, setLoadingCountries] = useState(false);
	const [loadingLeagues, setLoadingLeagues] = useState(false);
	const [loadingTeams, setLoadingTeams] = useState(false);
	const [loadingSeasons, setLoadingSeasons] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ChoiceContext.Provider
			value={{
				selectedCountry,
				selectedLeague,
				selectedSeason,
				selectedTeam,
				countriesOptions,
				leaguesOptions,
				teamsOptions,
				seasonsOptions,
				loadingCountries,
				loadingLeagues,
				loadingTeams,
				loadingSeasons,
				setSelectedCountry,
			}}>
			{children}
		</ChoiceContext.Provider>
	);

	async function fetchData() {
		try {
			const countries = await getCountryOptions(setLoadingCountries);
			setCountriesOptions(countries);
		} catch (error) {
			console.log(error);
		}
	}
}

interface Country {
	name: string;
	code: string;
	flag: string;
}

async function getCountryOptions(
	setLoadingCountries: (value: boolean) => void
): Promise<string[]> {
	setLoadingCountries(true);
	try {
		const { response } = await getCountries();
		const countries: string[] = response.map(
			(country: Country) => country.name
		);
		setLoadingCountries(false);
		return countries;
	} catch (error) {
		console.log(error);
		return [];
	}
}
