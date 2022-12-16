import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {
    fadedOrange,
    orange,
    primary,
    secondary,
    white,
} from '../constants/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import ScreenHeader from '../shared/components/ScreenHeader';



const DATA = [
    {
        id: '1',
        name: 'Lola',
        img: require('../assets/Femme1.png'),
        online: true,
        read: false,
        lastMessageContent: 'Hey ca va?',
        lastMessageAuthor: false, // vide ('') signifie que c nous qui avons ecrit le message, à l'inverse si il y a quelque chose c lola ici
        isWritting: false
    },
    {
        id: '2',
        name: 'Emma',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: true,
        isWritting: false
    },
    {
        id: '3',
        name: 'Gisele',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: 'Lola',
        isWritting: true
    },
    {
        id: '4',
        name: 'Caroline',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: true,
        isWritting: true
    },
    {
        id: '5',
        name: 'Nadege',
        img: require('../assets/Femme1.png'),
        online: true,
        read: false,
        lastMessageContent: 'Hello',
        lastMessageAuthor: true,
        isWritting: false
    },
    {
        id: '6',
        name: 'Adrea',
        img: require('../assets/Femme1.png'),
        online: true,
        read: false,
        lastMessageContent: 'Hello',
        lastMessageAuthor: true,
        isWritting: true
    },
    {
        id: '7',
        name: 'Natalie',
        img: require('../assets/Femme1.png'),
        online: false,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: false,
        isWritting: false
    },
    {
        id: '8',
        name: 'Felice',
        img: require('../assets/Femme1.png'),
        online: true,
        read: false,
        lastMessageContent: 'Hello',
        lastMessageAuthor: true,
        isWritting: false
    },
    {
        id: '9',
        name: 'Lea',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: false,
        isWritting: false
    },
    {
        id: '10',
        name: 'Emilie',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: false,
        isWritting: false
    },
    {
        id: '11',
        name: 'Juliette',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: false,
        isWritting: false
    },
    {
        id: '12',
        name: 'Tania',
        img: require('../assets/Femme1.png'),
        online: true,
        read: true,
        lastMessageContent: 'Hello',
        lastMessageAuthor: true,
        isWritting: false
    }
];

const Messages = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [matchesList, setMatchesList] = useState(DATA);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMatchesList(DATA.filter(item => item.name.includes(searchQuery)))
        setLoading(false)
    }, [searchQuery])

    const render = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', flex: 1, paddingBottom: 10 }} onPress={() => navigation.navigate('Chat')} >
                <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={item.img} />
                <View style={{ flex: 1, paddingLeft: 20, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '500' }}>{item.name}</Text>
                        <Text style={{ color: '#ADAFBB', fontWeight: '500' }}>20 min</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#ADAFBB' }}>{item.lastMessageAuthor && !item.isWritting ? 'Vous: ' : ''}</Text>
                        <Text numberOfLines={1} style={{ fontWeight: !item.isWritting && item.read ? '400' : 'bold' }}>{!item.isWritting ? item.lastMessageContent : 'Est en train d\'écrire...'}</Text>
                    </View>
                    <View style={{ backgroundColor: '#ADAFBB', height: 1 }} />
                </View>
            </TouchableOpacity>
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
        <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
            <ScreenHeader title='Messages' />
            <Searchbar
                placeholder='Rechercher'
                loading={loading}
                onChangeText={query => { setSearchQuery(query); setLoading(true) }}
                elevation={0}
                style={{ borderRadius: 10, marginLeft: '10%', marginRight: '10%', marginTop: '5%', marginBottom: '5%', height: 40, borderWidth: 1, borderColor: '#ADAFBB' }}
            />
            <View style={{ paddingTop: 10, paddingHorizontal: 40, width: '100%', height: '82%' }}>
                <FlatList data={matchesList}
                    renderItem={render}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={emptyList}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<View style={{ height: 10 }} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default Messages;