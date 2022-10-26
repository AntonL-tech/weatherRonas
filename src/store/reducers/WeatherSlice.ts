import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Format } from '../models/Format';
import { IWeather } from '../models/IWeather';

interface WeatherState {
  weather: IWeather;
  isLoading: boolean;
  error: string;
  format: Format;
}

const initialState: WeatherState = {
  weather: {
    name: '',
  },
  isLoading: false,
  error: '',
  format: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeFormat(state, action: PayloadAction<Format>) {
      state.format = action.payload;
    },
    weatherFetching(state) {
      state.isLoading = true;
    },
    photosFetchingSuccess(state, action: PayloadAction<IWeather>) {
      state.isLoading = false;
      state.error = '';
      state.weather = action.payload;
    },
    photosFetchingFail(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.weather = { name: '' };
    },
  },
});

export default weatherSlice.reducer;
