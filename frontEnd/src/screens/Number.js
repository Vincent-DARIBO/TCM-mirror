import React from 'react';
import { Button, Text, View } from 'react-native';


export default function Number({ navigation }) {

    return (
        <View style={{ marginLeft: "10%", marginRight: "10%" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: "20%" }}>Numéro de téléphone</Text>
            <Text style={{ marginTop: "10%" }}>Renseignez votre numéro de téléphone. Vous recevrez un code à 4 chiffres pour valider votre compte</Text>

            <View style={{ marginTop: "10%", height: 100, borderColor: "black", borderWidth: 1, borderRadius: 20 }}>

            </View>
            <View style={{marginTop:"20%",borderWidth:1, backgroundColor:"#007AFF", borderRadius:20, height:"15%", justifyContent:"center"}}>
                {<Button title="CONTINUE" color="#FFFFFF" onPress={() => navigation.navigate('Home')} />}
            </View>
        </View>
    )

}