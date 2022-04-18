import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DummyProfile} from '../../assets';
import {
  Gap,
  Layanan,
  ListDokter,
  MerawatHewan,
  Slider,
  TotalPesananBeranda,
} from '../../components';
import {colors, fonts} from '../../utils';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profil */}
        <Gap height={40} />
        <View style={styles.wrapProfil}>
          <View>
            <Text style={styles.hallo}>Hallo, Apa kabar ?</Text>
            <Text style={styles.namaUser}>Zulfi Rizkiawan</Text>
          </View>
          <Image source={DummyProfile} style={styles.avatar} />
        </View>
        <Gap height={20} />
        {/* Total Pesanan */}
        <View style={styles.wrapContent}>
          <Text style={styles.Lbl}>Total Pesanan</Text>
          <View style={styles.wrapRiwayat}>
            <TotalPesananBeranda
              category="Grooming"
              total={144}
              color="#1AB1B0"
            />
            <TotalPesananBeranda
              category="Penitipan"
              total={40}
              color="#FF7544"
            />
            <TotalPesananBeranda
              category="Praktik"
              total={42}
              color="#FF4F74"
            />
          </View>
        </View>
        <Gap height={20} />
        {/* Layanan */}
        <View style={styles.wrapContent}>
          <View style={styles.totalPesanan}>
            <Text style={styles.Lbl}>Layanan</Text>
            <Text style={styles.Lbl2}> (Cooming Soon)</Text>
          </View>
          <View style={styles.wrapRiwayat}>
            <Layanan
              category="Grooming"
              // onPress={() => navigation.navigate('Grooming')}
            />
            <Layanan
              category="Penitipan"
              // onPress={() => navigation.navigate('Penitipan')}
            />
            <Layanan
              category="Praktik"
              // onPress={() => navigation.navigate('DrHewan')}
            />
          </View>
        </View>
        <Gap height={20} />
        {/* Tambahkan Diskon */}
        <View style={styles.wrapContent}>
          <Text style={styles.Lbl}>Tambahkan Diskon</Text>
          <View style={styles.wrapRiwayat}>
            <Layanan
              category="Diskon"
              onPress={() => navigation.navigate('Diskon')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },

  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  wrapProfil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  wrapContent: {
    paddingHorizontal: 15,
  },
  hallo: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  namaUser: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.primary,
    marginTop: 2,
  },

  wrapRiwayat: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 5,
  },
  Lbl: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.primary,
  },
  Lbl2: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.MenuinActive,
  },
  totalPesanan: {
    flexDirection: 'row',
  },
});
