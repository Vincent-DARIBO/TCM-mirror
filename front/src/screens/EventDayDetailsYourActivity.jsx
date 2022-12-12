import React from 'react';
import { FAB } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
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

export default function EventDayDetailsYourActivity() {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
    return (
    //contentContainerStyle={{flex:1}}
    <SafeAreaView style={styles.safeareaview} >
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.tittle}>
                <Text style={styles.text}>Lundi 25 novembre</Text>
            </View>
            <View style={styles.search}>
            <Searchbar style={{borderRadius: 20, width:280}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
            <View style={{borderRadius:10, borderColor:"whitesmoke", borderWidth:2, alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons size={30} style={{color:'orange'}} name='options'/>
            </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.textWhite}>Pique-nique avec Marie</Text>
                <Text>9:00 AM - 10:00 AM</Text>
                <Text style={{textAlign:'right'}}>Lyon 1er</Text>
                <View style={styles.sameLigne}>
                    <Image style={styles.image} source={require("../assets/Femme1.png")} />
                    <Image style={styles.image} source={require("../assets/marcel.png")} />
                </View>
            </View>
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
    fab: {
      position: 'absolute',
      right: 50,
      bottom: 10,
    },
    safeareaview: {
      flex:1,
    },
  });