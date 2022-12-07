import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Badge from '../../components/Badge';
import {layout} from '../../shared/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {primary, white} from '../../constants/colors';

export default function ProfileDetails() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={[layout.center]}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color : primary, maringTop: 10}}>
          Gilbert
        </Text>
        <ElevatedView
          elevation={5}
          style={[layout.center, styles.imageContainer]}>
          <Image
            source={require('../../assets/marcel.png')}
            style={styles.image}
          />
        </ElevatedView>
        <View style={[styles.paragraph, {marginTop: 20}]}>
          <Text style={{fontSize: 20}}>Ceci est une description</Text>
        </View>
        <View style={[styles.paragraph, {marginTop: 20}]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>
            Position
          </Text>
          <Text style={{fontSize: 20}}>Ceci est une description</Text>
        </View>
        <View style={[styles.paragraph, {marginTop: 20}]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>
            À propos
          </Text>
          <Text style={{fontSize: 20, marginTop: 5}}>
            Je suis Marcel, le fondateur de cette appli je vais écrire ce lon
            text pour faire des test su tous chez marcel{' '}
          </Text>
        </View>

        <Badge
          title="Shopping"
          icon={<FontAwesome5 name="shopping-bag" size={20} color={white} />}
        />
        <Badge
          title="Shopping"
          icon={<FontAwesome5 name="shopping-bag" size={20} color={white} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 200,
    height: 300,
    borderRadius: 15,
    marginTop: 10,
  },
  paragraph: {
    maxWidth: 300,
    width: '80%',
    marginTop: 10,
    borderRadius: 15,
  },
});
