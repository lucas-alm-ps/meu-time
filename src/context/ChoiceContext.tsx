/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import useCountry from '../hooks/useCountry';
import useSeason from '../hooks/useSeason';
import useLeague from '../hooks/useLeague';
import useTeam from '../hooks/useTeam';

interface ChoiceContent {
	countryOptions: string[];
	countryLoading: boolean;
	setSelectedCountry: (country: string) => void;
	seasonOptions: string[];
	seasonLoading: boolean;
	setSelectedSeason: (season: string) => void;
	leagueOptions: string[];
	leagueLoading: boolean;
	setSelectedLeague: (league: string) => void;
	teamOptions: string[];
	teamLoading: boolean;
	setSelectedTeam: (team: string) => void;
	selectedCountry: string;
	selectedSeason: string;
	selectedLeague: string;
	selectedTeam: string;
	selectedLeagueId: string;
	setSelectedLeagueId: (leagueId: string) => void;
	leagueOptionsId: string[];
}

interface ChoiceProviderProps {
	children: React.ReactNode;
}

const ChoiceContext = createContext<ChoiceContent>({
	countryOptions: [],
	countryLoading: false,
	setSelectedCountry: () => {},
	seasonOptions: [],
	seasonLoading: false,
	setSelectedSeason: () => {},
	leagueOptions: [],
	leagueLoading: false,
	setSelectedLeague: () => {},
	teamOptions: [],
	teamLoading: false,
	setSelectedTeam: () => {},
	selectedCountry: '',
	selectedSeason: '',
	selectedLeague: '',
	selectedTeam: '',
	selectedLeagueId: '',
	setSelectedLeagueId: () => {},
	leagueOptionsId: [],
});
export default ChoiceContext;

export function ChoiceProvider({ children }: ChoiceProviderProps) {
	const {
		countryOptions,
		countryLoading,
		setSelectedCountry,
		selectedCountry,
	} = useCountry();
	const { seasonOptions, seasonLoading, setSelectedSeason, selectedSeason } =
		useSeason();
	const {
		leagueOptions,
		leagueLoading,
		setSelectedLeague,
		selectedLeagueId,
		selectedLeague,
		setSelectedLeagueId,
		leagueOptionsId,
	} = useLeague(selectedCountry);
	const { teamOptions, teamLoading, setSelectedTeam, selectedTeam } = useTeam(
		{ selectedLeagueId, selectedSeason }
	);

	return (
		<ChoiceContext.Provider
			value={{
				countryOptions,
				countryLoading,
				setSelectedCountry,
				seasonOptions,
				seasonLoading,
				setSelectedSeason,
				leagueOptions,
				leagueLoading,
				setSelectedLeague,
				teamOptions,
				teamLoading,
				setSelectedTeam,
				selectedCountry,
				selectedLeague,
				selectedSeason,
				selectedTeam,
				selectedLeagueId,
				setSelectedLeagueId,
				leagueOptionsId,
			}}>
			{children}
		</ChoiceContext.Provider>
	);
}
