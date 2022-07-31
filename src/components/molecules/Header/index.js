import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const Header = ({onPress, title, type}) => {
  return (
    <View style={styles.container}>
      <Buttons type="icon-only" onPress={onPress} />
      <Text style={styles.TxtHeader}>{title}</Text>
      <Gap width={23} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
  },
});
