import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Akun,
  Dashboard,
  DetailPesananGrooming,
  DetailPesananPenitipan,
  DetailPesananPraktik,
  Diskon,
  EditProfile,
  LihatProfile,
  Login,
  Pesanan,
  PesananGrooming,
  PesananPenitipan,
  PesananPraktik,
  PusatBantuan,
  Splash,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="  Akun   "
        component={Akun}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PusatBantuan"
        component={PusatBantuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesananGrooming"
        component={DetailPesananGrooming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesananPenitipan"
        component={DetailPesananPenitipan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesananPraktik"
        component={DetailPesananPraktik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Diskon"
        component={Diskon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananGrooming"
        component={PesananGrooming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananPenitipan"
        component={PesananPenitipan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananPraktik"
        component={PesananPraktik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LihatProfile"
        component={LihatProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
