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
    scrollEnabled
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

const Konfirmasi = () => {
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

const Penjemputan = () => {
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

const Pengambilan = () => {
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

const Proses = () => {
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

const Antar = () => {
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

const Selesai = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <CardPesanan
          onPress={() => navigation.navigate('DetailPesananPraktik')}
        />
        <CardPesanan />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const Batal = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.contentPage}>
        <CardPesanan
          onPress={() => navigation.navigate('DetailPesananPraktik')}
        />
        <CardPesanan />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananGroomingTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Konfirmasi'},
    {key: '2', title: 'Penjemputan'},
    {key: '3', title: 'Pengambilan'},
    {key: '4', title: 'Diproses'},
    {key: '5', title: 'Diantar'},
    {key: '6', title: 'Selesai'},
    {key: '7', title: 'Dibatalkan'},
  ]);

  const renderScene = SceneMap({
    1: Konfirmasi,
    2: Penjemputan,
    3: Pengambilan,
    4: Proses,
    5: Antar,
    6: Selesai,
    7: Batal,
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

export default PesananGroomingTabSection;

const styles = StyleSheet.create({
  contentPage: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
