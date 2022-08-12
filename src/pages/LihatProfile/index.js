import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Gap, Header, Input} from '../../components';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';

const LihatProfile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState('');

  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  };

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxWidth: 200,
      maxHeight: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const updatePhoto = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets[0]);
    const dataImage = {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName,
    };
    const photoForUpload = new FormData();
    photoForUpload.append('file', dataImage);
    getData('token').then(resToken => {
      fetch('http://vdb.otwlulus.com/api/user/photo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: resToken.value,
        },
        body: photoForUpload,
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log('response object:', responseJson.data);
          getData('userProfile').then(resUser => {
            showMessage('Update Photo Berhasil', 'success');
            resUser.profile_photo_url = `http://vdb.otwlulus.com/storage/${responseJson.data[0]}`;
            storeData('userProfile', resUser).then(() => {
              updateUserProfile();
            });
          });
        })
        .catch(err => {
          console.log('error :', err);
          showMessage('Terjadi kesalahan di API Update Photo');
        });
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <TouchableOpacity
            style={styles.editprofiles}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.txtEdit}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={updatePhoto}>
              <View style={styles.borderPhoto}>
                <Image
                  source={{uri: userProfile.profile_photo_url}}
                  style={styles.photoContainer}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <Input judul="Nama Lengkap" disable value={userProfile.name} />
          <Gap height={5} />
          <Input judul="Email" disable value={userProfile.email} />
          <Gap height={5} />
          <Input judul="Alamat" disable value={userProfile.address} />
          <Gap height={5} />
          <Input judul="Kota" disable value={userProfile.city} />
          <Gap height={5} />
          <Input
            judul="No. Handphone"
            keyboardType="numeric"
            disable
            value={userProfile.phoneNumber}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LihatProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 112,
    width: 112,
    borderRadius: 112 / 2,
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputs: {
    padding: 10,
    backgroundColor: '#000',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  editprofiles: {
    flex: 1,
    alignItems: 'flex-end',
  },
  txtEdit: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.primary,
  },
});
