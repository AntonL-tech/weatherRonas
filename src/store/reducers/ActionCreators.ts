import { AppDispatch } from '../store';
import axios from 'axios';
import { IWeather } from '../models/IWeather';
import { weatherSlice } from './WeatherSlice';
import { openweathermap_api_key } from '../../../config.json';

export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.weatherFetching());
    const response = await axios.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${openweathermap_api_key}`,
    );
    dispatch(weatherSlice.actions.photosFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(weatherSlice.actions.photosFetchingFail(e.message));
  }
};

export const fetchWeatherByLongLat =
  (lat: string, lon: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.weatherFetching());
      const response = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${openweathermap_api_key}`,
      );
      dispatch(weatherSlice.actions.photosFetchingSuccess(response.data));
    } catch (e: any) {
      dispatch(weatherSlice.actions.photosFetchingFail(e.message));
    }
  };
