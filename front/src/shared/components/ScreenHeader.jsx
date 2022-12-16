import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import {
    fadedOrange,
    orange,
    primary,
    secondary,
    white,
} from '../../constants/colors';

const ScreenHeader = ({ title = 'title', isStack = false, navBack = () => { }, optionPress = () => { } }) => {
    return (
        <View style={styles.container} >
            {isStack ? <Ionicons name='chevron-back' size={30} color={'black'} onPress={navBack} /> : null}
            <Text style={styles.name}>{title}</Text>
            <Ionicons name='options' size={25} color={secondary} onPress={optionPress} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 50,
        paddingTop: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        color: primary,
    },
    icon: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#BFC0C0',
        padding: 10,
        textAlign: 'center',
    },
})


export default ScreenHeader;