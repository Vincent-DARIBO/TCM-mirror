import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {
    fadedOrange,
    orange,
    primary,
    secondary,
    white,
} from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

FontAwesome.loadFont()

const DATA = [
    {
        id: '1',
        title: 'Lola',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '2',
        title: 'Emma',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '3',
        title: 'Gisele',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '4',
        title: 'Caroline',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '5',
        title: 'Nadege',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '6',
        title: 'Adrea',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '7',
        title: 'Natalie',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '8',
        title: 'Felice',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '9',
        title: 'Lea',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '10',
        title: 'Emilie',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '11',
        title: 'Juliette',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '12',
        title: 'Tania',
        img: require('../assets/Femme1.png'),
    }
];

const MyMessages = () => {

    const render = ({ item, index }) => {
        return (
            <View><Text>{item.title}</Text></View>
        )
    }

    const emptyList = () => {
        return (
            <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                <Text style={{
                    paddingTop: '10%',
                    fontWeight: '500',
                    fontSize: 15,
                }}>Vous n'avez aucune conversation! <FontAwesome name='smile-o' /></Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}
                ListEmptyComponent={emptyList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default MyMessages;