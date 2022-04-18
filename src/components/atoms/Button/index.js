import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.BtnLogin} onPress={onPress}>
      <Text style={styles.TxtLogin}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  BtnLogin: {
    backgroundColor: colors.primary,
    paddingVertical: 13,
    borderRadius: 30,
    width: '100%',
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
  },
});
