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
import ItemListMenu from '../ItemListMenu';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      shadowOpacity: 0,
      shadowColor: '#fff',
      borderBottomWidth: 0.8,
      borderBottomColor: '#E3E5E5',
    }}
    tabStyle={{
      width: 'auto',
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

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
      <ItemListMenu
        text="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ItemListMenu
        text="Pusat Bantuan"
        onPress={() => navigation.navigate('PusatBantuan')}
      />
      <ItemListMenu
        text="Keluar Akun"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const Riwayat = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
      <ItemListMenu text="Grooming" />
      <ItemListMenu text="Penitipan" />
      <ItemListMenu text="Praktik" />
    </View>
  );
};

const AkunTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Akun'},
    {key: '2', title: 'Riwayat Pesanan'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: Riwayat,
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

export default AkunTabSection;

const styles = StyleSheet.create({});
