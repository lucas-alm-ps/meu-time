import { createContext, useState } from 'react';

const ChoiceContext = createContext({});
export default ChoiceContext;

interface ChoiceProviderProps {
	children: React.ReactNode;
}

export function ChoiceProvider({ children }: ChoiceProviderProps) {
	const [country, setCountry] = useState('');

	if (country.length === 0) {
		return <>ESCOLHA UM PAIS</>;
	}

	return (
		<ChoiceContext.Provider value={{}}>{children}</ChoiceContext.Provider>
	);
}
