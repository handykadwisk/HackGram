import { Button, View, Text} from "react-native";

function LikeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Like Screen</Text>
            {/* <Button title="Go to detail" onPress={() => navigation.navigate("Detail", {id: 1,})} /> */}
        </View>
    )
}

export default LikeScreen;