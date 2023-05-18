/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

interface ChoiceContent {
	country: string;
	league: string;
	team: string;
	season: string;
}

const ChoiceContext = createContext<ChoiceContent>({
	country: '',
	league: '',
	team: '',
	season: '',
});
export default ChoiceContext;

interface ChoiceProviderProps {
	children: React.ReactNode;
}

export function ChoiceProvider({ children }: ChoiceProviderProps) {
	const [country, setCountry] = useState('');
	const [league, setLeague] = useState('');
	const [team, setTeam] = useState('');
	const [season, setSeason] = useState('');

	if (country.length === 0) {
		return <>MESSAGE</>;
	}

	if (league.length === 0) {
		return <>MESSAGE</>;
	}

	if (team.length === 0) {
		return <>MESSAGE</>;
	}

	if (season.length === 0) {
		return <>MESSAGE</>;
	}

	return (
		<ChoiceContext.Provider value={{ country, league, season, team }}>
			{children}
		</ChoiceContext.Provider>
	);
}
