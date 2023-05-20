import { useContext, useEffect } from 'react';
import ChoiceCard from '../../components/ChoiceCard';
import ChoiceContext from '../../context/ChoiceContext';
import MainPage from '../main-page/MainPage';

export default function ChoicesPage() {
	const {
		countriesOptions,
		loadingCountries,
		setSelectedCountry,
		selectedCountry,
	} = useContext(ChoiceContext);

	if (loadingCountries) return <MainPage>Carregando...</MainPage>;

	return (
		<MainPage>
			<ChoiceCard
				title='País'
				choices={countriesOptions}
				instruction='Selecione o país desejado'
				setChoice={setSelectedCountry}
			/>

			{selectedCountry && (
				<ChoiceCard
					title='Liga'
					choices={countriesOptions}
					instruction='Selecione a liga desejado'
					setChoice={setSelectedCountry}
				/>
			)}
		</MainPage>
	);
}
