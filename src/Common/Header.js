import React from "react";
import { View, Text } from "react-native";
class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 40,
          width: "100%",
          backgroundColor: "#f3f3f3",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{this.props.HeaderText}</Text>
      </View>
    );
  }
}
export default Header;
