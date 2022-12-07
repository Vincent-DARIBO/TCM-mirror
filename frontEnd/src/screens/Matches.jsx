import * as React from 'react';
import { FlatList, StyleSheet, Button, Text, View, ScrollView } from 'react-native';

const Mathces = ({navigation}) => {
    return (
        <View>
            <Text>Utilisateurs proches de chez vous partageant les mêmes centres d’intérêts</Text>
            <FlatList>
                <Text>test</Text>
            </FlatList>
        </View>
    );
}

export default Mathces;