const format = {
  number(value: number | undefined): string {
    if (!value) return '';

    if (value === undefined) return '';
    return new Intl.NumberFormat('pt-BR').format(value);
  },

  temperature(value: number | undefined, unit: TemperatureUnit): string {
    if (!value) return '';

    const formattedValue = new Intl.NumberFormat('en-US').format(value);
    return `${formattedValue}°${unit.toUpperCase()}`;
  },
};

export default format;
