import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../utils/fetcher';

export const useWeather = (location: string) => {
  return useQuery<CurrentWeather>({
    queryKey: ['weather', location],
    queryFn: () => fetcher(`weather/current/${location}`),
    enabled: !!location,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
