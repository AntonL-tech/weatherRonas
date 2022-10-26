import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  Header,
  MainInfo,
  DetailedInfo,
  Loader,
  ErrorComponent,
} from '../components';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import { fetchWeatherByLongLat } from '../store/reducers/ActionCreators';
import Geolocation from '@react-native-community/geolocation';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { weather, isLoading, error } = useAppSelector(
    state => state.weatherReducer,
  );

  const { name } = weather;

  const getCureentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude);

      const currentLatitude = JSON.stringify(position.coords.latitude);
      dispatch(fetchWeatherByLongLat(currentLatitude, currentLongitude));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCureentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.container}>
          <>
            <Header name={name} getCureentLocation={getCureentLocation} />
            {!error ? (
              <>
                <MainInfo
                  weather={weather?.weather?.[0]}
                  temp={weather?.main?.temp}
                />
                <DetailedInfo wind={weather?.wind?.speed} />
              </>
            ) : (
              <ErrorComponent />
            )}
          </>
        </SafeAreaView>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});

export default HomeScreen;
