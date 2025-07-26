import {
  Box,
  Flex,
  Heading,
  Search,
  Table,
  TableBody,
  TableCell,
  type TableColumn,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@vibe/core';
import { useState } from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import WeatherModal from './WeatherModal';

const columns: TableColumn[] = [
  {
    id: 'name',
    title: 'Name',
    loadingStateType: 'long-text',
  },
  {
    id: 'region',
    title: 'Region',
    loadingStateType: 'long-text',
  },
  {
    id: 'subregion',
    title: 'Subregion',
    loadingStateType: 'long-text',
  },
];

const CountriesTable = () => {
  const [selectedCountryName, setSelectedCountryName] = useState('');

  const { data, isLoading } = useFetchCountries();

  const handleRowClick = (row: Country) => {
    setSelectedCountryName(row.name);
  };

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        // style={{ padding: 'var(--spacing-medium)' }}
      >
        <Heading>Monday.com App</Heading>

        <Box
          style={{
            maxWidth: '500px',
          }}
        >
          <Search size="small" placeholder="Placeholder text here" />
        </Box>
      </Flex>

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
            {data?.map((rowItem) => (
              <div
                onClick={() => handleRowClick(rowItem)}
                key={rowItem.id}
                style={{ cursor: 'pointer' }}
              >
                <TableRow key={rowItem.id}>
                  <TableCell>{rowItem.name}</TableCell>
                  <TableCell>{rowItem.region}</TableCell>
                  <TableCell>{rowItem.subregion}</TableCell>
                </TableRow>
              </div>
            ))}
          </TableBody>
        </Table>

        <WeatherModal
          show={Boolean(selectedCountryName !== '')}
          onClose={() => setSelectedCountryName('')}
          region={selectedCountryName}
        />
      </Box>
    </>
  );
};

export default CountriesTable;
