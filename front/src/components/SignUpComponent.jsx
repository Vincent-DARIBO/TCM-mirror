import { View, TextInput, Text, StyleSheet } from "react-native"
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { primary, white, secondary } from '../constants/colors';
import Input from "../screens/profile/components/Input";

export default function SignUpComponent() {
  return(
    <View style={{ width: 400, height: 400, borderRadius: 200 }}>
      <View style={{ flexDirection: "column", marginLeft: 30, marginRight: 30, marginTop: 20 }}>
        <View>
          <View style={{backgroundColor: secondary, width: 40, height: 40, borderRadius: 20, position:"absolute", marginTop: 10, marginLeft: -10}}></View>
        </View>
        <Text style={style.title}>Sign Up</Text>
        <View style={{ width: 300, height: 200, flexDirection: "column", justifyContent: "space-between", marginTop: 10, marginLeft: -15}}>
            <Input style={{width:240, flexDirection:'row', alignItems: 'center'}} styleInput={{width: 200}} placeholder="Adresse mail" icon={<Ionicons name="person" size={30} style={style.icon} />}></Input>
            <Input style={{width:240, flexDirection:'row', alignItems: 'center'}} styleInput={{width: 200}} placeholder="Mot de passe" icon={<EvilIcons name="lock" size={30} style={style.icon} />}></Input>
            <Input style={{width:240, flexDirection:'row', alignItems: 'center'}} styleInput={{width: 200}} placeholder="Vérifier mot de passe" icon={<EvilIcons name="lock" size={30} style={style.icon} />}></Input>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    color: primary,
    fontWeight: "700",
    fontSize: 32,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    color: white,
  },
  bold: {
    color: white,
    fontWeight: "700"
  },
  image: {
    width: 30,
    height: 30,
  },
  parent: {
    flexDirection: 'row'
  },
  textinput: {
    width: 200,
    borderRadius: 40,
    backgroundColor: white,
  },
  icon: {
    color: 'grey'
  }
});