import { useContext } from 'react';
import ChoiceCard from '../../components/ChoiceCard';
import ChoiceContext from '../../context/ChoiceContext';
import MainPage from '../main-page/MainPage';

export default function ChoicesPage() {
	const {
		countryOptions,
		countryLoading,
		setSelectedCountry,
		seasonLoading,
		teamLoading,
		leagueLoading,
		seasonOptions,
		setSelectedLeague,
		setSelectedSeason,
		setSelectedTeam,
		leagueOptions,
		teamOptions,
		selectedCountry,
		selectedLeague,
		selectedSeason,
		selectedTeam,
	} = useContext(ChoiceContext);

	if (countryLoading) return <MainPage>Carregando...</MainPage>;

	return (
		<MainPage>
			<ChoiceCard
				title='País'
				choices={countryOptions}
				instruction='Selecione o país desejado'
				setChoice={setSelectedCountry}
			/>
			{seasonLoading && <MainPage>Carregando...</MainPage>}

			{selectedCountry && (
				<ChoiceCard
					title='Temporada'
					choices={seasonOptions}
					instruction='Selecione a temporada desejada'
					setChoice={setSelectedSeason}
				/>
			)}

			{leagueLoading ? (
				<MainPage>Carregando...</MainPage>
			) : selectedCountry && selectedSeason ? (
				<ChoiceCard
					title='Liga'
					choices={leagueOptions}
					instruction='Selecione a liga desejada'
					setChoice={setSelectedLeague}
				/>
			) : null}

			{teamLoading ? (
				<MainPage>Carregando...</MainPage>
			) : selectedCountry && selectedSeason && selectedLeague ? (
				<ChoiceCard
					title='Time'
					choices={teamOptions}
					instruction='Selecione o time desejado'
					setChoice={setSelectedTeam}
				/>
			) : null}
		</MainPage>
	);
}

// useEffect(() => {
// 	setSelectedLeague('');
// }, [selectedCountry, selectedSeason]);
