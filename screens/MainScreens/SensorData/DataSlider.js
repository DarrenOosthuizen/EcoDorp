import React, { useState, useEffect } from "react";
import SensorData from "./SensorData/SensorData";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Dimensions
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createMaterialTopTabNavigator();

function SensorDataSlider(props) {
  return (
    <Tab.Navigator
      tabBarPosition={"bottom"}
      tabBarOptions={{
        activeTintColor: "#0D8735",
        inactiveTintColor: "#3A4234",
        scrollEnabled: true,
        pressColor: "#61B522",
        tabStyle: {
          width: Dimensions.get("window").width/3 ,
          
        },
        showIcon: true,
        indicatorStyle: {
          backgroundColor: "#0D8735",
          height: 3,
        },
        labelStyle: {
          fontSize: 15,
          color: "#0D8735",
        },
      }}
    >
        <Tab.Screen
          key="month"
          name="Month"
          children={() => <SensorData sensorID={props.sensorID} dataID ="Month" />}
          options={{
            
            tabBarLabel: "Month",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={"#0D8735"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          key="week"
          name="Week"
          children={() => <SensorData sensorID={props.sensorID} dataID="Week"/>}
          options={{
            tabBarLabel: "Week",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="calendar-week"
                color={"#0D8735"}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          key="day"
          name="Day"
          children={() => <SensorData sensorID={props.sensorID} dataID="Day" />}
          options={{
            tabBarLabel: "Day",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="calendar-today"
                color={"#0D8735"}
                size={20}
              />
            ),
          }}
        />


    </Tab.Navigator>
  );
}

export default SensorDataSlider;

const styles = StyleSheet.create({
  TabCon: {},
});
