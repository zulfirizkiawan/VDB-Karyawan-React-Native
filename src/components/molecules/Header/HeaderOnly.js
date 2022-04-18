import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons, Gap} from '../../atoms';
import {fonts} from '../../../utils';

const Header = ({onPress, title}) => {
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
    paddingHorizontal: 10,
    paddingVertical: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontFamily: fonts.primary[700],
  },
});
