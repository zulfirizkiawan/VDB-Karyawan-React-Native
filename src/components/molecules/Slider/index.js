import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILDiskon, ILKucing, ILRectangle} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Number from '../Number';

const Slider = ({category, diskon, deskripsi}) => {
  const Icon = () => {
    if (category === 'Kucing') {
      return (
        <View style={styles.wrapIcon}>
          <Image source={ILDiskon} style={styles.imgVector} />
          <View>
            <Text style={styles.text}>{deskripsi}</Text>
            <Number number={diskon} style={styles.text} />
          </View>
        </View>
      );
    }

    return <ILKucing />;
  };
  return (
    <View>
      <ImageBackground source={ILRectangle} style={styles.image}>
        <Icon />
      </ImageBackground>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 136,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.primary[500],
    width: 220,
    paddingLeft: 5,
    paddingRight: 15,
    textAlign: 'justify',
  },
  wrapIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgVector: {
    width: 100,
    height: 100,
  },
});
