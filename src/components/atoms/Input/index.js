import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({
  judul,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
  RP,
  note,
}) => {
  const [border, setBorder] = useState(colors.text.primary);
  const onFocusForm = () => {
    setBorder(colors.text.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.text.primary);
  };
  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}>
        {RP}
      </TextInput>
      <View style={styles.garis} />
      <Text style={styles.notes}>{note}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.secondary,
    fontSize: 15,
    fontFamily: fonts.primary[500],
  },
  input: border => ({
    marginTop: -8,
    fontSize: 14,
    color: border,
    fontFamily: fonts.primary[400],
  }),
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: -12,
  },
  notes: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: fonts.primary[400],
    marginTop: 2,
  },
});
