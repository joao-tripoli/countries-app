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
  numbers: number;
  numbers6: number;
  numbers2: number;
  numbers0: number;
  numbers7: number;
  numbers9: number;
  numbers8: number;
};

declare type CurrentWeather = {
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
};
