import React, { Component } from "react";
import { View, Text, LayoutAnimation, UIManager, platform } from "react-native";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Icon from "react-native-vector-icons/Ionicons";

class Absence extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  onButtonPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.setState.expanded });
  };
  onButtonShow = () => {
    if (this.state.expanded === false) {
      return (
        <View
          style={{
            borderWidth: 1,
            height: 30,
            width: 30,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name="md-add" size={29} onPress={this.onButtonPress} />
        </View>
      );
    } else {
      return (
        <View
          style={{
            borderWidth: 1,
            height: 30,
            width: 30,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name="md-menu" size={29} onPress={this.onButtonPress} />
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <Header HeaderText="Absence Detail" />
        <View
          style={{
            width: "90%",
            borderWidth: 0,
            alignSelf: "center",
            marginTop: 10
          }}
        >
          <Header HeaderText="New Absence Request " />
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <View
              style={{ borderWidth: 1, width: "30%", borderColor: "#f2f2f2" }}
            >
              <Icon name="md-calendar" size={29} style={{ marginLeft: 30 }} />
            </View>
            <View
              style={{
                borderWidth: 1,
                width: " 70%",
                borderColor: "#f2f2f2",
                borderLeftColor: "red",
                borderLeftWidth: 0,
                marginLeft: 5,
                marginTop: 5
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Duration: </Text>
                <Text style={{ color: "red" }}>12/01/2018</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>FROM: </Text>
                <Text>HEART, JENNIFER</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>EMPLOYEE: </Text>
                <Text>HEART, JENNIFER</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>STATUS: </Text>
                <Text>PENDING</Text>
              </View>

              {this.onButtonShow()}
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Duration: </Text>
                <Text>12/01/2018</Text>
              </View>
              {/* //// */}

              <View
                style={{
                  height: this.state.expanded ? null : 0,
                  overflow: "hidden",
                  marginTop: 20,
                  marginBottom: 20
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>From: </Text>
                  <Text>12/01/2018</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>To: </Text>
                  <Text>12/01/2018</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>Absence Type: </Text>
                  <Text>Holliday</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>Entitlement: </Text>
                  <Text>20.0 days</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>Token: </Text>
                  <Text>2.00 Days</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>Remaning: </Text>
                  <Text>18.00 Days</Text>
                </View>
              </View>

              {/* ////// */}

              {/* // */}
            </View>
            {/* // */}

            {/*  */}
          </View>
        </View>

        <Footer onPress={() => this.props.navigation.navigate("Profile")} />
      </View>
    );
  }
}

export default Absence;
