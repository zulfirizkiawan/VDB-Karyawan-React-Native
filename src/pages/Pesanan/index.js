import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {PesananTabSection} from '../../components';

const Pesanan = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.judulPage}>Pesanan</Text>
      <View style={styles.tabContainer}>
        <PesananTabSection />
      </View>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  judulPage: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 20,
  },
  tabContainer: {flex: 1, marginTop: 10},
});
