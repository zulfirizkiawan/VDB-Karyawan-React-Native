import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import CardPesanan from '../CardPesanan';
import {Gap} from '../../atoms';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#4552CB',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: fonts.primary[400],
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const PesananGrooming = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <CardPesanan
          onPress={() => navigation.navigate('DetailPesananGrooming')}
        />
        <CardPesanan />
        <CardPesanan />
        <CardPesanan />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananPenitipan = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <CardPesanan
          onPress={() => navigation.navigate('DetailPesananPenitipan')}
        />
        <CardPesanan />
        <CardPesanan />
        <CardPesanan />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananPraktik = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <CardPesanan
          onPress={() => navigation.navigate('DetailPesananPraktik')}
        />
        <CardPesanan />
        <CardPesanan />
        <CardPesanan />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Grooming'},
    {key: '2', title: 'Penitipan'},
    {key: '3', title: 'Praktik'},
  ]);

  const renderScene = SceneMap({
    1: PesananGrooming,
    2: PesananPenitipan,
    3: PesananPraktik,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default PesananTabSection;

const styles = StyleSheet.create({
  contentPage: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
