import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react'
import Icon from '../components/Icon'

const DATA = [
    {
        id: 1,
        text: "Photographie",
        family: "MaterialIcons",
        name: "add-a-photo"
    },
    {
        id: 2,
        text: "Shopping",
        family: "FontAwesome5",
        name: "shopping-bag"
    },
    {
        id: 3,
        text: "Karaoke",
        family: "MaterialCommunityIcons",
        name: "microphone-variant"
    },
    {
        id: 4,
        text: "Yoga",
        family: "MaterialCommunityIcons",
        name: "yoga"
    },
    {
        id: 5,
        text: "Cuisine",
        family: "MaterialIcons",
        name: "food-bank"
    },
    {
        id: 6,
        text: "Tennis",
        family: "MaterialIcons",
        name: "sports-tennis"
    },
    {
        id: 7,
        text: "Courrir",
        family: "FontAwesome5",
        name: "running"
    },
    {
        id: 8,
        text: "Nager",
        family: "FontAwesome5",
        name: "swimmer"
    },

]

export default function Interest() {

    const checkIsSelected = (name) => {

        const found = interests.find(element => element === name);

        if (found === undefined)
            setInterests(interests => ([...interests, name]))
        else {
            for (let i = 0; i != interests.length; i++) {
                if (interests[i] === name)
                    setInterests(interests.filter(item => item !== name))
            }
        }
    }

    const [interests, setInterests] = useState([])


    const renderItem = ({ item }) => {

        return (
            <View style={{ marginTop: "5%", width: "47.5%", height: 50, marginRight: "5%" }}>
                <TouchableOpacity onPress={() => checkIsSelected(item.text)} style={{ flexDirection: "row", flex: 1, alignContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10, borderColor: "lightgrey", backgroundColor: interests.find(element => element === item.text) ? "#FF9900" : "#FFFFFF" }}>
                    <Icon
                        family={item.family}
                        name={item.name}
                        size={30}
                        style={{ marginLeft: "10%", color: interests.find(element => element === item.text) ? "#FFFFFF" : "#FF9900" }}
                    />
                    <Text style={{ marginLeft: "5%", color: interests.find(element => element === item.text) ? "#FFFFFF" : "black" }}>{item.text}</Text>
                </TouchableOpacity>
            </View>

        )
    }
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', marginTop: '20%', color: "#084887", fontWeight: "bold" }}>Centre d'intérêts</Text>
                <Text style={{ marginTop: "3%", color: "#0754A0", fontWeight: "800" }}>Sélectionne plusieurs centre d'intérêts</Text>

                <View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
                </View>
                <TouchableOpacity>
                    <View style={{ borderWidth: 1, backgroundColor: '#084887', borderRadius: 20, height: '25%', justifyContent: "center", alignItems: "center", marginTop: '40%' }}>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>CONTINUER</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}