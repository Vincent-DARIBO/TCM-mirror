import React from 'react';
import {
    Keyboard,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';

export default function AddEvent() {
    return (
    <ScrollView>
        <View style={styles.tittle}>
            <Text style={{fontSize:25}}>Lundi 25 novembre</Text>
            {/* <Button title="pres" onPress={() => navigation.navigate('Number')} /> */}
        </View>
        <View style={styles.container}>
            <Text style={{fontSize:20}}>Cours de poterie avec ginette</Text>
            <Text>9-11h</Text>
            <Text>places restantes: 3</Text>
            {/* <Button title="pres" onPress={() => navigation.navigate('Number')} /> */}
        </View>
        <View style={styles.container2}>
            <Text style={{fontSize:20}}>Partie d'échec avec léa</Text>
            <Text>15h</Text>
            {/* <Button title="pres" onPress={() => navigation.navigate('Number')} /> */}
        </View>
        <View style={styles.container3}>
            <Text style={{fontSize:20}}>Balade sur les quais avec Thibault</Text>
            <Text>17h</Text>
            {/* <Button title="pres" onPress={() => navigation.navigate('Number')} /> */}
        </View>
        <View style={styles.container4}>
            <Text style={{fontSize:20}}>Balade sur les quais avec Thibault</Text>
            <Text>20h</Text>
            {/* <Button title="pres" onPress={() => navigation.navigate('Number')} /> */}
        </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
    tittle: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
      },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "red"
      },
      container2: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
      },
      container3: {
        flex: 1,
        padding: 24,
        backgroundColor: "green"
      },
      container4: {
        flex: 1,
        padding: 24,
        backgroundColor: "yellow"
      },

    /*photo: {
      height: 350,
    },
    title: {
      paddingTop: 10,
      fontWeight: 'bold',
      fontSize: 30,
    },
    image: {
      resizeMode: 'contain',
      height: 200,
      width: 130,
      borderRadius: 10,
    },
    elevated: {
      height: 198,
      width: 130,
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: 'transparent',
    },
    circle: {
      height: 30,
      width: 30,
      borderRadius: 30,
      backgroundColor: orange,
    },*/
  });