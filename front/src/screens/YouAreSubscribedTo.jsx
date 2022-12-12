import React from 'react';
import { FAB } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import {Ionicons, EvilIcons, Feather} from '@expo/vector-icons';
import {
    Keyboard,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native';

export default function YouAreSubscribedTo() {
    return (
        <SafeAreaView style={styles.safeareaview}>
            <ScrollView>
                <View style={styles.alignelemView}>
                    <View>
                        <Text style={styles.text}>Vous êtes inscrit à:</Text>
                    </View>
                    <View>
                        <Text style={styles.subtext}>Pique-nique avec Marie</Text>
                    </View>
                </View>
                <View style={{marginLeft:20, padding:10, marginBottom:10}}>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <View >    
                                <Ionicons 
                                name="time-outline"
                                size={25}
                                onPress={() => console.log('Pressed')}
                                color="red"
                                />
                        </View>
                        <View>
                            <Text style={styles.hour}>9:00 AM - 10:00 AM</Text>
                            <Text style={styles.date}>Mercredi 21 janvier</Text>
                        </View>
                    </View>
                    <View style={styles.sameLigne}>
                        <Image style={styles.image} source={require("../assets/Femme1.png")} />
                        <Image style={styles.image} source={require("../assets/marcel.png")} />
                    </View>
                </View>
                <View style={{marginLeft:23,justifyContent:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <EvilIcons
                                name="location"
                                size={30}
                                onPress={() => console.log('Pressed')}
                                color="orange"
                                />
                        </View>
                        <View style={{paddingBottom:8}}>
                            <Text style={styles.place}>TETE D'OR</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft:20, padding:10}}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Feather
                                name="align-left"
                                size={30}
                                onPress={() => console.log('Pressed')}
                                color="lightblue"
                                />
                        </View>
                        <View style={{flexShrink: 1, marginHorizontal:10, marginBottom:40}}>
                            <Text style={styles.description}> Bonjour, je m’apelle Marie j’ai 35 ans, traiteuse depuis quelques années maintenant j’aime partager ma cuisine avec du monde. 
                            C’est pour cela que je vous invite à partager avec moi un jolie pique nique préparer par mes soins. 
                            Vous pouvez si le souhaiter vous aussi rapporter quelques chose. </Text>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                    <TouchableOpacity>
                        <View>
                            <View style={styles.buttonRappel}>
                                <Text style={{color:'white'}}>Créer un rappel</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{color:'white'}}>Désinscription</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom:20,
        paddingHorizontal:20,
    },
    buttonRappel: {
        backgroundColor: 'wheat',
        borderRadius: 8,
        marginLeft:20,
        padding: 5,
        alignItems:'center',
        width:130,
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 8,
        marginRight:10,
        padding: 5,
        alignItems:'center',
        width:130
    },
    alignelemView: {
        marginLeft: 10,
        padding: 20,
    },
    place: {
        color:'darkblue',
    },
    description: {
        color:'darkblue',
        fontSize:16,
        textAlign:'justify'
    },
    text: {
        fontSize: 30,
        color:'darkblue',
        fontWeight:'bold',
    },
    subtext: {
        fontSize: 30,
        color:'orange',
        fontWeight:'bold',
    },
    sameLigne:{
        flexDirection:'row',
        marginLeft:20
    },
    hour:{
        marginLeft:5, 
        color:'darkblue', 
        fontWeight:'bold'
    },
    date:{
        marginLeft:10, 
        color:'darkblue', 
        fontWeight:'bold'
    },
    image:{
        width:25,
        height:25,
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 5
      },
  });