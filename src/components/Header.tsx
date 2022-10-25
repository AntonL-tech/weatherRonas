import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import appTheme from '../constants/theme';
import { locationArrow } from '../constants/images';
import SwitchComponent from './SwitchComponent';
import ButtonComponet from './ButtonComponet';

export type HeaderProps = {};

const Header = (props: HeaderProps) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.cityText}>город</Text>
      <SwitchComponent onPress={() => console.log('switched')} />
    </View>
    <View style={styles.row}>
      <ButtonComponet onPress={() => console.log(123)} text="Сменить город" />
      <ButtonComponet
        onPress={() => console.log(234)}
        text="Мое местоположение"
        image={locationArrow}
      />
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: appTheme.SIZES.padding,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityText: {
    color: appTheme.COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
