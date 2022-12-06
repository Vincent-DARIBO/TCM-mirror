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

export default function EventList() {
    return (
    <ScrollView>
        <View style={styles.tittle}>
            <Text style={{fontSize:25}}>Evènement a venir</Text>
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
  });