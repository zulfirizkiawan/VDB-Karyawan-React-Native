import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, PesananPenitipanTabSection} from '../../components';
import {colors, fonts} from '../../utils';

const PesananPenitipan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pesanan Penitipan" onPress={() => navigation.goBack('')} />
      <View style={styles.tabContainer}>
        <PesananPenitipanTabSection />
      </View>
    </View>
  );
};

export default PesananPenitipan;

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
