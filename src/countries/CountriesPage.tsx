import { Box, Heading } from '@vibe/core';
import CountriesTable from './countries-table';

const CountriesPage = () => {
  return (
    <Box style={{ padding: 'var(--spacing-large)' }}>
      <Heading>Monday.com App</Heading>

      <CountriesTable />
    </Box>
  );
};

export default CountriesPage;
