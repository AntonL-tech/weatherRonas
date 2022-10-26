import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import appTheme from '../constants/theme';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import { Format } from '../store/models/Format';
import { weatherSlice } from '../store/reducers/WeatherSlice';

const Switch = SwitchSelector as any;

const options = [
  { label: 'C', value: 0 },
  { label: 'F', value: 1 },
];

const SwitchComponent = () => {
  const dispatch = useAppDispatch();
  const { changeFormat } = weatherSlice.actions;
  const { format } = useAppSelector(state => state.weatherReducer);

  return (
    <View>
      <View style={styles.indicator} />
      <Switch
        options={options}
        initial={format}
        style={styles.switch}
        borderWidth={4}
        borderRadius={10}
        textColor={appTheme.COLORS.secondary}
        selectedColor={appTheme.COLORS.white}
        backgroundColor={'#3b5998'}
        buttonColor={appTheme.COLORS.secondary}
        onPress={(value: Format) => dispatch(changeFormat(value))}
      />
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {},
  switch: {
    width: 100,
    borderColor: appTheme.COLORS.white,
    borderWidth: 1,
    borderRadius: appTheme.SIZES.radius,
  },
  indicator: {
    position: 'absolute',
    top: 10,
    left: -20,
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: appTheme.COLORS.white,
    borderRadius: appTheme.SIZES.radius,
    opacity: 0.6,
  },
});
