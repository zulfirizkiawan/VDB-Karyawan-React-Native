import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILPotonganDiskon} from '../../assets';
import {colors, fonts} from '../../utils';
import {Buttons, Gap, Header, Input, Slider} from '../../components';

const Diskon = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Tambah Diskon" onPress={() => navigation.goBack('')} />
      <View style={styles.wrapContent}>
        <ILPotonganDiskon style={styles.image} />
        <Gap height={20} />
        <Input judul="Deskripsi Diskon" />
        <Input judul="Potongan Diskon" />
        <Gap height={20} />
        <Buttons title="Simpan" />
        <Gap height={40} />
        <Text style={styles.txtDiskon}>Diskon</Text>
        <View style={styles.garis} />
        <Gap height={20} />
        <Slider category="Kucing" />
      </View>
    </View>
  );
};

export default Diskon;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    paddingHorizontal: 15,
  },
  image: {
    alignSelf: 'center',
    marginTop: 10,
  },
  txtDiskon: {
    fontFamily: fonts.primary[500],
    fontSize: 15,
    color: colors.text.primary,
  },
  garis: {
    height: 1,
    backgroundColor: colors.secondary,
    marginTop: 5,
  },
});
