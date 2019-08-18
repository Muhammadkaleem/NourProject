import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../Common/Header";
import ProfileCard from "../Common/ProfileCard";
import { ScrollView } from "react-native-gesture-handler";

class AbsenceTeamList extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 58,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#f3f3f3",
            alignItems: "center",
            // marginLeft: 10
            flexDirection: "row"
          }}
        >
          <Icon
            name="md-menu"
            size={30}
            style={{ paddingLeft: 10, paddingRight: 20 }}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
            Activity Feed
          </Text>
        </View>
        <TextInput
          style={{
            backgroundColor: "white",
            width: "90%",
            alignSelf: "center",
            borderColor: "#f3f3f3",
            borderWidth: 1,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 20,
            height: 40,
            justifyContent: "center"
          }}
          placeholder="Search here"
        />
        <ScrollView>
          <ProfileCard
            name="Nour Al Jenin"
            status="Leave for brother weddigns"
            source={{
              uri:
                "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
          />
          <ProfileCard
            name="Muhammad Ali "
            status="Leave for unKnown reason"
            source={{
              uri:
                "https://www.google.com/url?sa=i&source=images&cd=&ved=&url=https%3A%2F%2Fwww.pinterest.com%2FCuteDp%2Fcute-boys-pakistan-dp-pictures-photos%2F&psig=AOvVaw2ggf46x_CZJjz538W8i9kq&ust=1566219996305469"
            }}
          />
          <ProfileCard
            name="Awais Ahmed"
            status="Leave for nothingss"
            source={{
              uri:
                "http://www.himalayanbuzz.com/wp-content/uploads/2016/10/Shubh-Chandra-Cover.jpg"
            }}
          />
          <ProfileCard
            name="Nour Al Jenin"
            status="Leave for brother weddigns"
            source={{
              uri:
                "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
          />
          <ProfileCard
            name="Muhammad Ali "
            status="Leave for unKnown reason"
            source={{
              uri:
                "https://www.google.com/url?sa=i&source=images&cd=&ved=&url=https%3A%2F%2Fwww.pinterest.com%2FCuteDp%2Fcute-boys-pakistan-dp-pictures-photos%2F&psig=AOvVaw2ggf46x_CZJjz538W8i9kq&ust=1566219996305469"
            }}
          />
          <ProfileCard
            name="Awais Ahmed"
            status="Leave for nothingss"
            source={{
              uri:
                "http://www.himalayanbuzz.com/wp-content/uploads/2016/10/Shubh-Chandra-Cover.jpg"
            }}
          />
          <ProfileCard
            name="Nour Al Jenin"
            status="Leave for brother weddigns"
            source={{
              uri:
                "http://www.himalayanbuzz.com/wp-content/uploads/2016/10/Shubh-Chandra-Cover.jpg"
            }}
          />
          <ProfileCard
            name="Muhammad Ali "
            status="Leave for unKnown reason"
            source={{
              uri:
                "http://www.himalayanbuzz.com/wp-content/uploads/2016/10/Shubh-Chandra-Cover.jpg"
            }}
          />
          <ProfileCard
            name="Awais Ahmed"
            status="Leave for nothingss"
            source={{
              uri:
                "http://www.himalayanbuzz.com/wp-content/uploads/2016/10/Shubh-Chandra-Cover.jpg"
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default AbsenceTeamList;
