import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SearchBar, updateSearch} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Button from "../../components/Button";
import {Ionicons} from '@expo/vector-icons'
import Input from "../profile/components/Input";



const Class = () => {
    return (
        <View>
            <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: '15%', color: "darkblue", marginLeft: '10%'}}>
                Cours {"\n"}personnels
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
                    name="musical-notes-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Musique
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shopping}>
                <Ionicons
                    name="pizza-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Cuisine
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sport}>
                <Ionicons
                    name="book-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Scolaire
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outside}>
                <Ionicons
                    name="language-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Langues
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
    },
});

export default Class;