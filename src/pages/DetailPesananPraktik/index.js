import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Gap, Header, Input, ItemValue, Status} from '../../components';
import {colors, fonts} from '../../utils';

const DetailPesananPraktik = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image source={DummyProfile} style={styles.avatar} />
          <Gap height={20} />
          <ItemValue
            label="Status"
            value="PENJEMPUTAN"
            valueColor={'Paid' === 'CANCELLED' ? '#D9435E' : '#F1A852'}
          />
          <ItemValue label="Tanggal Pemesanan " value="18 Okt 2021" />
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>informasi Hewan</Text>
          <ItemValue label="Nama Hewan " value="Bisqi" />
          <ItemValue label="Jenis Hewan " value="Kucing" />
          <ItemValue label="Keturunan" value="Persia" />
          <ItemValue label="Jenis kelamin" value="Betina" />
          <ItemValue
            label="Gejala Pertama"
            value="Muntah-muntah"
            valueColor="#4552CB"
          />
          <ItemValue
            label="Gejala kedua"
            value="Tubuh panas / hangat"
            valueColor="#4552CB"
          />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>
              Hati hati ya kak, kucingnya galak
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pesanan Dari :</Text>
          <ItemValue label="Nama " value="Rizkiawan" />
          <ItemValue label="No. Hp" value="08586756282" />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Alamat :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>
              Purboyo, Purwosekar, Tajinan, Malang
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <ItemValue label="Subtotal " value="Rp. 50.000" />
          <ItemValue label="Ongkos Antar Jemput" value="10.000" />
          <ItemValue label="Diskon " value="- 5.000" />
          <ItemValue label="Total " value="Rp. 50.000" valueColor="#27AE60" />
        </View>

        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default DetailPesananPraktik;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.Bg.six,
  },
  content: {
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 16,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  txt: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.for,
  },
  txtHasil: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
  txtTotal: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.five,
  },
  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
});
