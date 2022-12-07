import * as React from 'react';
import { FlatList, StyleSheet, Button, Text, View, ScrollView, Image } from 'react-native';

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
];

const render = ({item}) => {
    return (
        <View style={{alignItems:'center', flexDirection:'row', marginTop:'5%'}}>
            <Image style={{width:80, height:80, marginLeft:'10%', borderRadius:20}} source={item.img} />
            <Text style={{marginLeft:'10%'}}>{item.title}</Text>
        </View>
    )
}

const Matches = ({ navigation }) => {
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Utilisateurs proches de chez vous partageant les mêmes centres d’intérêts</Text>
            </View>
            <View>
                <FlatList data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}/>
            </View>
        </View>
    );
}

export default Matches;