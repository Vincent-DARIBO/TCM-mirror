import {ImageBackground, KeyboardAvoidingView, View, Text} from 'react-native';
import Button from '../../../components/Button';

export default function BackgroundSplash() {
  return (
    <ImageBackground
      source={require('../../../assets/Splash/homeScreenBg.png')}
      style={{alignItems: 'center', height: '100%'}}>
      <KeyboardAvoidingView behavior="padding">
        <Text
          style={{
            fontWeight: '600',
            fontStyle: 'italic',
            color: '#084887',
            marginTop: 450,
            padding: 45,
            fontSize: 23,
            marginLeft: -50,
            marginRight: 55,
            position: 'absolute',
          }}>
          Make friends with the people like you
        </Text>
        <Text
          style={{
            fontWeight: '400',
            color: '#084887',
            marginTop: 520,
            padding: 45,
            fontSize: 19,
            position: 'absolute',
            width: 279,
            height: 48,
          }}>
          Interact with people with the same interest like you
        </Text>
        <View style={{marginTop: 700}}>
          <Button
            title="Continue"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <View style={{marginTop: 20}}>
            <Button title="Sign In" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
