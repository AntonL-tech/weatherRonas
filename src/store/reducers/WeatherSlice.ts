import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeather } from '../models/IWeather';

interface PhotoState {
  weather: IWeather;
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: PhotoState = {
  weather: {},
  isLoading: false,
  error: '',
  count: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
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
    },
  },
});

export default weatherSlice.reducer;
