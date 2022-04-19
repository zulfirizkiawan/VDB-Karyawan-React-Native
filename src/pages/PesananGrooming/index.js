import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, PesananGroomingTabSection} from '../../components';
import {colors, fonts} from '../../utils';

const PesananGrooming = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pesanan Grooming" onPress={() => navigation.goBack('')} />
      <View style={styles.tabContainer}>
        <PesananGroomingTabSection />
      </View>
    </View>
  );
};

export default PesananGrooming;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {flex: 1},
});
