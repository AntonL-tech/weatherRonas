import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import appTheme from '../constants/theme';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={appTheme.COLORS.white} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
