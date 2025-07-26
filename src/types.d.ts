declare type Item = {
  id: string;
  name: string;
  column_values: {
    id: string;
    text: string;
  }[];
};

declare type Country = {
  id: string;
  name: string;
  region: string;
  subregion: string;
  capital: string;
  location: string;
  phone_code: string;
  currency: string;
  currency_name: string;
  timezones: string;
  latitude: number;
  longitude: number;
};
