import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { primary, secondary, white } from '../constants/colors';
import Button from "./Button";
import Input from "../screens/profile/components/Input";

export default function LoginComponent() {
  return (
    <View style={{ width: 400, height: 400, borderRadius: 200 }}>
      <View style={{ flexDirection: "column", marginLeft: 30, marginRight: 30, marginTop: 40 }}>
        <View>
          <View style={{backgroundColor: secondary, width: 40, height: 40, borderRadius: 20, position:"absolute", marginTop: 10, marginLeft: -10}}></View>
          <Text style={style.title}>Login</Text>
        </View>
        <View style={{ width: 300, height: 150, flexDirection: "column", justifyContent: "space-around", marginLeft: -15}}>
            <Input style={{width:240, flexDirection:'row', alignItems: 'center'}} styleInput={{width: 200}} placeholder="Adresse mail" icon={<Ionicons name="person" size={30} style={style.icon} />}></Input>
            <Input style={{width:240, flexDirection:'row', alignItems: 'center'}} styleInput={{width: 200}} placeholder="Mot de passe" icon={<EvilIcons name="lock" size={30} style={style.icon} />}></Input>
        </View>
        <TouchableOpacity style={{marginBottom: 10}}>
          <Text>Forgot password ?</Text>
        </TouchableOpacity>
        <Button title="Login Now" style={{width: 120, borderRadius: 30, backgroundColor: secondary}}></Button>
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
    marginBottom: 10,
  },
  text: {
    color: white
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
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: white,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 1,
  },
  icon: {
    color: 'grey'
  }
});