export const fetchWeather = async (location: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}?key=${
      import.meta.env.VITE_API_KEY
    }&q=${encodeURIComponent(location)}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data: ${res.statusText}`);
  }

  return res.json();
};
