import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBack} from '../../../assets';

const IconOnly = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ICBack />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
