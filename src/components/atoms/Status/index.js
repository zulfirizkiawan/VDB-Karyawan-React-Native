import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Status = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.txt}>Menunggu Konfirmasi</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.Bg.seven,
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  txt: {
    fontFamily: fonts.primary[500],
    fontSize: 13,
    color: colors.white,
  },
});
