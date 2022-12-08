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
            <TouchableOpacity style={styles.music}>
                <Ionicons
                    name="musical-notes-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Musique
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cook}>
                <Ionicons
                    name="pizza-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Cuisine
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.school}>
                <Ionicons
                    name="book-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Scolaire
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.langage}>
                <Ionicons
                    name="language-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Langues
                </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: '15%', color: "orange", marginLeft: '10%'}}>
                Créer une activité
            </Text>
            <TouchableOpacity style={styles.add}>
                <Ionicons
                    name="add-circle-outline"
                    size={40}
                    color="orange"
                />
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
    music: {
        height: 60,
        width: 80,
        marginLeft: 85,
        alignItems: "center",
        padding: 10
    },
    cook: {
        height: 60,
        width: 70,
        marginTop: -60,
        marginLeft: 240,
        alignItems: "center",
        padding: 10
    },
    school: {
        height: 60,
        width: 80,
        marginLeft: 87,
        alignItems: "center",
        padding: 10
    },
    langage: {
        height: 60,
        width: 80,
        marginTop: -60,
        marginLeft: 237,
        alignItems: "center",
        padding: 10
    },
    add: {
        height: 60,
        width: 60,
        marginTop: -45,
        marginLeft: 200,
        alignItems: "center",
        padding: 10
    },
});

export default Class;