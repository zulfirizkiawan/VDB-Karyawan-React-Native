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
  getAntarGrooming,
  getBatalGrooming,
  getPendingGrooming,
  getPenjemputanGrooming,
  getProsesGrooming,
  getSelesaiGrooming,
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
  const {pendingGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPendingGrooming());
    // console.log('grooming :', pendingGrooming);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPendingGrooming());
    setRefreshing(false);
  };

  const cancelGrooming = id => {
    const data = {
      status: 'DIBATALKAN',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allGrooming/${id}`, data)
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

  const nextGrooming = id => {
    console.log('id  :', id);

    const data = {
      status: 'PENJEMPUTAN',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allGrooming/${id}`, data)
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
        {pendingGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              onCancel={() => cancelGrooming(itemGrooming.id)}
              onNext={() => nextGrooming(itemGrooming.id)}
              textBtn="Terima"
              images={{uri: itemGrooming.grooming_photo_path}}
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
  const {penjemputanGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPenjemputanGrooming());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPenjemputanGrooming());
    setRefreshing(false);
  };

  const nextGrooming = id => {
    const data = {
      status: 'DI PROSES',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allGrooming/${id}`, data)
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
        {penjemputanGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              onNext={() => nextGrooming(itemGrooming.id)}
              textBtn="Proses"
              images={{uri: itemGrooming.grooming_photo_path}}
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
  const {prosesGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getProsesGrooming());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProsesGrooming());
    setRefreshing(false);
  };

  const nextGrooming = id => {
    const data = {
      status: 'DI ANTAR',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allGrooming/${id}`, data)
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
        {prosesGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              onNext={() => nextGrooming(itemGrooming.id)}
              textBtn="Antar"
              images={{uri: itemGrooming.grooming_photo_path}}
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
  const {antarGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAntarGrooming());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAntarGrooming());
    setRefreshing(false);
  };

  const nextGrooming = id => {
    const data = {
      status: 'SELESAI',
    };
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/allGrooming/${id}`, data)
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
        {antarGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              onNext={() => nextGrooming(itemGrooming.id)}
              textBtn="Selesai"
              images={{uri: itemGrooming.grooming_photo_path}}
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
  const {selesaiGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getSelesaiGrooming());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSelesaiGrooming());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {selesaiGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              images={{uri: itemGrooming.grooming_photo_path}}
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
  const {batalGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getBatalGrooming());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getBatalGrooming());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {batalGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              images={{uri: itemGrooming.grooming_photo_path}}
            />
          );
        })}
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

export default PesananGroomingTabSection;

const styles = StyleSheet.create({
  contentPage: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
