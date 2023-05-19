import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ApiKeyContext from '../context/ApiKeyContext';

export type ProtectedRouteProps = {
	authenticationPath: string;
	outlet: JSX.Element;
};

export default function ProtectedRoute({
	authenticationPath,
	outlet,
}: ProtectedRouteProps) {
	const { apiKey } = useContext(ApiKeyContext);
	if (1 === 1) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: authenticationPath }} />;
	}
}
