import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICNext} from '../../../assets';
import {fonts} from '../../../utils';

const ItemListMenu = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <ICNext />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {fontSize: 14, fontFamily: fonts.primary[400], color: '#020202'},
});
