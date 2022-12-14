import React from 'react';
import { FAB } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
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

export default function AddEvent({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
  //contentContainerStyle={{flex:1}}
  <SafeAreaView style={styles.safeareaview} >
    <ScrollView style={{backgroundColor:'white', paddingHorizontal: 10}}>
      <View style={styles.tittle}>
          <Text style={styles.text}>Lundi 25 novembre</Text>
      </View>
      <View style={styles.search}>
        <Searchbar placeholderTextColor={'gainsbord'} style={{marginLeft:10, borderRadius: 10, width:240, height:40, backgroundColor:'white'}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
        <View style={{marginRight:10, borderRadius:10, borderColor:"whitesmoke", borderWidth:2, alignItems: 'center', justifyContent: 'center'}}>
          <Ionicons size={37} style={{color:'orange'}} name='options'/>
        </View>
      </View>
      <View >
      </View>
      <View style={styles.container}>
          <Text style={styles.textWhite}>Cours d'espagnol</Text>
          <Text style={{color:'white'}}>9:00 AM - 10:00 AM</Text>
          <Text style={{textAlign:'right', color:'white'}}>Lyon 1er</Text>
          <View style={styles.sameLigne}>
            <View style={styles.sameLigne}>
              <Image style={styles.image} source={require("../assets/Femme1.png")} />
              <Image style={styles.image} source={require("../assets/marcel.png")} />
            </View>
            <View style={styles.sameLigne}>
              <Text style={{opacity:0.5}}>Participer</Text>
              <MaterialCommunityIcons
                name="calendar-edit"
                size={30}
                onPress={() => navigation.navigate('YouAreSubscribedTo')}
                style={{opacity:0.5}}
                />
            </View>
          </View>
      </View>
      <View style={styles.container2}>
          <Text style={styles.textWhite}>Partie d'échec avec léa</Text>
          <Text>10:00 AM - 11:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 7eme</Text>
          <View style={styles.sameLigne}>
            <View style={styles.sameLigne}>
              <Image style={styles.image} source={require("../assets/Femme1.png")} />
            </View>
            <View style={styles.sameLigne}>
              <Text style={{opacity:0.5}}>Participer</Text>
              <MaterialCommunityIcons
                name="calendar-edit"
                size={30}
                onPress={() => navigation.navigate('YouAreSubscribedTo')}
                style={{opacity:0.5}}
                />
            </View>
          </View>
      </View>
      <View style={styles.container3}>
          <Text style={styles.textWhite}>Yoga avec karine</Text>
          <Text>9:00 AM - 11:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 1er</Text>
          <View style={styles.sameLigne}>
            <View style={styles.sameLigne}>
              <Image style={styles.image} source={require("../assets/marcel.png")} />
            </View>
            <View style={styles.sameLigne}>
              <Text style={{opacity:0.5}}>Participer</Text>
              <MaterialCommunityIcons
                name="calendar-edit"
                size={30}
                onPress={() => navigation.navigate('YouAreSubscribedTo')}
                style={{opacity:0.5}}
                />
            </View>
          </View>
      </View>
      <View style={styles.container4}>
          <Text style={styles.textWhite}>Pique-nique avec marie</Text>
          <Text>10:00 AM - 11:00 AM</Text>
          <Text style={{textAlign:'right'}}>Lyon 8eme</Text>
          <View style={styles.sameLigne}>
            <View style={styles.sameLigne}>
              <Image style={styles.image} source={require("../assets/Femme1.png")} />
              <Image style={styles.image} source={require("../assets/marcel.png")} />
            </View>
            <View style={styles.sameLigne}>
              <Text style={{opacity:0.5}}>Participer</Text>
              <MaterialCommunityIcons
                name="calendar-edit"
                size={30}
                onPress={() => navigation.navigate('YouAreSubscribedTo')}
                style={{opacity:0.5}}
                />
            </View>
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
    padding: 10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  imageMenu:{
    width:40,
    height:40,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  image:{
    width:25,
    height:25,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 5
  },
  sameLigne:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container: {
      padding: 10,
      backgroundColor: "red",
      marginRight: 20,
      marginLeft: 20,
      marginBottom: 10,
      borderRadius: 10,
      borderLeftWidth: 10,
      borderLeftColor: "darkred",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  container2: {
    padding: 10,
    backgroundColor: "lightskyblue",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: "royalblue",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container3: {
    padding: 10,
    backgroundColor: "bisque",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: "navajowhite",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container4: {
    padding: 10,
    backgroundColor: "lightgreen",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: "green",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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