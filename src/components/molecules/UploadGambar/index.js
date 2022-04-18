import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICNullPhoto, ICUpload, ICUploadImg} from '../../../assets';
import {fonts} from '../../../utils';

const UploadGambar = ({}) => {
  return (
    <TouchableOpacity style={styles.WrapProf}>
      <View style={styles.wrapAvatar}>
        <ICNullPhoto width={117} height={117} />
      </View>
    </TouchableOpacity>
  );
};

export default UploadGambar;

const styles = StyleSheet.create({
  wrapAvatar: {
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 16,
    right: 10,
  },
  WrapProf: {
    height: 130,
    width: 130,
  },
});
