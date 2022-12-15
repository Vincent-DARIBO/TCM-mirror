import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import PhoneInput, {isValidNumber} from 'react-native-phone-number-input';
import {useState, useRef} from 'react';
import useUserInfo from '../../providers/hooks/useUserInfo';

export default function Number({navigation, route}) {
  const {user, setUser} = useUserInfo();

  const checkValid = () => {
    if (isValidNumber(value)) {
      setUser({...user, phone: value});
      navigation.navigate('Code');
      //send OAuth code function
    } else setIsValid(false);
  };

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginLeft: '10%', marginRight: '10%'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: '20%',
            color: '#084887',
          }}>
          Numéro de téléphone
        </Text>
        <Text style={{marginTop: '10%', color: '#084887', fontWeight: 'bold'}}>
          Renseignez votre numéro de téléphone. Vous recevrez un code à 4
          chiffres pour valider votre compte
        </Text>

        <View style={{marginTop: '10%', alignItems: 'center'}}>
          <PhoneInput
            defaultValue={value}
            defaultCode="FR"
            onChangeFormattedText={text => {
              setValue(text);
            }}
            placeholder={'Numéro de téléphone'}
            containerStyle={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'grey',
            }}
            textContainerStyle={{borderRadius: 20}}
            //withDarkTheme
            withShadow
            //autoFocus
          />
          {isValid ? null : (
            <Text style={{color: 'red'}}>Numéro de téléphone invalide.</Text>
          )}
        </View>

        <TouchableOpacity onPress={() => checkValid()}>
          <View
            style={{
              marginTop: '20%',
              borderWidth: 1,
              backgroundColor: '#084887',
              borderRadius: 20,
              height: '35%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>CONTINUE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
