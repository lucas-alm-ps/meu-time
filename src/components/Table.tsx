import { ReactNode } from 'react';
import styled from 'styled-components';

interface TableProps<T> {
	titles: string[];
	data: T[];
	fontSize?: string;
	columnColors?: string[];
}

export default function Table<T extends Record<string, unknown>>({
	titles,
	data,
	fontSize,
	columnColors,
}: TableProps<T>) {
	return (
		<StyledTable fontSize={fontSize}>
			<thead>
				<tr>
					{titles.map((title, index) => (
						<th key={index} className={`column-${index}`}>
							{title}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((item, index) => (
						<tr key={index}>
							{Object.keys(item).map((key, columnIndex) => (
								<td
									key={columnIndex}
									style={{
										color:
											columnColors &&
											columnColors[columnIndex],
									}}>
									{key === 'image' ? (
										<img
											src={item[key] as string}
											alt='Player'
										/>
									) : (
										(item[key] as ReactNode)
									)}
								</td>
							))}
						</tr>
					))}
			</tbody>
		</StyledTable>
	);
}

interface StyledTableProps {
	fontSize?: string;
}

const StyledTable = styled.table<StyledTableProps>`
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
		vertical-align: middle;
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
		font-size: ${(props) => props.fontSize || '20px'};
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

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
	}
`;
