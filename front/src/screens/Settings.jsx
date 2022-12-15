import { View, Text, StyleSheet, Image } from "react-native";
import { drakGray, gray, primary, white } from "../constants/colors";
import Icon from "../components/Icon";
import femme from "../assets/Femme1.png"

export default function Settings({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Icon family="Ionicons" name="settings" color={white} size={32}></Icon>
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.person}>
          <View style={styles.user}>
            <Image source={femme} style={styles.image}></Image>
            <Text style={styles.name}>Juliette Dubois</Text>
          </View>
          <Icon family="FontAwesome5" name="pen" color={primary} size={15} style={styles.pen}></Icon>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.second}>
            <Text style={{ color: drakGray, fontWeight: '400', fontSize: 20 }}>Account Settings</Text>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 15, textAlignVertical: 'center', height: 40 }} onPress={() => { navigation.navigate('Edit Profile') }}>Edit profile</Text>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 15, textAlignVertical: 'center', height: 40 }}>Change password</Text>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 15, textAlignVertical: 'center', height: 40 }}>Ajouter un mode de paiement</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40 }}>
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>notifications push</Text>
              <Icon family="MaterialCommunityIcons" name="toggle-switch" size={50} color={primary}></Icon>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40 }}>
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>mode nuit</Text>
              <Icon family="MaterialCommunityIcons" name="toggle-switch" size={50} color={drakGray} style={{transform: [{rotateY: '180deg'}]}}></Icon>
            </View>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <View style={styles.third}>
            <Text style={{ color: drakGray, fontWeight: '400', fontSize: 15 }}>More</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>À propos</Text>
              <Icon family="AntDesign" name="right" size={20} ></Icon>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'  }}>
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>Privacy policy</Text>
              <Icon family="AntDesign" name="right" size={20} ></Icon>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'  }}>
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>Terms and conditions</Text>
              <Icon family="AntDesign" name="right" size={20} ></Icon>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    width: 100 + '%',
    height: 100 + '%',
  },
  header: {
    backgroundColor: primary,
    width: 100 + '%',
    height: 40 + '%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',

  },
  title: {
    width: 35 + '%',
    flexDirection: "row",
    left: 5 + '%',
    top: 5 + '%',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: white,
    fontWeight: '400',
    marginLeft: 5 + '%',
  },
  card: {
    top: 10 + '%',
    left: 5 + '%',
    width: 90 + '%',
    height: 90 + '%',
    backgroundColor: white,
    position: 'relative',
    borderRadius: 20,
  },
  person: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
  },
  user: {
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    height: 75,
    width: 200,
    justifyContent: "space-around"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    color: primary,
    fontWeight: '700'
  },
  pen: {
    right: 20
  },
  secondContainer: {
    borderBottomColor: gray,
    borderBottomWidth: 1,
    height: 40 + '%',
    paddingBottom: 20,
    paddingTop: 20,
  },
  second: {
    left: 10 + '%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100 + '%',
    width: 275
  },
  thirdContainer: {
    height: 30 + '%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  third: {
    left: 10 + '%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100 + '%',
    width: 275
  }
});