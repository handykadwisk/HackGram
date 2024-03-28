import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
} 

export default StackNavigator;
/*
-Login
-Home
    -Home Screen
    -Profile Screen
-Detail

*/
