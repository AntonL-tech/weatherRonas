import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import appTheme from '../constants/theme';

export type DetailedInfoProps = {
  wind: number | undefined;
};

const DetailedInfo = (props: DetailedInfoProps) => {
  const { wind } = props;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.title}>Ветер</Text>
          <Text style={styles.value}>{wind} м/с</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Влажность</Text>
          <Text style={styles.value}>{wind} мм рт. ст.</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.title}>Давление</Text>
          <Text style={styles.value}>{wind} %</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Вероятность дождя</Text>
          <Text style={styles.value}>{wind} %</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailedInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: appTheme.SIZES.padding,
  },
  row: {
    flex: 1,
  },
  item: {
    marginBottom: appTheme.SIZES.margin,
  },
  title: {
    color: appTheme.COLORS.white,
    opacity: 0.6,
    fontSize: 18,
    marginBottom: 5,
  },
  value: {
    color: appTheme.COLORS.white,
    fontSize: 25,
  },
});
