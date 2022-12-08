import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import CustomButton from '../components/Button';
import {useState, useEffect} from 'react';
import {
  Ionicons,
  EvilIcons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const DATA = [
  {
    id: 1,
    icon: <MaterialIcons name="add-a-photo" size={35} />,
    text: 'Photographie',
  },
  {
    id: 2,
    icon: <FontAwesome5 name="shopping-bag" size={35} />,
    text: 'Shopping',
  },
  {
    id: 3,
    icon: <MaterialCommunityIcons name="microphone-variant" size={35} />,
    text: 'Karaoke',
  },
  {
    id: 4,
    icon: <MaterialCommunityIcons name="yoga" size={35} />,
    text: 'Yoga',
  },
  {
    id: 5,
    icon: <MaterialIcons name="food-bank" size={35} />,
    text: 'Cuisine',
  },
  {
    id: 6,
    icon: <MaterialIcons name="sports-tennis" size={35} />,
    text: 'Tennis',
  },
  {
    id: 7,
    icon: <FontAwesome5 name="running" size={35} />,
    text: 'Courrir',
  },
  {
    id: 8,
    icon: <FontAwesome5 name="swimmer" size={35} />,
    text: 'Nager',
  },
];

export default function Interest() {
  const checkIsSelected = name => {
    const found = interests.find(element => element === name);

    if (found === undefined) setInterests(interests => [...interests, name]);
    else {
      for (let i = 0; i != interests.length; i++) {
        if (interests[i] === name)
          setInterests(interests.filter(item => item !== name));
      }
    }
  };
  const [interests, setInterests] = useState([]);



    const renderItem = ({ item }) => {

        return (
            <View style={{ marginTop: "5%", width: "47.5%", alignItems: "center", justifyContent: "center", alignContent: "center", marginRight: "5%" }}>
                {<CustomButton onPress={() => checkIsSelected(item.text)} title={item.text} style={{ width: "100%", backgroundColor: interests.find(element => element === item.text) ? "#FF9900" : "#FFFFFF", borderWidth: 0.5, borderColor: "grey" }} icon={item.icon} textStyle={{ color: "black", marginLeft: "5%", fontSize: "14%" }}></CustomButton>}
            </View>
        )
    }
    return (
        <View style={{ marginLeft: '10%', marginRight: '10%' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: '20%' }}>Centre d'intérêts</Text>
            <Text style={{ marginTop: "3%" }}>Sélectionnez plusieurs centre d'intérêts</Text>

            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={item => item.id}
                />
            <View>
                <TouchableOpacity>
                    <View style={{ borderWidth: 1, backgroundColor: '#007AFF', borderRadius: 20, height: '30%', justifyContent: "center", alignItems: "center", marginTop: '20%' }}>
                        <Text style={{ fontSize: 20, color: "white" }}>CONTINUER</Text>
                    </View>
                </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
