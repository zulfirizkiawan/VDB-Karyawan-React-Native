import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Status, Gap} from '../../atoms';
import {DummyCat} from '../../../assets';
import {colors, fonts} from '../../../utils';
import ItemValue from '../ItemValue';

const CardPesanan = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <ItemValue
        label="Status"
        value="PENJEMPUTAN"
        valueColor={'Paid' === 'CANCELLED' ? '#D9435E' : '#F1A852'}
      />
      <Gap height={5} />
      <View style={styles.garis} />
      <Gap height={10} />
      <View style={styles.wrapContent}>
        <Image source={DummyCat} style={styles.img} />
        <Gap width={10} />
        <View style={styles.wrapStatus}>
          <View style={styles.flex}>
            <Text style={styles.txt}>Nama Pemilik</Text>
            <Text style={styles.txtHasil}>Aril Noah</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.txt}>Jenis Hewan</Text>
            <Text style={styles.txtHasil}>Kucing</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.txt}>Total</Text>
            <Text style={styles.txtHasil}>Rp. 55.000</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardPesanan;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.Bg.six,
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  wrapContent: {
    flexDirection: 'row',
  },
  img: {
    width: 90,
    height: 110,
    borderRadius: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  txt: {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    color: colors.text.for,
  },
  txtHasil: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  wrapStatus: {
    flex: 1,
    marginTop: -5,
  },
  garis: {
    height: 0.7,
    backgroundColor: colors.Bg.five,
  },
});
