import React from 'react';
import { Button, Text, View } from 'react-native';
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import { useState, useRef } from 'react'


export default function Number({ navigation }) {

    const checkValid = () => {

        if (isValidNumber(value)) {
            navigation.navigate("Code", { phoneNumber : value})
            //send OAuth code function
        }
        else
            setIsValid(false)
    }

    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true)

    return (
        <View style={{ marginLeft: "10%", marginRight: "10%" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: "20%" }}>Numéro de téléphone</Text>
            <Text style={{ marginTop: "10%" }}>Renseignez votre numéro de téléphone. Vous recevrez un code à 4 chiffres pour valider votre compte</Text>

            <View style={{ marginTop: "10%", borderRadius: 20, alignItems: "center" }}>
                <PhoneInput
                    defaultValue={value}
                    defaultCode="FR"
                    onChangeFormattedText={(text) => {
                        setValue(text);
                    }}
                    placeholder={"Numéro de téléphone"}
                    containerStyle={{ borderWidth: 1, borderRadius: 20 }}
                    textContainerStyle={{ borderRadius: 20 }}
                    //withDarkTheme
                    withShadow
                //autoFocus
                />
                {
                    isValid ? null : <Text style={{ color: "red" }}>Numéro de téléphone invalide.</Text>
                }
            </View>
            <View style={{ marginTop: "20%", borderWidth: 1, backgroundColor: "#007AFF", borderRadius: 20, height: "15%", justifyContent: "center" }}>
                {<Button title="CONTINUE" color="#FFFFFF" onPress={() => checkValid()} />}
            <View style={{ marginTop: "10%", height: 100, borderColor: "black", borderWidth: 1, borderRadius: 20 }}>

            </View>
            <View style={{marginTop:"20%",borderWidth:1, backgroundColor:"#007AFF", borderRadius:20, height:"15%", justifyContent:"center"}}>
                {<Button title="CONTINUE" color="#FFFFFF" onPress={() => navigation.navigate('Home')} />}
            </View>
        </View>
        </View>
    )

}