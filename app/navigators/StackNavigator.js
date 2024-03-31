import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import Registration from "../screens/Registration";
import ProfileScreen from "../screens/ProfileScreen";
import { useContext, useState } from "react";
import  AuthContext  from "../context/AuthContext";
import * as SecureStore from 'expo-secure-store'


const Stack = createNativeStackNavigator();

  
export default function StackNavigator() {
  const [isSignedIn, setIsSignedIn ] = useState(false);

  (async () => {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    if (accessToken) {
      setIsSignedIn(true);
    }
  })();

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
    <Stack.Navigator>
      {isSignedIn ? (
        <>
        <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={ProfileScreen} />
      </>
      ) : (
        <>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Regis" component={Registration} options={{ headerShown: false }} />
      </>
      )}
    </Stack.Navigator>
    </AuthContext.Provider>
  );
}

// export default StackNavigator;
/*
-Login
-Home
    -Home Screen
    -Profile Screen
-Detail

*/
