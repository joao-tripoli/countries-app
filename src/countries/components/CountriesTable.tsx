import {
  Box,
  Heading,
  Table,
  TableBody,
  TableCell,
  type TableColumn,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@vibe/core';

import format from '../../utils/format';

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
    loadingStateType: 'long-text',
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
    loadingStateType: 'long-text',
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
    loadingStateType: 'long-text',
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
  isError: boolean;
  handleRowClick: (row: Country) => void;
};

const CountriesTable = (props: Props) => {
  const { data, isLoading, isError, handleRowClick } = props;

  return (
    <Box paddingTop="medium">
      <Table
        columns={columns}
        dataState={{
          isLoading,
          isError,
        }}
        errorState={
          <Box padding="large">
            <Heading type="h3" align="center">
              An error occurred while loading the data
            </Heading>
          </Box>
        }
        emptyState={
          <Box padding="large">
            <Heading type="h3" align="center">
              No records found
            </Heading>
          </Box>
        }
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
              <TableRow>
                <TableCell>{rowItem.name}</TableCell>
                <TableCell>{rowItem.region}</TableCell>
                <TableCell>{rowItem.subregion}</TableCell>
                <TableCell>{rowItem.capital}</TableCell>
                <TableCell>{rowItem.location}</TableCell>
                <TableCell>{rowItem.phone_code}</TableCell>
                <TableCell>{rowItem.currency}</TableCell>
                <TableCell>{rowItem.currency_name}</TableCell>
                <TableCell>{format.number(rowItem.latitude)}</TableCell>
                <TableCell>{format.number(rowItem.longitude)}</TableCell>
                <TableCell>{format.number(rowItem.numbers)}</TableCell>
                <TableCell>{format.number(rowItem.numbers6)}</TableCell>
                <TableCell>{format.number(rowItem.numbers2)}</TableCell>
                <TableCell>{format.number(rowItem.numbers0)}</TableCell>
                <TableCell>{format.number(rowItem.numbers7)}</TableCell>
                <TableCell>{format.number(rowItem.numbers9)}</TableCell>
                <TableCell>{format.number(rowItem.numbers9)}</TableCell>
              </TableRow>
            </div>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CountriesTable;
