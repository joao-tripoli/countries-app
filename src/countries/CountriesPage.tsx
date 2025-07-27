import { Box, Flex, Heading, Search } from '@vibe/core';

import CountriesTable from './components/CountriesTable';
import CountryDetailsModal from './components/CountryDetailsModal';
import useCountriesPage from './hooks/useCountriesPage';

const CountriesPage = () => {
  const {
    searchValue,
    selectedCountry,
    filteredData,
    isLoading,
    error,
    handleRowClick,
    setSelectedCountry,
    setSearchValue,
  } = useCountriesPage();

  return (
    <Box style={{ padding: 'var(--spacing-large)' }}>
      <Flex align="center" justify="space-between">
        <Heading>Countries</Heading>

        <Box
          style={{
            width: '100%',
            maxWidth: '16rem',
          }}
        >
          <Search
            size="small"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e)}
          />
        </Box>
      </Flex>

      <CountriesTable
        data={filteredData}
        isLoading={isLoading}
        isError={Boolean(error)}
        handleRowClick={handleRowClick}
      />

      <CountryDetailsModal
        show={Boolean(selectedCountry)}
        onClose={() => setSelectedCountry(undefined)}
        country={selectedCountry}
      />
    </Box>
  );
};

export default CountriesPage;
