import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DayDetail from "../Common/DayDetail";

class Holiday extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View
            style={{
              backgroundColor: "tomato",
              padding: 10,
              margin: 10,
              flexDirection: "row"
            }}
          >
            <Image
              style={{
                width: 90,
                height: 100,
                backgroundColor: "#f2f2f2",
                borderRadius: 15
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "white" }}>Nour Al jenin</Text>
              <Text style={{ color: "white" }}>Nour Al jenin</Text>
            </View>
          </View>

          {/*  */}
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          <DayDetail
            DayHeader="Friday 30/12/2019"
            Time1="5.00 Hours"
            Time2="8.00Hours"
          />
          {/*  */}
          <TouchableOpacity
            style={{
              width: "90%",
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "tomato",
              marginTop: 5,
              alignSelf: "center"
            }}
            onPress={() => this.props.navigation.navigate("Holiday")}
          >
            <Text style={{ color: "white" }}>Go Back</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Holiday;
