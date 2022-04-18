import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';
import {ILDr, ILGrooming, ILPenitipan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TotalPesananBeranda = ({category, total, color = '#FFC700'}) => {
  return (
    <View style={styles.wrapLayanan(color)}>
      <Gap height={2} />
      <Text style={styles.lblLayanan2}>{total}</Text>
      <Text style={styles.lblLayanan}>{category}</Text>
    </View>
  );
};

export default TotalPesananBeranda;

const styles = StyleSheet.create({
  wrapLayanan: color => ({
    alignItems: 'center',
    backgroundColor: color,
    height: 95,
    width: 100,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
  }),
  lblLayanan: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.white,
  },
  lblLayanan2: {
    fontSize: 26,
    fontFamily: fonts.primary[500],
    color: colors.white,
  },
});
