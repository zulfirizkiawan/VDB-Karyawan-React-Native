import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, PesananPraktikTabSection} from '../../components';
import {colors, fonts} from '../../utils';

const PesananPraktik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pesanan Praktik" onPress={() => navigation.goBack('')} />
      <View style={styles.tabContainer}>
        <PesananPraktikTabSection />
      </View>
    </View>
  );
};

export default PesananPraktik;

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
  tabContainer: {flex: 1},
});
