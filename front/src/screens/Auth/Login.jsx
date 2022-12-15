import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {primary, fadedOrange, secondary, white} from '../../constants/colors';
import SignUpComponent from '../../components/SignUpComponent';
import LoginComponent from '../../components/LoginComponent';
import {emailValidator, loginUser, passwordValidator} from '../../shared/utils';
import useUserInfo from '../../providers/hooks/useUserInfo';
import {useMutation} from 'react-query';
import {LogBox} from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['AxiosError: Request failed with status code 404']);

export default function Login({navigation, route}) {
  const [page, setPage] = useState('Login');
  const [password, setPassword] = React.useState('');
  const [verify, setVerify] = React.useState('');
  const [email, setEmail] = React.useState('maria@gmail.com');
  const {setUser, user} = useUserInfo();
  const {data, isSuccess, isLoading, status, isError, error, mutate} =
    useMutation(() => loginUser(email, password));

  function onSignUpPress() {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (!emailError && !passwordError && password === verify) {
      setUser({...user, email, password});
      navigation.navigate('Number');
    } else
      Alert.alert('Erreur', 'email ou mot de passe invalid', [
        {text: 'OK', style: 'cancel'},
      ]);
  }

  function onLoginPress() {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (!emailError && !passwordError) mutate();
    else {
      Alert.alert('Erreur', emailError + '\n' + passwordError, [
        {text: 'OK', style: 'cancel'},
      ]);
    }
  }
  isSuccess &&
    setUser({...user, isLogged: true, token: data.data.access_token});
  React.useEffect(() => {
    if (isError) {
      const {message} = error;
      console.log(message);
      message.includes('401') &&
        Alert.alert('Erreur', 'Mot de passe invalid', [
          {text: 'OK', style: 'cancel'},
        ]);
      message.includes('404') &&
        Alert.alert(
          'Oups',
          "Il semble que vous n'ayez pas de compte chez nous",
          [
            {text: 'OK', style: 'cancel'},
            {text: 'Créer un compte', onPress: () => setPage('signUp')},
          ],
        );
    }
  }, [error]);
  !isLoading && isSuccess && console.log(data.data.access_token);
  return (
    <View
      style={{backgroundColor: primary, width: 100 + '%', height: 100 + '%'}}>
      <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
        <Text
          style={{
            color: fadedOrange,
            fontSize: 34,
            width: 290,
            fontWeight: '600',
          }}>
          Bienvenue sur,
          <Text style={{color: secondary}}> Tous Chez Marcel</Text>
        </Text>

        <View style={{justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{color: white, marginRight: 30}}
              onPress={() => {
                setPage('Login');
              }}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text
                  style={{
                    color: white,
                    fontWeight: '700',
                    marginBottom: 5,
                    fontSize: 18,
                  }}>
                  Login
                </Text>
                {page === 'Login' ? (
                  <View
                    style={{
                      backgroundColor: secondary,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}></View>
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{color: white}}
              onPress={() => {
                setPage('SignUp');
              }}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text
                  style={{
                    color: white,
                    fontWeight: '700',
                    marginBottom: 5,
                    fontSize: 18,
                  }}>
                  Signup
                </Text>

                {page === 'Login' ? null : (
                  <View
                    style={{
                      backgroundColor: secondary,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}></View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{marginTop: 30}}>
        <View
          style={{
            backgroundColor: white,
            width: 400,
            height: 400,
            borderRadius: 200,
            left: -100,
            position: 'absolute',
          }}></View>

        {page === 'Login' ? (
          <LoginComponent
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            onLoginPress={() => onLoginPress()}
          />
        ) : (
          <SignUpComponent
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            verify={verify}
            setVerify={setVerify}
            onSignUpPress={() => onSignUpPress()}
          />
        )}
      </View>

      <View
        style={{
          backgroundColor: primary,
          marginRight: 30,
          alignSelf: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text style={style.text}>
          Already have an account <Text style={style.bold}>Signup ?</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 170,
          }}>
          <Text style={style.bold}>Also login with</Text>
          <Image
            source={require('../../assets/logoFacebook.png')}
            style={style.image}></Image>
          <Image
            source={require('../../assets/logoGoogle.png')}
            style={style.image}></Image>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    color: primary,
    // color: white,
    fontWeight: '700',
    fontSize: 32,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: white,
  },
  bold: {
    color: white,
    fontWeight: '700',
  },
  image: {
    width: 30,
    height: 30,
  },
  parent: {
    flexDirection: 'row',
  },
  textinput: {
    width: 250,
    borderRadius: 40,
    backgroundColor: white,
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: -20,
    marginTop: 20,
  },
  icon: {
    color: primary,
  },
});
