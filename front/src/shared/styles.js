import {StyleSheet} from "react-native"



export const layout = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    circle : (size)=> ({
        width: size,
        height: size,
        borderRadius: size,
    })
})