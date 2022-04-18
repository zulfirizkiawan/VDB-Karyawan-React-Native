import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const TotalPesan = ({namaTotal, totalHarga, onPress, title}) => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.total}>{namaTotal}</Text>
        <Text style={styles.totalHg}>Rp {totalHarga}</Text>
      </View>
      <TouchableOpacity style={styles.BtnLogin} onPress={onPress}>
        <Text style={styles.TxtLogin}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalPesan;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    paddingVertical: 16,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  BtnLogin: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 30,
    width: 200,
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
  },
  total: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.primary,
  },
  totalHg: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
});
