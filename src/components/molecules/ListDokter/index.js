import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDokter = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapList} onPress={onPress}>
      <Image source={DummyProfile} style={styles.avatar} />
      <View>
        <Text style={styles.namaDokter}>Sakura Haruno</Text>
        <Text style={styles.Profesi}>Dr. Hewan</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListDokter;

const styles = StyleSheet.create({
  wrapList: {
    backgroundColor: colors.Bg.six,
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 10,
  },
  namaDokter: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  Profesi: {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    color: colors.secondary,
  },
});
