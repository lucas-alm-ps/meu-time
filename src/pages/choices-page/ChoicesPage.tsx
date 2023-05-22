/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext } from 'react';
import ChoiceCard from '../../components/ChoiceCard';
import ChoiceContext from '../../context/ChoiceContext';
import MainPage from '../main-page/MainPage';
import Spinner from '../../components/Spinner';
import { Navigate } from 'react-router-dom';

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
		setSelectedLeagueId,
		leagueOptionsId,
		selectedTeamId,
		selectedLeagueId,
		setSelectedTeamId,
		teamOptionsId,
	} = useContext(ChoiceContext);

	if (countryLoading) return <Spinner />;

	if (selectedCountry && selectedLeagueId && selectedSeason && selectedTeamId)
		return <Navigate to='/result' />;

	return (
		<MainPage>
			<ChoiceCard
				title='País'
				choices={countryOptions}
				instruction='Selecione o país desejado'
				setChoice={setSelectedCountry}
			/>
			{seasonLoading && <Spinner />}

			{selectedCountry && (
				<ChoiceCard
					title='Temporada'
					choices={seasonOptions}
					instruction='Selecione a temporada desejada'
					setChoice={setSelectedSeason}
				/>
			)}

			{leagueLoading ? (
				<Spinner />
			) : selectedCountry && selectedSeason ? (
				<ChoiceCard
					title='Liga'
					choices={leagueOptions}
					instruction='Selecione a liga desejada'
					setChoice={setSelectedLeague}
					setChoiceId={setSelectedLeagueId}
					ids={leagueOptionsId}
				/>
			) : null}

			{teamLoading ? (
				<Spinner />
			) : selectedCountry &&
			  selectedSeason &&
			  selectedLeague &&
			  !countryLoading &&
			  !leagueLoading ? (
				<ChoiceCard
					title='Time'
					choices={teamOptions}
					instruction='Selecione o time desejado'
					setChoice={setSelectedTeam}
					setChoiceId={setSelectedTeamId}
					ids={teamOptionsId}
				/>
			) : null}
		</MainPage>
	);
}
