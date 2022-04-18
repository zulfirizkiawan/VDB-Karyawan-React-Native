import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({isi, subIsi, onPress}) => {
  return (
    <View style={styles.wrapAkun}>
      <Text style={styles.txtAkun}>{isi}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.txtLogin}>{subIsi}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  txtAkun: {
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    fontSize: 14,
    marginRight: 10,
  },
  wrapAkun: {
    flexDirection: 'row',
  },
  txtLogin: {
    fontFamily: fonts.primary[600],
    color: colors.primary,
    fontSize: 14,
  },
});
