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
  /** Population */
  numbers: number;
  /** Area */
  numbers6: number;
  /** Population density */
  numbers2: number;
  /** Net migration */
  numbers0: number;
  /** GDP ($ per capita) */
  numbers7: number;
  /** Birth rate */
  numbers9: number;
  /** Death rate */
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
