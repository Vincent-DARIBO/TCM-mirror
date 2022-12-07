import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

export default function Friends() {
  return (
    <ScrollView>
      <View style={{justifyContent: 'space-between'}}>

        <View style={{ marginLeft:40, marginRight: 40 ,flexDirection: "row", justifyContent: 'space-between'}}>
          <Text style={page.title}>Mes amis</Text>
          <View style={{borderColor: '#BFC0C0', borderWidth: 1, borderRadius: 5}}>
            <Image source={require("../../../assets/3barres.png")} style={page.icon}></Image>
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <Image source={require("../../../assets/loupe.png")} style={page.icon}></Image>
          <TextInput style={{width: 100+ '%', height: 40}} placeholder="Search"></TextInput>
        </View>

        <View style={{flexDirection: "column", justifyContent: "space-around", width: 100+'%'}}>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <View>
              <Image source={require("../../assets/Femme1.png")} style={page.image}/>
              <Text style={page.text}>Juliette Dubois, 76</Text>
            </View>
            <View>
              <Image source={require("../../assets/Femme1.png")} style={page.image}/>
              <Text style={page.text}>Juliette Dubois, 76</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <View>
              <Image source={require("../../assets/Femme1.png")} style={page.image}/>
              <Text style={page.text}>Juliette Dubois, 76</Text>
            </View>
            <View>
              <Image source={require("../../assets/Femme1.png")} style={page.image}/>
              <Text style={page.text}>Juliette Dubois, 76</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

const page =   StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    marginTop: 75
  },
  text : {
    fontSize: 20
  },
  title: {
    fontSize: 30,
    color: "#084887",
    fontWeight: '700'
  },
  icon: {
    width: 40,
    height: 40,
  }
});