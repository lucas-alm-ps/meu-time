import styled from 'styled-components';

export default function Table() {
	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Nome</th>
					<th>País</th>
					<th>Esporte</th>
					<th>Medalhas</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Nome</td>
					<td>País</td>
					<td>Esporte</td>
					<td>Medalhas</td>
				</tr>
				<tr>
					<td>Nome</td>
					<td>País</td>
					<td>Esporte</td>
					<td>Medalhas</td>
				</tr>
			</tbody>
		</StyledTable>
	);
}

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
	border-spacing: 100px;
	padding: 100px;

	th:first-child,
	td:first-child {
		padding-left: 40px;
	}
	th:last-child,
	td:last-child {
		padding-right: 40px;
	}

	th,
	td {
		text-align: left;
	}

	th {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 23px;
		color: #e2e2e2;
		padding: 10px;
	}

	td {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: #ffffff;
		padding: 15px 8px;
	}

	thead {
		background: #737373;
		height: 38px;
		padding: 8px;
	}

	tbody {
		background: #464444;
	}
`;
