import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCustomerService} from '../../assets';
import {Gap, Header, ItemListMenu} from '../../components';
import {colors, fonts} from '../../utils';

const PusatBantuan = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Pusat Bantuan" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.wrapUp}>
          <View style={styles.wrapTxt}>
            <Text style={styles.txtHallo}>Hallo,</Text>
            <Text style={styles.txtBantu}>Kami Siap Membantu</Text>
          </View>
          <ILCustomerService />
        </View>
        <Gap height={20} />
        <Text style={styles.txtTopik}>Semua Topik</Text>
        <Gap height={10} />
      </View>
      <ItemListMenu text="Cara memesan Layanan Grooming" />
      <ItemListMenu text="Cara memesan Layanan Penitipan" />
      <ItemListMenu text="Cara memesan Layanan Dr. Hewan" />
      <ItemListMenu text="Cara konsultasi dengan Dr. Hewan" />
    </View>
  );
};

export default PusatBantuan;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 15,
  },
  wrapUp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtHallo: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.primary,
  },
  txtBantu: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
  },
  txtTopik: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.tree,
  },
});
