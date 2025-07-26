import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../../utils/fetcherWeather';

export const useWeather = (location: string) => {
  return useQuery<CurrentWeather>({
    queryKey: ['weather', location],
    queryFn: () => fetchWeather(location),
    enabled: !!location,
    staleTime: 1000 * 60 * 5,
  });
};
