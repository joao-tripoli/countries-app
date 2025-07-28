const API_URL = 'http://localhost:3001/api';

export const fetcher = async (url: string) => {
  const res = await fetch(`${API_URL}/${url}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data: ${res.statusText}`);
  }

  return res.json();
};
