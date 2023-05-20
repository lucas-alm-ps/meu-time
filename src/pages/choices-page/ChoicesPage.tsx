import { useContext, useEffect } from 'react';
import ChoiceCard from '../../components/ChoiceCard';
import ChoiceContext from '../../context/ChoiceContext';
import MainPage from '../main-page/MainPage';
import { getCountries } from '../../service/dataApi';

export default function ChoicesPage() {
	const { countriesOptions, loadingCountries, setSelectedCountry } =
		useContext(ChoiceContext);

	if (loadingCountries) return <MainPage>Carregando...</MainPage>;

	return (
		<MainPage>
			<ChoiceCard
				title='País'
				choices={countriesOptions}
				instruction='Selecione o país desejado'
				setChoice={setSelectedCountry}
			/>
		</MainPage>
	);
}
