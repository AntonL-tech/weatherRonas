import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import { Header } from './src/components';
import appTheme from './src/constants/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.COLORS.primary,
  },
});

export default App;
