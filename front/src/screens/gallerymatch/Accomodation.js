import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SearchBar, updateSearch} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Button from "../../components/Button";
import {Ionicons} from '@expo/vector-icons'
import Input from "../profile/components/Input";



const Accomodation = () => {
    return (
        <View>
            <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: '15%', color: "darkblue", marginLeft: '10%'}}>
                Hébergements
            </Text>
            <TouchableOpacity style={styles.button}>
                <Ionicons 
                    name="options" 
                    size={30} 
                    color="orange"
                />
            </TouchableOpacity>
            <Input placeholder="Search"/>
            <TouchableOpacity style={styles.student}>
                <Ionicons
                    name="people-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Etudiants
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.part}>
                <Ionicons
                    name="home-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Particuliers
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.court}>
                <Ionicons
                    name="alarm-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Court-terme
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.long}>
                <Ionicons
                    name="time-outline"
                    size={30}
                    color="orange"
                />
                <Text>
                    Long-terme
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
    student: {
        height: 60,
        width: 80,
        marginLeft: 85,
        alignItems: "center",
        padding: 10
    },
    part: {
        height: 60,
        width: 100,
        marginTop: -60,
        marginLeft: 225,
        alignItems: "center",
        padding: 10
    },
    court: {
        height: 60,
        width: 100,
        marginLeft: 75,
        alignItems: "center",
        padding: 10
    },
    long: {
        height: 60,
        width: 100,
        marginTop: -60,
        marginLeft: 228,
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

export default Accomodation;