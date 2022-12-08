import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SearchBar, updateSearch} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Button from "../../components/Button";
import {Ionicons} from '@expo/vector-icons'
import Input from "../profile/components/Input";



const Activity = () => {
    return (
        <View>
            <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: '15%', color: "darkblue", marginLeft: '10%'}}>
                Activités
            </Text>
            <TouchableOpacity style={styles.button}>
                <Ionicons 
                    name="options" 
                    size={30} 
                    color="orange"
                />
            </TouchableOpacity>
            <Input placeholder="Search"/>
            <TouchableOpacity style={styles.resto}>
                <Ionicons
                    name="wine-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Restaurants, dîner...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shopping}>
                <Ionicons
                    name="basket-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Shopping, marché...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sport}>
                <Ionicons
                    name="bicycle-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Sports, marche...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outside}>
                <Ionicons
                    name="golf-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Activité en plein air...
                </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: '15%', color: "darkblue", marginLeft: '10%'}}>
                Vos amis
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: '15%', color: "darkblue", marginLeft: '10%'}}>
                Pour vous
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: '15%', color: "darkblue", marginLeft: '10%'}}>
                Récents
            </Text>
        </View>
    )
}
  
const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 60,
        marginLeft: 300,
        marginTop: -47,
        alignItems: "center",
        padding: 10
    },
    resto: {
        height: 60,
        width: 250,
        alignItems: "center",
        padding: 10
    },
    shopping: {
        height: 60,
        width: 250,
        marginTop: -60,
        marginLeft: 150,
        alignItems: "center",
        padding: 10
    },
    sport: {
        height: 60,
        width: 250,
        alignItems: "center",
        padding: 10
    },
    outside: {
        height: 60,
        width: 250,
        marginTop: -60,
        marginLeft: 150,
        alignItems: "center",
        padding: 10
    }
});

export default Activity;