import React from 'react';
import {useEffect} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {ILLogin} from '../../assets';
import {Buttons, Gap, Input} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {colors, fonts, getData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setFrom] = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    getData('token').then(res => {
      console.log('token :', res);
    });
  }, []);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#4596EA" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4596EA', '#4552CB', '#1324BA']}
        style={styles.gradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogin style={styles.Ilimg} />
          <View style={styles.wrapContent}>
            <Text style={styles.register}>Login</Text>
            <Gap height={20} />
            <Input
              judul="Email"
              value={form.email}
              onChangeText={value => setFrom('email', value)}
            />
            <Gap height={15} />
            <Input
              judul="Kata sandi"
              value={form.password}
              onChangeText={value => setFrom('password', value)}
              secureTextEntry
            />
            <Text style={styles.lupa}>Lupa Kata sandi?</Text>
            <Gap height={25} />
            <Buttons title="Login" onPress={onSubmit} />
            <Gap height={20} />
          </View>
          <Gap height={15} />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  wrapContent: {
    backgroundColor: colors.Bg.secondary,
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
    borderRadius: 15,
  },
  Ilimg: {
    alignSelf: 'center',
    width: 280,
    height: 280,
  },
  register: {
    fontSize: 30,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  lupa: {
    alignSelf: 'flex-end',
    marginTop: 12,
    fontFamily: fonts.primary[500],
    color: colors.primary,
    fontSize: 14,
  },
  wrapLupa: {
    alignItems: 'center',
  },
});
