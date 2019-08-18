import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Picker,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Header from "../Common/Header";
import Icon from "react-native-vector-icons/Ionicons";
import DatePicker from "react-native-datepicker";

class AbsenceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
  }
  render() {
    return (
      <View>
        <ScrollView style={{ height: "90%" }}>
          <View
            style={{
              backgroundColor: "tomato",
              padding: 10,
              margin: 10,
              flexDirection: "row"
            }}
          >
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              }}
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
          <View
            style={{
              backgroundColor: "#5ee6e1",
              padding: 10,
              margin: 10,
              flexDirection: "row"
            }}
          >
            <Icon name="md-cog" size={30} />
            <Text style={{ color: "#000000", marginLeft: 10 }}>
              here is some dummy warning text .
            </Text>
          </View>
          <View
            style={{ borderTopWidth: 1, borderBottomWidth: 1, padding: 10 }}
          >
            <Text style={{ fontWeight: "bold" }}>From</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <View
              // style={{
              //   width: "35%",
              //   borderWidth: 1,
              //   justifyContent: "center",
              //   alignItems: "center",
              //   padding: 5,
              //   borderRadius: 3
              // }}
              >
                <DatePicker
                  style={{ width: 150 }}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: "absolute",
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={date => {
                    this.setState({ date: date });
                  }}
                />
              </View>
              {/* <Icon name="md-calendar" style={{ width: "10%" }} size={30} /> */}
              <DatePicker
                style={{ width: 150 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>
          {/*  */}
          <View
            style={{ borderTopWidth: 0, borderBottomWidth: 1, padding: 10 }}
          >
            <Text style={{ fontWeight: "bold" }}>To</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <View
                style={
                  {
                    // width: "35%",
                    // borderWidth: 1,
                    // justifyContent: "center",
                    // alignItems: "center"
                    // padding: 5,
                    // borderRadius: 3
                  }
                }
              >
                <DatePicker
                  style={{ width: 150 }}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: "absolute",
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={date => {
                    this.setState({ date: date });
                  }}
                />
              </View>

              <DatePicker
                style={{ width: 150 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>
          {/*  */}
          <View
            style={{ borderTopWidth: 0, borderBottomWidth: 1, paddingLeft: 10 }}
          >
            <Text style={{ fontWeight: "bold" }}>Reason</Text>
            <View style={{ alignItems: "center" }}>
              <Picker style={{ width: "80%", borderWidth: 1 }}>
                <Picker.Item label="Reason" value="some reason " />
                <Picker.Item label="tuesday" value="tuesday" />
                <Picker.Item label="Wedensday" value="Wedensday" />
                <Picker.Item label="thursday" value="thursday" />
                <Picker.Item label="Friday" value="Friday" />
              </Picker>
            </View>
          </View>
          {/*  */}
          <View
            style={{ borderTopWidth: 0, borderBottomWidth: 1, paddingLeft: 10 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Token:</Text>
              <Text>0.00 Days</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Remaning:</Text>
              <Text>44.00 Days</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Note:</Text>
              {/* <Text>0.00 Days</Text> */}
            </View>
            <View
              style={{
                marginTop: 5,
                width: "90%",
                height: 80,
                borderRadius: 10,
                backgroundColor: "#f3f3f3",
                alignSelf: "center",
                marginBottom: 5
              }}
            />
          </View>
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
            <Text style={{ color: "white" }}>Daily Detail</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default AbsenceDetail;
