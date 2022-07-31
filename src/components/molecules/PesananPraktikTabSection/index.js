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
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {
  getAntarPraktik,
  getBatalPraktik,
  getPendingPraktik,
  getPenjemputanPraktik,
  getProsesPraktik,
  getSelesaiPraktik,
} from '../../../redux/action/pesanan';
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
  const {pendingPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPendingPraktik());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPendingPraktik());
    setRefreshing(false);
  };

  const cancelPraktik = () => {
    {
      pendingPraktik.map(itemPraktik => {
        const data = {
          status: 'DIBATALKAN',
        };
        dispatch(setLoading(true));
        Axios.post(`${API_HOST.url}/allPraktik/${itemPraktik.id}`, data)
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
      });
    }
  };

  const nextPraktik = () => {
    {
      pendingPraktik.map(itemPraktik => {
        const data = {
          status: 'PENJEMPUTAN',
        };
        dispatch(setLoading(true));
        Axios.post(`${API_HOST.url}/allPraktik/${itemPraktik.id}`, data)
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
      });
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pendingPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
              onCancel={cancelPraktik}
              onNext={nextPraktik}
              textBtn="Terima"
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
  const {penjemputanPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPenjemputanPraktik());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPenjemputanPraktik());
    setRefreshing(false);
  };

  const nextPraktik = () => {
    {
      penjemputanPraktik.map(itemPraktik => {
        const data = {
          status: 'DI PROSES',
        };
        dispatch(setLoading(true));
        Axios.post(`${API_HOST.url}/allPraktik/${itemPraktik.id}`, data)
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
      });
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {penjemputanPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
              onNext={nextPraktik}
              textBtn="Proses"
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
  const {prosesPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getProsesPraktik());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProsesPraktik());
    setRefreshing(false);
  };

  const nextPraktik = () => {
    {
      prosesPraktik.map(itemPraktik => {
        const data = {
          status: 'DI ANTAR',
        };
        dispatch(setLoading(true));
        Axios.post(`${API_HOST.url}/allPraktik/${itemPraktik.id}`, data)
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
      });
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {prosesPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
              onNext={nextPraktik}
              textBtn="Antar"
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
  const {antarPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAntarPraktik());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAntarPraktik());
    setRefreshing(false);
  };

  const nextPraktik = () => {
    {
      antarPraktik.map(itemPraktik => {
        const data = {
          status: 'SELESAI',
        };
        dispatch(setLoading(true));
        Axios.post(`${API_HOST.url}/allPraktik/${itemPraktik.id}`, data)
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
      });
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {antarPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
              onNext={nextPraktik}
              textBtn="Selesai"
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
  const {selesaiPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getSelesaiPraktik());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSelesaiPraktik());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {selesaiPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
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
  const {batalPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getBatalPraktik());
    // console.log('PgetBatalPraktik :', pendingPgetBatalPraktik);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getBatalPraktik());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {batalPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananPraktikTabSection = () => {
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

export default PesananPraktikTabSection;

const styles = StyleSheet.create({
  contentPage: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
