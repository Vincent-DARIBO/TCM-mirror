import React, { useState, useEffect } from 'react';
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
        online: true,
    },
    {
        id: '2',
        title: 'Emma',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '3',
        title: 'Gisele',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '4',
        title: 'Caroline',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '5',
        title: 'Nadege',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '6',
        title: 'Adrea',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '7',
        title: 'Natalie',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '8',
        title: 'Felice',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '9',
        title: 'Lea',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '10',
        title: 'Emilie',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '11',
        title: 'Juliette',
        img: require('../assets/Femme1.png'),
        online: true,
    },
    {
        id: '12',
        title: 'Tania',
        img: require('../assets/Femme1.png'),
        online: true,
    }
];

const MyMessages = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [matchesList, setMatchesList] = useState(DATA);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMatchesList(DATA.filter(item => item.title.includes(searchQuery)))
        setLoading(false)
    }, [searchQuery])

    const render = ({ item, index }) => {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image style={{height: 50, width: 50, borderRadius: 25}} source={item.img}/>
                <Text>{item.title}</Text>
            </View>
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
            <Searchbar
                placeholder='Search'
                loading={loading}
                onChangeText={query => { setSearchQuery(query); setLoading(true) }}
                elevation={4}
                style={{ borderRadius: 20, marginLeft: '10%', marginRight: '10%', marginTop: '5%', marginBottom: '5%' }}
            />
            <FlatList data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}
                ListEmptyComponent={emptyList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={<View style={{height: 10}}/>}
            />
        </View>
    )
}
export default MyMessages;