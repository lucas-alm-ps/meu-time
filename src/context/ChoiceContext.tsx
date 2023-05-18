/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import MainPage from '../pages/main-page/MainPage';
import { BoxTitle } from '../styles';

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

	return (
		<ChoiceContext.Provider value={{ country, league, season, team }}>
			{children}
		</ChoiceContext.Provider>
	);
}

function CustomMessage() {
	return (
		<MainPage>
			<BoxTitle>{}</BoxTitle>
		</MainPage>
	);
}
