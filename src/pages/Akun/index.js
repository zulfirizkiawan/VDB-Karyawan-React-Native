import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gap, ItemListMenu} from '../../components';
import {colors, fonts, getData} from '../../utils';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Akun = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
    setVisible(false);
  };

  return (
    <View style={styles.page}>
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Text style={styles.TxtHeader}>Akun</Text>
        </View>
        <View style={styles.wrapProfile}>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.avatar}
          />
          <Gap height={24} />
          <Text style={styles.nama}>{userProfile.name}</Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.tabContainer}>
        <ItemListMenu
          text="Edit Profile"
          onPress={() => navigation.navigate('LihatProfile')}
        />
        {/* <ItemListMenu
          text="Pusat Bantuan"
          onPress={() => navigation.navigate('PusatBantuan')}
        /> */}
        <ItemListMenu text="Keluar Akun" onPress={showDialog} />
        <Dialog.Container visible={visible}>
          <Dialog.Title>Keluar dari aplikasi</Dialog.Title>
          <Dialog.Description>Apakah Anda Ingin Keluar?</Dialog.Description>
          <Dialog.Button label="Tidak" onPress={handleCancel} color="#4552CB" />
          <Dialog.Button label="Iya" onPress={signOut} color="#4552CB" />
        </Dialog.Container>
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // paddingVertical: 20,
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
    // flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
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
