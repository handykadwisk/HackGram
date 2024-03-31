import * as React from "react";
import  StackNavigator  from "./navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { useState } from "react";
import client from "./config/apollo";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <GestureHandlerRootView>
    <ApolloProvider client={client}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </ApolloProvider>
    </GestureHandlerRootView>
  )
}
export default App;