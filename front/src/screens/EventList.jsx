import React from 'react';
import {
    Keyboard,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { FAB } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons'

export default function EventList() {
    return (
        <SafeAreaView style={styles.safeareaview}>
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={styles.tittle}>
                    <Text style={{fontSize:40, color:'darkblue'}}>Evénements</Text>
                    <View style={styles.fab}>
                    <Text style={styles.text}>Créer un évènement</Text>
                        <View style={{paddingHorizontal:10}}>    
                            <AntDesign 
                            name="pluscircleo"
                            size={25}
                            onPress={() => console.log('Pressed')}
                            color="orange"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.calendar}>
                    <Calendar style={{margin: 20, elevation: 4, width: 330, height: 350}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
    },
    tittle: {
        marginBottom: 20,
        alignItems: 'center',
        padding: 10,
    },
    calendar: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        alignItems: 'center',
        fontSize: 15,
        color: 'orange',
    },
    fab: {
        flexDirection:'row',
      },
  });