import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Number from '../Number';

const ItemValue = ({label, value, valueColor = 'black', numberRp, diskon}) => {
  return (
    <View>
      {numberRp ? (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <Number number={value} style={styles.value(valueColor)} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value(valueColor)}>{value}</Text>
        </View>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.for,
  },
  value: color => ({
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: color,
  }),
});
