import React, { Component } from "react";
import { View, Text } from "react-native";
import Absence from "./src/Screens/Absence";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Profile from "./src/Screens/Profile";
import AbsenceDetail from "./src/Screens/AbsenceDetail";
import Holiday from "./src/Screens/Holiday";
import Setting from "./src/Screens/Setting";
import AbsenceTeamList from "./src/Screens/AbsenceTeamList";
import Icon from "react-native-vector-icons/Ionicons";
console.disableYellowBox = true;
class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  Absence: {
    screen: Absence
  },
  AbsenceDetail: {
    screen: AbsenceDetail
  },
  Holiday: {
    screen: Holiday
  }
});
const appDrawerNavigator = createDrawerNavigator(
  {
    Absence: {
      screen: AppStackNavigator,
      navigationOptions: {
        darwerLable: "pakistan",
        drawerIcon: <Icon name="md-home" size={30} style={{ color: "black" }} />
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        darwerLable: "pakistan",
        drawerIcon: <Icon name="md-cog" size={30} style={{ color: "black" }} />
      }
    },
    AbsenceTeamList: {
      screen: AbsenceTeamList,
      navigationOptions: {
        darwerLable: "pakistan",
        drawerIcon: <Icon name="md-list" size={30} style={{ color: "black" }} />
      }
    }
  },

  {
    // hideStatusBar: true,
    drawerBackgroundColor: "#ddd",
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "tomato"
    }
  }
);

const AppContainer = createAppContainer(appDrawerNavigator);

export default App;
