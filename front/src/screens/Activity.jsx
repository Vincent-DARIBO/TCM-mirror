import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
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

const DATAA = [
    {
        id: '1',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'

    },
    {
        id: '2',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'
    },
    {
        id: '3',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'
    },
    {
        id: '4',
        icon: 'glass-wine',
        iconFamily: 'MaterialCommunityIcons',
        activity: 'Restaurants, dîner'
    }
]

const DATAF = [
    {
        id: '1',
        img: require('../assets/Femme1.png'),
        title: 'text',
    },
    {
        id: '2',
        img: require('../assets/Femme1.png'),
        title: 'text',
    },
    {
        id: '3',
        img: require('../assets/Femme1.png'),
        title: 'text',
    },
    {
        id: '4',
        img: require('../assets/Femme1.png'),
        title: 'text',
    }
]

const DATAY = [
    {
        id: '1',
        img: require('../assets/Femme1.png'),
        title: 'text',
    },
    {
        id: '2',
        img: require('../assets/Femme1.png'),
        title: 'text',
    },
    {
        id: '3',
        img: require('../assets/Femme1.png'),
        title: 'text',
    },
    {
        id: '4',
        img: require('../assets/Femme1.png'),
        title: 'text',
    }
]

const DATAR = [
]


const Activity = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [friendsList, setFriendsList] = useState(DATAF);
    const [forYouList, setForYouList] = useState(DATAY);
    const [recently, setRecently] = useState(DATAR);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setFriendsList(DATAF.filter(item => item.name.includes(searchQuery)))
        setForYouList(DATAR.filter(item => item.name.includes(searchQuery)))
        setRecently(DATAR.filter(item => item.name.includes(searchQuery)))
        setLoading(false)
    }, [searchQuery])

    const render = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', flex: 1 / 2, paddingBottom: 5, backgroundColor: '#ADAFBB', borderRadius: 5 }} onPress={() => { }} >
                <Icon family={item.iconFamily} name={item.icon} style={{ color: secondary }} />
                <Text>{item.activity}</Text>
            </TouchableOpacity>
        )
    }

    const renderActivities = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'column', flex: 1, paddingBottom: 10 }} onPress={() => navigation.navigate('Chat')} >
                <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={item.img} />
                <Text>Text</Text>
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
        <View style={{ alignItems: 'center' }}>
            <ScreenHeader title='Activités' />
            <Searchbar
                placeholder='Rechercher'
                loading={loading}
                onChangeText={query => { setSearchQuery(query); setLoading(true) }}
                elevation={0}
                style={{ borderRadius: 10, marginLeft: '10%', marginRight: '10%', marginTop: '5%', marginBottom: '5%', height: 40, borderWidth: 1, borderColor: '#ADAFBB' }} />
            <View style={{ paddingTop: 10, paddingHorizontal: 40, width: '100%' }}>
                <FlatList data={DATAA}
                    renderItem={render}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={emptyList}
                    numColumns={2}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<View style={{ height: 10 }} />}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ color: secondary }} >Créer une activité</Text>
                    <Icon family={'AntDesign'} name={'pluscircleo'} style={{ color: secondary }} onPress={() => { }} />
                </View>
                <Text style={{ paddingBottom: 5, color: primary }}>Vos amis ({ })</Text>
                <FlatList data={friendsList}
                    renderItem={renderActivities}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={emptyList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<View style={{ height: 10 }} />}
                />
                <Text style={{ paddingBottom: 5, color: primary }} >Pour vous ({ })</Text>
                <FlatList data={forYouList}
                    renderItem={renderActivities}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={emptyList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<View style={{ height: 10 }} />}
                />
                <Text style={{ paddingBottom: 5, color: primary }}>Récents ({ })</Text>
                <FlatList data={recently}
                    renderItem={renderActivities}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={emptyList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={<View style={{ height: 10 }} />}
                />
            </View>
        </View>
    )
}

export default Activity;