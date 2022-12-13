import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import {
    fadedOrange,
    orange,
    primary,
    secondary,
    white,
} from '../../constants/colors';

const ScreenHeader = ({ title = 'title', isStack = false, navBack = () => {}, optionPress = () => {} }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', width: '100%' }} >
            {isStack ? <Ionicons name='chevron-back' size={30} color={'black'} onPress={navBack} /> : null}
            <Text style={styles.name}>{title}</Text>
            <Ionicons name='options' size={30} color={secondary} onPress={optionPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: primary,
    },
})

export default ScreenHeader;