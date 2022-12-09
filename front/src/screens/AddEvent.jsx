import React from 'react';
import { FAB } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import {
    Keyboard,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
} from 'react-native';

export default function AddEvent() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
  //contentContainerStyle={{flex:1}}
  <SafeAreaView style={styles.safeareaview} >
    <ScrollView >
      <View style={styles.tittle}>
          <Text style={styles.text}>Lundi 25 novembre</Text>
      </View>
      <View style={styles.search}>
        <Searchbar style={{borderRadius: 30}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
      </View>
      <View style={styles.container}>
          <Text style={styles.textWhite}>Cours d'espagnol</Text>
          <Text>9:00 AM - 10:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 1er</Text>
          <View style={styles.sameLigne}>
            <Image style={styles.image} source={require("../assets/Femme1.png")} />
            <Image style={styles.image} source={require("../assets/marcel.png")} />
          </View>
      </View>
      <View style={styles.container2}>
          <Text style={styles.textWhite}>Partie d'échec avec léa</Text>
          <Text>10:00 AM - 11:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 7eme</Text>
          <Image style={styles.image} source={require("../assets/Femme1.png")} />
      </View>
      <View style={styles.container3}>
          <Text style={styles.textWhite}>Yoga avec karine</Text>
          <Text>9:00 AM - 11:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 1er</Text>
          <Image style={styles.image} source={require("../assets/Femme1.png")} />
      </View>
      <View style={styles.container4}>
          <Text style={styles.textWhite}>Pique-nique avec marie</Text>
          <Text>10:00 AM - 11:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 8eme</Text>
          <View style={styles.sameLigne}>
            <Image style={styles.image} source={require("../assets/Femme1.png")} />
            <Image style={styles.image} source={require("../assets/marcel.png")} />
          </View>
      </View>
      {/*<View style={styles.fab}>
        <FAB 
        icon="plus"
        onPress={() => console.log('Pressed')}
        />
  </View>*/}
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tittle: {
      padding: 10,
      alignItems: 'center',
    },
  text: {
      fontSize: 30,
      color:'#00008b',
      fontWeight:'bold'
    },
  textWhite: {
    fontSize: 20,
    color:'white'
  },
  search: {
    padding: 20,
    alignItems: 'center',
  },
  image:{
    width:25,
    height:25,
    borderRadius:100,
  },
  sameLigne:{
    flexDirection:'row',
  },
  container: {
      padding: 10,
      backgroundColor: "red",
      marginRight: 20,
      marginLeft: 20,
      marginBottom: 10,
      borderRadius: 30,
    },
  container2: {
    padding: 10,
    backgroundColor: "lightskyblue",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 30
  },
  container3: {
    padding: 10,
    backgroundColor: "navajowhite",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 30
  },
  container4: {
    padding: 10,
    backgroundColor: "lightgreen",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 30
  },
  fab: {
    position: 'absolute',
    right: 50,
    bottom: 10,
  },
  safeareaview: {
    flex:1,
  },
});