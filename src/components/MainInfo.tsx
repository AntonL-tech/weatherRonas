import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import appTheme from '../constants/theme';
import { useAppSelector } from '../store/hooks/redux';
import { Weather } from '../store/models/WeatherItem';
import { getTemp } from '../utils/utils';

export type MainInfoProps = {
  weather: Weather | undefined;
  temp: string | undefined;
};

const MainInfo = (props: MainInfoProps) => {
  const { weather: { description, icon } = {}, temp = '' } = props;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  const { format } = useAppSelector(state => state.weatherReducer);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          resizeMode="contain"
          style={styles.weatherIcon}
          source={{ uri: iconUrl }}
        />
        <Text style={styles.temp}>{getTemp(temp, format)}°</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default MainInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 55,
    color: appTheme.COLORS.white,
  },
  description: {
    fontSize: 25,
    color: appTheme.COLORS.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 150,
    height: 150,
  },
});
