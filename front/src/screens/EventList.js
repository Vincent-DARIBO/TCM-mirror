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
import {Calendar} from 'react-native-calendars'; 

export default function EventList() {
    return (
        <View style={styles.tittle}>
            <Text style={{fontSize:25}}>Evènement a venir</Text>
            <Calendar/>
        </View>
    );
}

  const styles = StyleSheet.create({
    tittle: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    calendar: {
        flex: 1,
        padding: 40,
        alignItems: 'right'
    },
  });