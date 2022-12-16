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
  StatusBar,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {FAB} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import ElevatedView from 'react-native-elevated-view';

export default function EventList({navigation}) {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.tittle}>
          <Text style={{fontSize: 40, color: 'darkblue'}}>Evénements</Text>
          <View style={styles.fab}>
            <Text style={styles.text}>Créer un évènement</Text>
            <View style={{paddingHorizontal: 10}}>
              <AntDesign
                name="pluscircleo"
                size={25}
                onPress={() =>
                  navigation.navigate('CreateEvent')
                }
                color="orange"
              />
            </View>
          </View>
        </View>
        <View style={styles.calendar}>
          <ElevatedView
            elevation={4}
            style={{margin: 20, width: 330, height: 350}}>
            <Calendar
              onDayPress={() => navigation.navigate('AddEvent')}
              theme={theme.theme}
            />
          </ElevatedView>
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
    fontWeight: 'bold',
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
    flexDirection: 'row',
  },
});

export const theme = StyleSheet.create({
  theme: {
    arrowColor: 'orange',
    selectedDayBackgroundColor: 'orange',
    selectedDayTextColor: 'darkblue',
    dayTextColor: 'darkblue',
    todayTextColor: 'darkblue',
    monthTextColor: 'darkblue',
  },
});
