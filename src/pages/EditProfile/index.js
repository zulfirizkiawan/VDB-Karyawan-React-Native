import Axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Buttons, Gap, Header, Input, UploadGambar} from '../../components';
import {colors, getData, showMessage, storeData, useForm} from '../../utils';

const EditProfile = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    address: '',
    city: '',
    phoneNumber: '',
  });

  const onSubmit = () => {
    let resultObj = {};
    Object.keys(form).map(obj => {
      if (form[obj]) {
        resultObj[obj] = form[obj];
      }
    });
    getData('token').then(resToken => {
      Axios.post(`http://vdb.otwlulus.com/api/user`, resultObj, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          showMessage('Berhasil Diperbarui', 'success');
          storeData('userProfile', res.data.data).then(() => {
            navigation.replace('MainApp', {screen: '  Akun   '});
          });
        })
        .catch(err => {
          showMessage('Terjadi kesalahan di API Update Profile');
        });
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <Gap height={20} />
          <Input
            judul="Nama Lengkap"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={5} />
          <Input
            judul="Alamat"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={5} />
          <Input
            judul="Kota"
            value={form.city}
            onChangeText={value => setForm('city', value)}
          />
          <Gap height={5} />
          <Input
            judul="No. Handphone"
            keyboardType="numeric"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={30} />
          <Buttons title="Perbarui" onPress={onSubmit} />
          <Gap height={40} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

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
});
