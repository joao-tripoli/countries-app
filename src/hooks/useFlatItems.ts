import { useCallback } from 'react';

const useFlatItems = () => {
  const flattenItems = useCallback((items: Item[]) => {
    return items.map((item: Item) => {
      const { id, name, column_values } = item;

      const columnAttrs = column_values.reduce(
        (acc: Record<string, string>, cv: { id: string; text: string }) => {
          acc[cv.id] = cv.text;
          return acc;
        },
        {}
      );

      return {
        id,
        name,
        ...columnAttrs,
      };
    });
  }, []);

  return { flattenItems };
};

export default useFlatItems;
