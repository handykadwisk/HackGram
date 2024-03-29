import { Button, View, Text} from "react-native";

function SearchScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Search Screen</Text>
            <Button title="Go to detail" onPress={() => navigation.navigate("Detail", {id: 1,})} />
        </View>
    )
}

export default SearchScreen;