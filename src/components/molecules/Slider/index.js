import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ILAnjing,
  ILAnjing2,
  ILDiskon,
  ILKucing,
  ILRectangle,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Slider = ({category}) => {
  const Icon = () => {
    if (category === 'Kucing') {
      return (
        <View style={styles.wrapIcon}>
          <Image source={ILDiskon} style={styles.imgVector} />
          <View>
            <Text style={styles.text}>
              Dapatkan potongan hari ini untuk semua layanan
            </Text>
            <Text style={styles.text}>Rp. 10.000</Text>
          </View>
        </View>
      );
    }

    return <ILKucing />;
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={ILRectangle} style={styles.image}>
        <Icon />
      </ImageBackground>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 370,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.primary[500],
    width: 220,
    paddingLeft: 5,
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
