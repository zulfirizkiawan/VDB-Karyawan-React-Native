import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Layanan, PesananTabSection} from '../../components';

const Pesanan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.judulPage}>Pesanan</Text>
      {/* Layanan */}

      <View style={styles.wrapRiwayat}>
        <Layanan
          category="Grooming"
          onPress={() => navigation.navigate('PesananGrooming')}
        />
        <Layanan
          category="Penitipan"
          onPress={() => navigation.navigate('PesananPenitipan')}
        />
        <Layanan
          category="Praktik"
          onPress={() => navigation.navigate('PesananPraktik')}
        />
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
    // marginTop: 20,
  },
  wrapRiwayat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
  },
});
