import * as React from "react";


import  StackNavigator  from "./navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
export default App;