import { FallingLines } from 'react-loader-spinner';
import MainPage from '../pages/main-page/MainPage';

export default function Spinner() {
	return (
		<MainPage>
			<FallingLines color='#F5950C' height='100' width='100' />;
		</MainPage>
	);
}
