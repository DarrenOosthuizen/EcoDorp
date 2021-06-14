import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "../../screens/MainScreens/HomeScreen";
import SettingScreen from "../../screens/MainScreens/SettingScreen";
import MonitorScreen from "../../screens/MainScreens/MonitorScreen";
import ManageScreen from "../../screens/MainScreens/ManageScreen";
import NotificationScreen from "../../screens/MainScreens/NotificationScreen";
import RoomLayoutScreen from "../../screens/MainScreens/RoomLayoutScreen";
import PredictionScreen from "../../screens/MainScreens/PredictionScreen";

const HomeStack = createStackNavigator();


const COLORS = {
  Green: "#0D8735",
};

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: COLORS.Green },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="HomeSec"
      component={HomeScreen}
      options={{
        title: "Home Page",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button
            name="notifications-outline"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.navigate("Notification");            
            }}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        title: "Notifications",
        headerLeft: () => (
          <Icon.Button
            name="chevron-back-outline"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.navigate("HomeSec");
            }}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        title: "Settings",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Manage"
      component={ManageScreen}
      options={{
        title: "Manage Devices",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Prediction"
      component={PredictionScreen}
      options={{
        title: "Predictions",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="RoomLayout"
      component={RoomLayoutScreen}
      options={{
        title: "Room Layout",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Monitor"
      component={MonitorScreen}
      options={{
        title: "Monitor Results",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={COLORS.Green}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

export { HomeStackScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nottext: {
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    marginRight: "20%",
    justifyContent: "center",
  },
});
