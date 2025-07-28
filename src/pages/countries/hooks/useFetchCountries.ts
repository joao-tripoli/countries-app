import { useQuery } from '@tanstack/react-query';
import mondaySdk from 'monday-sdk-js';

import { useContext } from 'react';
import { ToastContext } from '../../../context/ToastContext';
import useFlatItems from '../../../hooks/useFlatItems';

const monday = mondaySdk();

const useFetchCountries = (filter: string) => {
  const { flattenItems } = useFlatItems();
  const { showError } = useContext(ToastContext);

  return useQuery<Country[]>({
    queryKey: ['countries', filter],
    queryFn: async () => {
      const query = `
        query {
          boards(ids: 9671493720) {
            items_page(limit: 500) {
              cursor
              items {
                id
                name
                created_at
                column_values  {
                  id
                  text
                }
              }
            }
          }
        }
      `;

      try {
        const res = await monday.api(query);

        const items = res.data.boards[0].items_page.items as Item[];

        if (!items) return [];

        const flatItems = flattenItems(items);

        return flatItems as Country[];
      } catch (error) {
        showError('Failed to fetch countries. Please try again later.');
        throw error;
      }
    },
  });
};

export default useFetchCountries;
