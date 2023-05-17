import ChoiceCard from '../../components/ChoiceCard';
import MainPage from '../main-page/MainPage';

export default function ChoicesPage() {
	return (
		<MainPage>
			<ChoiceCard
				title='País'
				choices={[
					'A',
					'B',
					'c',
					'A',
					'B',
					'c',
					'A',
					'B',
					'c',
					'A',
					'B',
					'c',
				]}
				instruction='Selecione o país desejado'
			/>
		</MainPage>
	);
}
