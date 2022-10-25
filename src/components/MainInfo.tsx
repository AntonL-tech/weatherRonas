import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export type MainInfoProps = {};

const MainInfo = (props: MainInfoProps) => {
  return (
    <View style={styles.container}>
      <Text>MainInfo component</Text>
    </View>
  );
};

export default MainInfo;

const styles = StyleSheet.create({
  container: {},
});
