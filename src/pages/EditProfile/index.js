import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Buttons, Gap, Header, Input, UploadGambar} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <View style={{alignItems: 'center'}}>
            <UploadGambar />
          </View>
          <Gap height={20} />
          <Input judul="Nama Lengkap" />
          <Gap height={20} />
          <Input judul="Email" disable value="jdjdhj@gmail.com" />
          <Gap height={20} />
          <Input judul="No. Handphone" keyboardType="numeric" />
          <Gap height={20} />
          <Input judul="Alamat" />
          <Gap height={40} />
          <Buttons title="Simpan" onPress={() => alert('ugh')} />
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
});
