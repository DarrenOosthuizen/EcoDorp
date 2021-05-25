import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../../screens/MainScreens/HomeScreen";
import SettingScreen from "../../screens/MainScreens/SettingScreen";
import MonitorScreen from "../../screens/MainScreens/MonitorScreen";
import ManageScreen from "../../screens/MainScreens/ManageScreen";
import NotificationScreen from "../../screens/MainScreens/NotificationScreen";
import RoomLayoutScreen from "../../screens/MainScreens/RoomLayoutScreen";
import PredictionScreen from "../../screens/MainScreens/PredictionScreen";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const MonitorStack = createStackNavigator();
const ManageStack = createStackNavigator();
const RoomLayoutStack = createStackNavigator();
const PredictionStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home Page",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button
            name="notifications-outline"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              NotificationScreen;
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SettingsStack.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        title: "Settings",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </SettingsStack.Navigator>
);

const MonitorStackScreen = ({ navigation }) => (
  <MonitorStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MonitorStack.Screen
      name="Monitor"
      component={MonitorScreen}
      options={{
        title: "Monitor",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </MonitorStack.Navigator>
);

const ManageStackScreen = ({ navigation }) => (
  <ManageStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ManageStack.Screen
      name="Manage"
      component={ManageScreen}
      options={{
        title: "Manage Devices",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ManageStack.Navigator>
);

const RoomLayoutStackScreen = ({ navigation }) => (
  <RoomLayoutStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <RoomLayoutStack.Screen
      name="RoomLayout"
      component={RoomLayoutScreen}
      options={{
        title: "Room Layout",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </RoomLayoutStack.Navigator>
);

const PredictionStackScreen = ({ navigation }) => (
  <PredictionStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PredictionStack.Screen
      name="Prediction"
      component={PredictionScreen}
      options={{
        title: "Predictions",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </PredictionStack.Navigator>
);

const NotificationStackScreen = ({ navigation }) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        title: "Notifications",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.goBack();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </NotificationStack.Navigator>
);

export  {
  HomeStackScreen,
  ManageStackScreen,
  MonitorStackScreen,
  PredictionStackScreen,
  RoomLayoutStackScreen,
  SettingsStackScreen,
};
