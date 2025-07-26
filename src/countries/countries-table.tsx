import {
  Table,
  TableBody,
  TableCell,
  type TableColumn,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@vibe/core';
import { useEffect } from 'react';
import useFetchCountries from './hooks/useFetchCountries';

const columns: TableColumn[] = [
  {
    id: 'id',
    title: 'ID',
    width: 150,
    loadingStateType: 'medium-text',
  },
  {
    id: 'name',
    title: 'Name',
    loadingStateType: 'long-text',
  },
  // {
  //   id: 'column_values.region.text',
  //   title: 'Region',
  //   loadingStateType: 'long-text',
  // },
];

const CountriesTable = () => {
  const { data, isLoading } = useFetchCountries();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{ backgroundColor: 'var(--surface-secondary)' }}>
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
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.id}</TableCell>
              <TableCell>{rowItem.name}</TableCell>
              {/* <TableCell>{rowItem.column_values.region.text}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CountriesTable;
