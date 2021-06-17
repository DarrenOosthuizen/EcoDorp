import React from "react";
import Reading from "../DataScreen";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
      tabBarPosition={"bottom"}    
      tabBarOptions={{
        activeTintColor : "#0D8735" ,
        inactiveTintColor : "#3A4234",
        scrollEnabled: true,
        pressColor: '#61B522',
        tabStyle: {
          width: 150,
          borderLeftWidth: 1,
          borderLeftColor: "#d7d8d8"
        },
        showIcon: true,
        indicatorStyle :{
          backgroundColor : "#0D8735",
          height: 3,
        },
        labelStyle: { 
          fontSize: 15 ,
          color : "#0D8735",
        },
      }}>
      
      <Tab.Screen
        
        name="Temperature"
        component={Reading}
        options={{
          tabBarLabel: "Temperature",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="thermometer" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Humadity"
        component={Reading}
        options={{
          tabBarLabel: "Humadity",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="water" color={'#0D8735'}size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AirPressure"
        component={Reading}
        options={{
          tabBarLabel: "Air Pressure",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="speedometer" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CO2"
        component={Reading}
        options={{
          tabBarLabel: "CO2",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cloud" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TVOC"
        component={Reading}
        options={{
          tabBarLabel: "TVOC",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="leaf" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PM"
        component={Reading}
        options={{
          tabBarLabel: "PM2.5",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="test-tube" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CO"
        component={Reading}
        options={{
          tabBarLabel: "CO",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="hubspot" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NO2"
        component={Reading}
        options={{
          tabBarLabel: "NO2",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="molecule" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ozone"
        component={Reading}
        options={{
          tabBarLabel: "Ozone",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="earth" color={'#0D8735'}size={26} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

export default MyTabs;

const styles = StyleSheet.create({
  TabCon: {
    
  },
});
