import { useContext, useEffect } from 'react';
import ChoiceCard from '../../components/ChoiceCard';
import ChoiceContext from '../../context/ChoiceContext';
import MainPage from '../main-page/MainPage';

export default function ChoicesPage() {
	const { countryOptions, countryLoading } = useContext(ChoiceContext);

	if (countryLoading) return <MainPage>Carregando...</MainPage>;

	return (
		<MainPage>
			<ChoiceCard
				title='País'
				choices={countryOptions}
				instruction='Selecione o país desejado'
				stateName='country'
			/>
			{/* {loadingSeasons && <MainPage>Carregando...</MainPage>}

			{selectedCountry && (
				<ChoiceCard
					title='Temporada'
					choices={seasonsOptions}
					instruction='Selecione a temproada desejada'
					setChoice={setSelectedSeason}
				/>
			)}

			{loadingLeagues ? (
				<MainPage>Carregando...</MainPage>
			) : selectedCountry && selectedSeason ? (
				<ChoiceCard
					title='Liga'
					choices={leaguesOptions}
					instruction='Selecione a liga desejada'
					setChoice={setSelectedLeague}
				/>
			) : null}

			{loadingTeams ? (
				<MainPage>Carregando...</MainPage>
			) : selectedCountry && selectedSeason && selectedLeague ? (
				<ChoiceCard
					title='Time'
					choices={teamsOptions}
					instruction='Selecione o time desejado'
					setChoice={setSelectedTeam}
				/>
			) : null} */}
		</MainPage>
	);
}
