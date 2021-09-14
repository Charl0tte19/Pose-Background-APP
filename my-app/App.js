import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firstpage from "./firstpage";
import mainpage from "./mainpage";
import thirdpage from "./thirdpage";
import forthpage from "./forthpage";
import fifthpage from "./fifthpage";
import sixthpage from "./sixthpage";
import sevenpage from "./sevenpage";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator mode="modal" headerMode="none">
          <Stack.Screen name="firstpage" component={firstpage} />
          <Stack.Screen name="mainpage" component={mainpage} />
          <Stack.Screen name="thirdpage" component={thirdpage} />
          <Stack.Screen name="forthpage" component={forthpage} />
          <Stack.Screen name="fifthpage" component={fifthpage} />
          <Stack.Screen name="sixthpage" component={sixthpage} />
          <Stack.Screen name="sevenpage" component={sevenpage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}