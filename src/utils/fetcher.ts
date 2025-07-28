export const fetcher = async (url: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data: ${res.statusText}`);
  }

  return res.json();
};
