import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import appTheme from '../constants/theme';

const Switch = SwitchSelector as any;

export type SwitchComponentProps = {
  onPress: () => void;
};

const options = [
  { label: 'C', value: 'C' },
  { label: 'F', value: 'F' },
];

const SwitchComponent = (props: SwitchComponentProps) => {
  const { onPress } = props;

  return (
    <View>
      <View style={styles.indicator} />
      <Switch
        options={options}
        initial={0}
        style={styles.switch}
        borderWidth={4}
        borderRadius={10}
        textColor={appTheme.COLORS.secondary}
        selectedColor={appTheme.COLORS.white}
        backgroundColor={appTheme.COLORS.primary}
        buttonColor={appTheme.COLORS.secondary}
        onPress={onPress}
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
