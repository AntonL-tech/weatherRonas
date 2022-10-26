import { Weather } from './WeatherItem';

export interface IWeather {
  name: string;
  weather?: Weather[];
  main?: {
    temp: string;
  };
  wind?: {
    speed: number;
  };
}
