import { useCallback, useMemo, useState } from 'react';

import useFetchCountries from './useFetchCountries';

const useCountriesPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading, error } = useFetchCountries('');

  const filteredData = useMemo(() => {
    if (!searchValue) return data ?? [];

    const query = searchValue.toLowerCase();

    const filteredData = data?.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );

    return filteredData ?? [];
  }, [data, searchValue]);

  const handleRowClick = useCallback(
    (row: Country) => setSelectedCountry(row),
    []
  );

  return {
    selectedCountry,
    searchValue,
    filteredData,
    isLoading,
    setSearchValue,
    handleRowClick,
    setSelectedCountry,
    error,
  };
};

export default useCountriesPage;
