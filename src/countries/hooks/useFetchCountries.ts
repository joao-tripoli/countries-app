import { useQuery } from '@tanstack/react-query';
import mondaySdk from 'monday-sdk-js';
import useFlatItems from '../../hooks/useFlatItems';

const monday = mondaySdk();

// type Params = {};

const useFetchCountries = (nameFilter: string) => {
  const { flattenItems } = useFlatItems();

  return useQuery<Country[]>({
    queryKey: ['countries', nameFilter],
    queryFn: async () => {
      const query = `
        query {
          boards(ids: 9671493720) {
            items_page(limit: 500${
              nameFilter.length
                ? `, query_params: {operator: and, rules: [{column_id: "name", operator: contains_text, compare_value: ["${nameFilter}"]}]}`
                : ''
            }) {
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

      const res = await monday.api(query);
      const items = res.data.boards[0].items_page.items as Item[];

      if (!items) return [];

      const flatItems = flattenItems(items);

      return flatItems as Country[];
    },
  });
};

export default useFetchCountries;
