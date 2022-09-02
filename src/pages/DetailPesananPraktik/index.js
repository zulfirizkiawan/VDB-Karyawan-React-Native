import React from 'react';
import {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DummyProfile} from '../../assets';
import {Gap, Header, Input, ItemValue, Status} from '../../components';
import {getDokterData} from '../../redux/action';
import {colors, fonts} from '../../utils';
import moment from 'moment';
import 'moment/locale/id';

const DetailPesananPraktik = ({navigation, route}) => {
  const itemPraktik = route.params;

  const dispatch = useDispatch();
  const {dokter} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getDokterData());
  }, []);

  return (
    <View style={styles.Page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image
            source={{uri: itemPraktik.praktik_photo_path}}
            style={styles.avatar}
          />
          <Gap height={20} />
          <ItemValue
            label="Status"
            value={itemPraktik.status}
            valueColor={
              itemPraktik.status === 'DIBATALKAN'
                ? '#D9435E'
                : itemPraktik.status === 'SELESAI'
                ? '#1ABC9C'
                : '#F1A852'
            }
          />
          <ItemValue
            label="Tanggal Pemesanan "
            value={moment(itemPraktik.created_at * 1000).format(
              'dddd, DD MMM YYYY',
            )}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>informasi Hewan</Text>
          <ItemValue label="Nama Hewan " value={itemPraktik.animal_name} />
          <ItemValue label="Jenis Hewan " value={itemPraktik.animal_type} />
          <ItemValue label="Keturunan" value={itemPraktik.descendants} />
          <ItemValue label="Jenis kelamin" value={itemPraktik.animal_gender} />
          <ItemValue
            label="Tindakan Pertama"
            value={itemPraktik.first_symptom}
            valueColor="#4552CB"
          />
          <ItemValue
            label="Tindakan kedua"
            value={itemPraktik.second_symptom}
            valueColor="#4552CB"
          />
          {dokter.map(itemDokter => {
            return (
              <ItemValue
                label="Nama Dr. Hewan"
                value={itemDokter.name}
                key={itemDokter.id}
              />
            );
          })}
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{itemPraktik.note}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pesanan Dari :</Text>
          <ItemValue label="Nama " value={itemPraktik.user.name} />
          <ItemValue label="No. Hp" value={itemPraktik.user.phoneNumber} />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Alamat :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{itemPraktik.user.address}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <ItemValue label="Subtotal " numberRp value={itemPraktik.sub_total} />
          <ItemValue
            label="Ongkos Antar Jemput"
            numberRp
            value={itemPraktik.shipping_cost}
          />
          <ItemValue
            label="Diskon "
            numberRp
            value={'- ' + itemPraktik.discount}
          />
          <ItemValue
            label="Total "
            numberRp
            value={itemPraktik.total}
            valueColor="#27AE60"
          />
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
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    alignSelf: 'center',
  },
});
