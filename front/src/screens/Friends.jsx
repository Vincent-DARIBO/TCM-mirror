import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {
  fadedOrange,
  orange,
  primary,
  secondary,
  white,
} from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ElevatedView from 'react-native-elevated-view';

FontAwesome.loadFont();

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
  },
  {
    id: '13',
    title: 'Camille',
    img: require('../assets/Femme1.png'),
  },
];

const Friends = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchesList, setMatchesList] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMatchesList(DATA.filter(item => item.title.includes(searchQuery)));
    setLoading(false);
  }, [searchQuery]);

  const render = ({item, index}) => {
    return (
      <ElevatedView>
        <TouchableOpacity
          style={styles.itemCard}
          onPress={navigation.navigate('ProfileDetails', {name: item.title})}  
          >
          <Image
            style={{width: 120, height: 110, marginTop: '10%'}}
            source={item.img}
          />
          <Text
            style={{
              fontSize: 15,
              color: primary,
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
          <View style={styles.bottomCardBar} />
        </TouchableOpacity>
      </ElevatedView>
    );
  };

  const emptyList = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            paddingTop: '10%',
            fontWeight: '500',
            fontSize: 15,
          }}>
          Ajoutez vos amis pour les voir ici! <FontAwesome name="smile-o" />
        </Text>
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{width: '100%'}}>
        <Text
          style={{
            paddingTop: 10,
            fontWeight: 'bold',
            fontSize: 30,
            color: primary,
            textAlign: 'center',
          }}>
          Mes amis
        </Text>
        <Searchbar
          placeholder="Search"
          loading={loading}
          onChangeText={query => {
            setSearchQuery(query);
            setLoading(true);
          }}
          elevation={4}
          style={{
            borderRadius: 20,
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5%',
            marginBottom: '5%',
          }}
        />
        <View style={{flexDirection: 'row-reverse'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Requests')}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'red',
                textAlign: 'right',
                paddingRight: 40,
                paddingBottom: 25,
              }}>
              Demandes (2)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: '87%', width: '80%', alignItems: 'center'}}>
        <FlatList
          data={matchesList}
          renderItem={render}
          keyExtractor={item => item.id}
          numColumns={2}
          ListEmptyComponent={emptyList}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: '2%'}} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
    aspectRatio: 1,
    marginHorizontal: '2%',
    backgroundColor: 'rgba(234, 231, 233, 0.8)',
    borderRadius: 10,
  },
  bottomCardBar: {
    width: '100%',
    backgroundColor: secondary,
    height: '1%',
    borderRadius: 5,
  },
});

export default Friends;
