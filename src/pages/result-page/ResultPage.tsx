import styled from 'styled-components';
import { BoxTitle } from '../../styles';
import MainPage from '../main-page/MainPage';
import GoalsGraph from './GoalsGraph';
import MatchesResultTable from './MatchesResultTable';
import PlayerTable from './PlayerTable';
import FormationCount from './FormationCount';
import { useContext } from 'react';
import ChoiceContext from '../../context/ChoiceContext';
import useStatistics from '../../hooks/useStatistics';
import Spinner from '../../components/Spinner';
import usePlayers from '../../hooks/usePlayers';
import { Navigate } from 'react-router-dom';
import { FaSearch as SearchIcon } from 'react-icons/fa';

export default function ResultPage() {
	const {
		selectedLeagueId,
		selectedTeamId,
		selectedSeason,
		setSelectedTeam,
		setSelectedTeamId,
		setSelectedCountry,
		setSelectedLeagueId,
		setSelectedLeague,
		setSelectedSeason,
	} = useContext(ChoiceContext);

	const { fixtures, statisticsLoading, minutesGoalsPercentage, lineups } =
		useStatistics(selectedLeagueId, selectedSeason, selectedTeamId);
	const { players, playersLoading } = usePlayers(
		selectedLeagueId,
		selectedSeason
	);

	if (!selectedLeagueId || !selectedTeamId || !selectedSeason)
		return <Navigate to='/choose' />;

	if (statisticsLoading || playersLoading) return <Spinner />;

	return (
		<MainPage>
			<Page>
				<BoxTitle>Jogadores</BoxTitle>
				<PlayerTable data={players} />

				<BoxTitle>Resultados gerais</BoxTitle>
				{fixtures && Object.keys(fixtures).length > 0 && (
					<MatchesResultTable data={fixtures as any} />
				)}

				<BoxTitle>Estatisticas</BoxTitle>
				<StatisticsBox>
					<GoalsGraph data={minutesGoalsPercentage as any} />
					<FormationCount data={lineups} />
				</StatisticsBox>
			</Page>
			<SearchButton onClick={changeSearch}>
				<SearchIcon size={40} color='white' />
			</SearchButton>
		</MainPage>
	);

	function changeSearch() {
		resetSearch();
		return <Navigate to='/choose' />;
	}

	function resetSearch() {
		console.log('reset');
		setSelectedTeamId('');
		setSelectedTeam('');
		setSelectedCountry('');
		setSelectedLeague('');
		setSelectedLeagueId('');
		setSelectedSeason('');
	}
}

const Page = styled.div`
	width: 100%;
	align-items: start;
	flex-direction: column;
`;

const StatisticsBox = styled.div`
	display: flex;
`;

const SearchButton = styled.button`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: none;
	background-color: #d01e1f;
	cursor: pointer;

	position: fixed;
	bottom: 20px;
	right: 20px;
`;
