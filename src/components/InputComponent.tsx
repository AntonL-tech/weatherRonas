import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import appTheme from '../constants/theme';
import { useAppDispatch } from '../store/hooks/redux';
import { fetchWeather } from '../store/reducers/ActionCreators';

export type InputComponentProps = {
  setChangeSity: (prop: boolean) => void;
};

const InputComponent = (props: InputComponentProps) => {
  const { setChangeSity } = props;
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder="Введите город"
        />
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          setChangeSity(false);
          dispatch(fetchWeather(value));
        }}
        underlayColor="transparent">
        <Text style={styles.text}>OK</Text>
      </TouchableHighlight>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appTheme.COLORS.white,
    width: '75%',
    height: 45,
    marginTop: appTheme.SIZES.margin,
    paddingHorizontal: appTheme.SIZES.padding,
    borderRadius: appTheme.SIZES.radius,
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: { alignItems: 'center', justifyContent: 'center' },
  text: {
    color: appTheme.COLORS.primary,
  },
});
