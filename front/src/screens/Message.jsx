import { View, Text } from "react-native";

export default function Message({left, content}) {
    return (
        <View style={{width: 60+'%', borderRadius:5, backgroundColor: '#BFC0C0', marginLeft: left+'%', marginBottom: 5, padding: 7}}>
            <Text style={{lineHeight: 25}}>{content}</Text>
        </View>
    )
}