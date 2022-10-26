import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import appTheme from '../constants/theme';

export type ErrorComponentProps = {};

const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Упс что-то пошло не так...</Text>
    </View>
  );
};

export default ErrorComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: appTheme.COLORS.white,
  },
});
