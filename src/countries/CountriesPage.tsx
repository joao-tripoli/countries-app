import { Box } from '@vibe/core';
import CountriesTable from './components/countries-table';

const CountriesPage = () => {
  return (
    <Box style={{ padding: 'var(--spacing-large)' }}>
      <CountriesTable />
    </Box>
  );
};

export default CountriesPage;
