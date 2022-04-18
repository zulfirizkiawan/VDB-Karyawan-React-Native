import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICakunActive,
  ICakunNonActive,
  IChomeActive,
  IChomeNonActive,
  ICpesananActive,
  ICpesananNonActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <IChomeActive /> : <IChomeNonActive />;
    }
    if (title === 'Pesanan') {
      return active ? <ICpesananActive /> : <ICpesananNonActive />;
    }
    if (title === '  Akun   ') {
      return active ? <ICakunActive /> : <ICakunNonActive />;
    }
    return <IChomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? colors.text.MenuActive : colors.text.MenuinActive,
    fontFamily: fonts.primary[500],
    marginTop: 3,
  }),
});
