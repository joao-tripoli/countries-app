import { useCallback } from 'react';

const useFormat = () => {
  const formatNumber = useCallback((value: number | undefined): string => {
    if (!value) return '';

    if (value === undefined) return '';
    return new Intl.NumberFormat('pt-BR').format(value);
  }, []);

  const formatTemperature = useCallback(
    (value: number | undefined, unit: TemperatureUnit): string => {
      if (!value) return '';

      const formattedValue = new Intl.NumberFormat('en-US').format(value);
      return `${formattedValue}°${unit.toUpperCase()}`;
    },
    []
  );

  return { formatNumber, formatTemperature };
};

export default useFormat;
