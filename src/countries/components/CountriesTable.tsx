import {
  Box,
  Table,
  TableBody,
  TableCell,
  type TableColumn,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@vibe/core';

import useFormat from '../../hooks/useFormat';

const columns: TableColumn[] = [
  {
    id: 'name',
    title: 'Country',
    loadingStateType: 'long-text',
  },
  {
    id: 'region',
    title: 'Region',
    loadingStateType: 'medium-text',
  },
  {
    id: 'subregion',
    title: 'Subregion',
    loadingStateType: 'long-text',
  },
  {
    id: 'capital',
    title: 'Capital',
    loadingStateType: 'medium-text',
  },
  {
    id: 'location',
    title: 'Location',
    loadingStateType: 'medium-text',
  },
  {
    id: 'phone_code',
    title: 'Phone Code',
    loadingStateType: 'medium-text',
  },
  {
    id: 'currency',
    title: 'Currency',
    loadingStateType: 'medium-text',
  },
  {
    id: 'currency_name',
    title: 'Currency name',
    loadingStateType: 'medium-text',
  },
  {
    id: 'latitude',
    title: 'Latitude',
    loadingStateType: 'medium-text',
  },
  {
    id: 'longitude',
    title: 'Longitude',
    loadingStateType: 'medium-text',
  },
  {
    id: 'numbers',
    title: 'Population',
    loadingStateType: 'long-text',
  },
  {
    id: 'numbers6',
    title: 'Area',
    loadingStateType: 'medium-text',
  },
  {
    id: 'numbers2',
    title: 'Population density',
    loadingStateType: 'medium-text',
  },
  {
    id: 'numbers0',
    title: 'Net migration',
    loadingStateType: 'medium-text',
  },
  {
    id: 'numbers7',
    title: 'GDP ($ per capita)',
    loadingStateType: 'medium-text',
  },
  {
    id: 'numbers9',
    title: 'Birth rate',
    loadingStateType: 'medium-text',
  },
  {
    id: 'numbers8',
    title: 'Death rate',
    loadingStateType: 'medium-text',
  },
];

type Props = {
  data: Country[];
  isLoading: boolean;
  handleRowClick: (row: Country) => void;
};

const CountriesTable = (props: Props) => {
  const { data, isLoading, handleRowClick } = props;

  const { formatNumber } = useFormat();

  return (
    <Box
      style={{
        backgroundColor: 'var(--surface-secondary)',
        paddingTop: 'var(--spacing-medium)',
      }}
    >
      <Table
        errorState={
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            Error State
          </h1>
        }
        emptyState={
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            Empty State
          </h1>
        }
        columns={columns}
        dataState={{
          isLoading,
        }}
      >
        <TableHeader>
          {columns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>

        <TableBody>
          {data.map((rowItem) => (
            <div
              onClick={() => handleRowClick(rowItem)}
              key={rowItem.id}
              style={{ cursor: 'pointer' }}
            >
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.name}</TableCell>
                <TableCell>{rowItem.region}</TableCell>
                <TableCell>{rowItem.subregion}</TableCell>
                <TableCell>{rowItem.capital}</TableCell>
                <TableCell>{rowItem.location}</TableCell>
                <TableCell>{rowItem.phone_code}</TableCell>
                <TableCell>{rowItem.currency}</TableCell>
                <TableCell>{rowItem.currency_name}</TableCell>
                <TableCell>{formatNumber(rowItem.latitude)}</TableCell>
                <TableCell>{formatNumber(rowItem.longitude)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers6)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers2)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers0)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers7)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers9)}</TableCell>
                <TableCell>{formatNumber(rowItem.numbers9)}</TableCell>
              </TableRow>
            </div>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CountriesTable;
