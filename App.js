import React, { Component } from "react";
import { View, Text } from "react-native";
import Absence from "./src/Screens/Absence";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "./src/Screens/Profile";
console.disableYellowBox = true;
class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Absence: {
      screen: Absence
    },
    Profile: {
      screen: Profile
    }
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default App;
