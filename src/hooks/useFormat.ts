const useFormat = () => {
  const formatNumber = (value: number | undefined): string => {
    if (!value) return '';

    if (value === undefined) return '';
    return new Intl.NumberFormat('pt-BR').format(value);
  };

  return { formatNumber };
};

export default useFormat;
