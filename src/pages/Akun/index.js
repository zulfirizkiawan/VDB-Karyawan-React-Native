import React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {DummyProfile} from '../../assets';
import {AkunTabSection, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const Akun = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Text style={styles.TxtHeader}>Akun</Text>
        </View>
        <View style={styles.wrapProfile}>
          <Image source={DummyProfile} style={styles.avatar} />
          <Gap height={24} />
          <Text style={styles.nama}>Zulfi Rizkiawan</Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.tabContainer}>
        <AkunTabSection />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  page: {
    backgroundColor: '#F9F9FD',
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  TxtEdit: {
    fontSize: 14,
    color: colors.text.MenuActive,
    fontFamily: fonts.primary[500],
    width: 76,
  },
  wrapProfile: {
    alignItems: 'center',
    paddingBottom: 30,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#ABAECA',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 28,
    shadowOpacity: 0.2,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  nama: {
    fontFamily: fonts.primary[500],
    fontSize: 24,
    color: colors.text.primary,
  },
});
