import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Button, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {
    fadedOrange,
    orange,
    primary,
    secondary,
    white,
} from '../constants/colors';

const DATA = [
    {
        id: '1',
        title: 'Lola',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '2',
        title: 'Grand mere',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '3',
        title: 'Gisele',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '4',
        title: 'Meme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '5',
        title: 'Femme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '6',
        title: 'Zizou',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '7',
        title: 'No',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '8',
        title: 'Meme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '9',
        title: 'Femme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '10',
        title: 'Meme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '11',
        title: 'Femme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '12',
        title: 'Meme',
        img: require('../assets/Femme1.png'),
    },
    {
        id: '13',
        title: 'Femme',
        img: require('../assets/Femme1.png'),
    },
];

const Matches = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [matchesList, setMatchesList] = useState(DATA);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMatchesList(DATA.filter(item => item.title.includes(searchQuery)))
        setLoading(false)
    }, [searchQuery])

    const render = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.itemCard} onPress={() => navigation.navigate('Profile Details')} >
                <Image style={{ width: '85%', height: '80%', borderRadius: 5 }} source={item.img} />
                <Text style={{
                    paddingTop: 5,
                    fontSize: 15,
                    color: primary,
                }}>{item.title}</Text>
                <View style={styles.bottomCardBar} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ width: '100%'}} >
                <Text style={{
                    paddingTop: 10,
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: primary,
                    textAlign: 'center'
                }}>Mes amis</Text>
                <Searchbar
                    placeholder='Search'
                    loading={loading}
                    onChangeText={query => { setSearchQuery(query); setLoading(true) }}
                    elevation={4}
                    style={{ borderRadius: 20, marginLeft: '10%', marginRight: '10%', marginTop: '5%', marginBottom: '5%' }}
                />
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: secondary,
                    textAlign: 'right',
                    paddingRight: 20,
                    paddingBottom: 10
                }} >Demandes (2)</Text>
            </View>
            <View style={{ height: '87%', width: '80%' }}>
                <FlatList data={DATA.filter(item => item.title.includes(searchQuery))}
                    renderItem={render}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: '1%' }} />} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCard: {
        alignItems: 'center',
        width: '50%',
        padding: 3,
        aspectRatio: 1,
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    bottomCardBar: {
        width: '100%',
        backgroundColor: secondary,
        height: '3%',
        borderRadius: 5,
    },
})

export default Matches;