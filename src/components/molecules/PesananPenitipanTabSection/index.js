import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts, showMessage} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import CardPesanan from '../CardPesanan';
import {Gap} from '../../atoms';
import {
  getAntarPenitipan,
  getBatalPenitipan,
  getPendingPenitipan,
  getPenjemputanPenitipan,
  getProsesPenitipan,
  getSelesaiPenitipan,
} from '../../../redux/action/pesanan';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {setLoading} from '../../../redux/action/global';

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

const API_HOST = {
  url: 'http://vdb.otwlulus.com/api',
};

const Konfirmasi = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pendingPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPendingPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPendingPenitipan());
    setRefreshing(false);
  };

  const cancelPenitipan = id => {
    const data = {
      status: 'DIBATALKAN',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allPenitipan/${id}`, data)
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Sukses memperbarui status', 'success');
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('error cancel :', err);
      });
  };

  const nextPenitipan = id => {
    const data = {
      status: 'PENJEMPUTAN',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allPenitipan/${id}`, data)
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Sukses memperbarui status', 'success');
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('sukses cancel :', err);
      });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pendingPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              onCancel={() => cancelPenitipan(itemPenitipan.id)}
              onNext={() => nextPenitipan(itemPenitipan.id)}
              textBtn="Terima"
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const Penjemputan = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {penjemputanPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPenjemputanPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPenjemputanPenitipan());
    setRefreshing(false);
  };

  const nextPenitipan = id => {
    const data = {
      status: 'DI PROSES',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allPenitipan/${id}`, data)
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Sukses memperbarui status', 'success');
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('sukses cancel :', err);
      });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {penjemputanPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              onNext={() => nextPenitipan(itemPenitipan.id)}
              textBtn="Proses"
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const Proses = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {prosesPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getProsesPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProsesPenitipan());
    setRefreshing(false);
  };

  const nextPenitipan = id => {
    const data = {
      status: 'DI ANTAR',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allPenitipan/${id}`, data)
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Sukses memperbarui status', 'success');
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('sukses cancel :', err);
      });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {prosesPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              onNext={() => nextPenitipan(itemPenitipan.id)}
              textBtn="Antar"
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const Antar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {antarPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAntarPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAntarPenitipan());
    setRefreshing(false);
  };

  const nextPenitipan = id => {
    const data = {
      status: 'SELESAI',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allPenitipan/${id}`, data)
      .then(res => {
        dispatch(setLoading(false));
        showMessage('Sukses memperbarui status', 'success');
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('sukses cancel :', err);
      });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {antarPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              onNext={() => nextPenitipan(itemPenitipan.id)}
              textBtn="Selesai"
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const Selesai = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {selesaiPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getSelesaiPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSelesaiPenitipan());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {selesaiPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const Batal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {batalPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getBatalPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getBatalPenitipan());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {batalPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananPenitipanTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Konfirmasi'},
    {key: '2', title: 'Penjemputan'},
    {key: '3', title: 'Diproses'},
    {key: '4', title: 'Diantar'},
    {key: '5', title: 'Selesai'},
    {key: '6', title: 'Dibatalkan'},
  ]);

  const renderScene = SceneMap({
    1: Konfirmasi,
    2: Penjemputan,
    3: Proses,
    4: Antar,
    5: Selesai,
    6: Batal,
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

export default PesananPenitipanTabSection;

const styles = StyleSheet.create({
  contentPage: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
