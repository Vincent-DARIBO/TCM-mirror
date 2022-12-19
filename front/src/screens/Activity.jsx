import { View, Text, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView, SectionList, Modal, Switch, TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import ScreenHeader from '../shared/components/ScreenHeader';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Icon from '../components/Icon'
import {
    fadedOrange,
    orange,
    primary,
    secondary,
    white,
} from '../constants/colors';
import ElevatedView from 'react-native-elevated-view';

const DATAA = [
    {
        id: '1',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'

    },
    {
        id: '2',
        icon: 'shopping-bag',
        iconFamily: 'Feather',
        activity: 'Shopping, marchés'
    },
    {
        id: '3',
        icon: 'run',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Sport, marche'
    },
    {
        id: '4',
        icon: 'walk',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Activités plein air'
    },
    {
        id: '5',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'
    },
    {
        id: '6',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'
    }
]

const DATAF = {
    title: 'Vos amis',
    data: [
        {
            id: '1',
            img: require('../assets/pick_nique.png'),
            name: 'Pique-nique',
            creator: 'Marie',
        },
        {
            id: '2',
            img: require('../assets/Randonnée.png'),
            name: 'Randonnée',
            creator: 'Françoise',
        },
        {
            id: '3',
            img: require('../assets/petanque.jpg'),
            name: 'Pétanque',
            creator: 'Gisèle',
        },
        {
            id: '4',
            img: require('../assets/Randonnée.png'),
            name: 'Marche',
            creator: 'Lyse',
        }
    ]
}

const DATAY = {
    title: 'Pour vous',
    data:
        [
            {
                id: '1',
                img: require('../assets/pick_nique.png'),
                name: 'Pique-nique',
                creator: 'Tania',
            },
            {
                id: '2',
                img: require('../assets/Randonnée.png'),
                name: 'Marche',
                creator: 'Léa',
            },
            {
                id: '3',
                img: require('../assets/pick_nique.png'),
                name: 'Repas',
                creator: 'Juliette',
            },
            {
                id: '4',
                img: require('../assets/Randonnée.png'),
                name: 'Randonnée',
                creator: 'Lucie',
            }
        ]
}

const DATAR = {
    title: 'Récents',
    data:
        [
            {
                id: '1',
                img: require('../assets/petanque.jpg'),
                name: 'Pétanque',
                creator: 'Marie',
            },
        ]
}


const Activity = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [allData, setAllData] = useState([DATAF, DATAY, DATAR]);
    const [loading, setLoading] = useState(false);
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [screenTitle, setScreenTitle] = useState('Activités');


    useEffect(() => {
        let friendsList = { ...DATAF }
        friendsList.data = friendsList.data.filter(item => item.name.includes(searchQuery))
        let forYouList = { ...DATAY }
        forYouList.data = forYouList.data.filter(item => item.name.includes(searchQuery))
        let recentlyList = { ...DATAR }
        recentlyList.data = recentlyList.data.filter(item => item.name.includes(searchQuery))
        setAllData([friendsList, forYouList, recentlyList])
        setLoading(false)
    }, [searchQuery])


    const render = ({ item, index }) => {
        return (
            <ElevatedView style={{ backgroundColor: '#BFC0C0', borderRadius: 10, padding: 5, margin: 2, width: 152 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { }} >
                    <Icon family={item.iconFamily} name={item.icon} style={{ color: secondary, paddingRight: 2 }} />
                    <Text numberOfLines={1} >{item.activity}</Text>
                </TouchableOpacity>
            </ElevatedView>
        )
    }

    const renderActivities = ({ item }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'column', flex: 1, paddingVertical: 10, justifyContent: 'space-between', height: 135 }} onPress={() => {navigation.navigate("Description", {item})}} >
                <Image style={{ height: 90, width: 90 }} source={item.img} />
                <Text style={{ width: '100%', textAlign: 'center', backgroundColor: '#BFC0C0', borderRadius: 10, elevation: 3 }}>{item.name}</Text>
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
                }}>Vous n'avez aucun contenu! <FontAwesome name='smile-o' /></Text>
            </View>
        )
    }

    const PopUp = () => {
        return (
            <Modal
                animationType='fade'
                visible={popUpVisible}
                transparent={true}
                onRequestClose={() => {
                    setPopUpVisible(!popUpVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 5, margin: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5, paddingBottom: 10 }}>
                            <View></View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: primary }}>Filtres</Text>
                            <Icon family={'AntDesign'} name={'closecircle'} style={{ color: secondary }} onPress={() => { setPopUpVisible(false) }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            <Text>Activités</Text>
                            <Switch trackColor={{ false: "#767577", true: primary }} thumbColor={screenTitle === 'Activités' ? secondary : "#f4f3f4"} onValueChange={() => setScreenTitle('Activités')} value={screenTitle === 'Activités' ? true : false} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            <Text>Hébergements</Text>
                            <Switch trackColor={{ false: "#767577", true: primary }} thumbColor={screenTitle === 'Hébergements' ? secondary : "#f4f3f4"} onValueChange={() => setScreenTitle('Hébergements')} value={screenTitle === 'Hébergements' ? true : false} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            <Text>Cours</Text>
                            <Switch trackColor={{ false: "#767577", true: primary }} thumbColor={screenTitle === 'Cours' ? secondary : "#f4f3f4"} onValueChange={() => setScreenTitle('Cours')} value={screenTitle === 'Cours' ? true : false} />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PopUp />
            <ScreenHeader title={screenTitle} optionPress={() => setPopUpVisible(true)} />
            <Searchbar
                placeholder='Rechercher'
                loading={loading}
                onChangeText={query => { setSearchQuery(query); setLoading(true) }}
                elevation={0}
                style={{ borderRadius: 10, marginHorizontal: '10%', marginVertical: '5%', height: 40, borderWidth: 1, borderColor: '#ADAFBB' }} />
            <View>
                <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 40 }} >
                    <FlatList data={DATAA}
                        renderItem={render}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={emptyList}
                        numColumns={Math.ceil(DATAA.length / 2)}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
            <View style={{ width: '100%', paddingHorizontal: 40, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, width: '100%', alignItems: 'center' }} >
                    <Text style={{ color: secondary, fontWeight: 'bold', fontSize: 17, paddingVertical: 5 }} >Créer {screenTitle === 'Activités' ? 'une activité' : ''}{screenTitle === 'Hébergements' ? 'un hébergement' : ''}{screenTitle === 'Cours' ? 'un cours' : ''}</Text>
                    <Icon family={'AntDesign'} name={'pluscircleo'} style={{ color: secondary }} onPress={() => { }} />
                </View>
                <View style={{ flex: 1 }}>
                    <SectionList
                        sections={allData}
                        renderItem={({ item }) => null}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<Text>Section vide</Text>}
                        renderSectionHeader={({ section }) => (
                            <View>
                                {section.data.length != 0 ? <Text style={{ color: primary, fontWeight: 'bold', fontSize: 17 }}>{section.title} ({section.data.length})</Text> : null}
                                {section.data.length != 0 ?  <FlatList
                                    data={section.data}
                                    horizontal
                                    renderItem={renderActivities}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    ListEmptyComponent={emptyList}
                                    ItemSeparatorComponent={<View style={{ width: 10 }} />}
                                /> : null}
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Activity;