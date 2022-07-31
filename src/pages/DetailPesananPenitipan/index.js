import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Gap, Header, Input, ItemValue, Status} from '../../components';
import {colors, fonts} from '../../utils';

const DetailPesananPenitipan = ({navigation, route}) => {
  const itemPenitipan = route.params;
  const formatedDate = new Date(itemPenitipan.created_at * 1000).toDateString();

  return (
    <View style={styles.Page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image source={DummyProfile} style={styles.avatar} />
          <Gap height={20} />
          <ItemValue
            label="Status"
            value={itemPenitipan.status}
            valueColor={
              itemPenitipan.status === 'DIBATALKAN'
                ? '#D9435E'
                : itemPenitipan.status === 'SELESAI'
                ? '#1ABC9C'
                : '#F1A852'
            }
          />
          <ItemValue label="Tanggal Pemesanan " value={formatedDate} />
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>informasi Hewan</Text>
          <ItemValue label="Nama Hewan " value={itemPenitipan.animal_name} />
          <ItemValue label="Jenis Hewan " value={itemPenitipan.animal_type} />
          <ItemValue label="Keturunan" value={itemPenitipan.descendants} />
          <ItemValue
            label="Jenis kelamin"
            value={itemPenitipan.animal_gender}
          />
          <ItemValue
            label="Tgl Penitipan"
            value={formatedDate}
            valueColor="#4552CB"
          />
          <ItemValue
            label="Tgl Peengembalian"
            value={itemPenitipan.tanggal_pengembalian}
            valueColor="#4552CB"
          />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{itemPenitipan.note}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pesanan Dari :</Text>
          <ItemValue label="Nama " value={itemPenitipan.user.name} />
          <ItemValue label="No. Hp" value={itemPenitipan.user.phoneNumber} />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Alamat :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{itemPenitipan.user.address}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <ItemValue
            label="Subtotal "
            numberRp
            value={itemPenitipan.sub_total}
          />
          <ItemValue
            label="Ongkos Antar Jemput"
            numberRp
            value={itemPenitipan.shipping_cost}
          />
          <ItemValue
            label="Diskon "
            numberRp
            value={'- ' + itemPenitipan.discount}
          />
          <ItemValue
            label="Total "
            numberRp
            value={itemPenitipan.total}
            valueColor="#27AE60"
          />
        </View>

        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default DetailPesananPenitipan;

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
    fontFamily: fonts.primary[500],
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
