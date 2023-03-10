import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import useUserInfo from '../../providers/hooks/useUserInfo';
import Clipboard from '@react-native-community/clipboard';
import Input from '../profile/components/Input';

const isIOS = Platform.OS === 'ios';

const Code = ({route, navigation}) => {
  const {user} = useUserInfo();
  const checkVerification = code => {
    console.log('code ' + code);
    if (code === '0000') navigation.navigate('Gender');
    else {
      setInvalidCode(true);
      setCode('');
    }
  };

  const {phone} = user;
  const [invalidCode, setInvalidCode] = useState(false);
  const [myCode, setCode] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.prompt}>
        Entrez le code de vérification que vous avez reçu.
      </Text>
      <Text style={styles.message}>{phone}</Text>

      <TouchableOpacity
        onPress={() => navigation.replace('Number')}
        style={{marginTop: '5%'}}>
        {invalidCode ? (
          <Text style={styles.error}>Incorrect code.</Text>
        ) : (
          <Text style={{fontStyle: 'italic', color: '#084887'}}>
            Modifier le numéro de téléphone
          </Text>
        )}
      </TouchableOpacity>
      {isIOS ? (
        <OTPInputView
          style={{width: '80%', height: 200}}
          pinCount={4}
          editable={true}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            checkVerification(code);
          }}
        />
      ) : (
        <Input
          maxLength={4}
          placeholder="Enter yout code"
          value={myCode}
          onChangeText={setCode}
          style={{marginTop: 10}}
          onSubmitEditing={() => {
            checkVerification(myCode);
          }}
          keyboardType="number-pad"
        />
      )}

      <Text
        style={{
          color: '#FF9900',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: '40%',
        }}>
        Renvoyer le code
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#4B7FB2',
  },

  underlineStyleBase: {
    width: 70,
    height: 70,
    borderWidth: 5,
    borderBottomWidth: 5,
    borderRadius: 20,
    fontWeight: 'bold',
    color: '#084887',
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: '#084887',
  },

  prompt: {
    fontSize: 24,
    paddingHorizontal: 30,
    paddingBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#084887',
  },

  message: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    color: '#4B7FB2',
  },

  error: {
    color: 'red',
    // marginTop: '-10%',
  },
});

export default Code;
