import { useContext, useEffect, useState } from 'react';
import { getCountries } from '../service/dataApi';
import ApiKeyContext from '../context/ApiKeyContext';

interface Country {
	name: string;
	code: string;
	flag: string;
}

export default function useCountry() {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [countryOptions, setCountryOptions] = useState<string[]>([]);
	const [, setData] = useState<Country[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const { isAuthenticated } = useContext(ApiKeyContext);

	async function fetchCountries() {
		try {
			setLoading(true);
			const { response } = await getCountries();
			setData(response);
			const countries: string[] = response.map(
				(country: Country) => country.name
			);
			setCountryOptions(countries);
		} catch (error: unknown) {
			console.log('Error:', error);
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (isAuthenticated) fetchCountries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	return {
		countryOptions,
		countryLoading: loading,
		countryError: error,
		setSelectedCountry,
		selectedCountry,
	};
}
