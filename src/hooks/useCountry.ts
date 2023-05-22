import { useEffect, useState } from 'react';
import { getCountries } from '../service/dataApi';

interface Country {
	name: string;
	code: string;
	flag: string;
}

export default function useCountry() {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [countryOptions, setCountryOptions] = useState<string[]>([]);
	const [data, setData] = useState<Country[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

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
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	}

	console.log('COUNTRY CHANGED', selectedCountry);

	useEffect(() => {
		fetchCountries();
	}, []);

	return {
		countryOptions,
		countryLoading: loading,
		countryError: error,
		setSelectedCountry,
		selectedCountry,
	};
}
