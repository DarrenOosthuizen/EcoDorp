import React from "react";
import Reading from "../DataScreen";
import ForeCast from './ForeCastScreen' 
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

function ForeCastTab() {
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
        children={()=><ForeCast forecast={"temperature"}/>}
        options={{
          tabBarLabel: "Temperature",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="thermometer" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Humidity"
        children={()=><ForeCast forecast={"humidity"}/>}
        options={{
          tabBarLabel: "Humidity",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="water" color={'#0D8735'}size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AirPressure"
        children={()=><ForeCast forecast={"air"}/>}
        options={{
          tabBarLabel: "Air Pressure",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="speedometer" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CO2"
        children={()=><ForeCast forecast={"co2"}/>}
        options={{
          tabBarLabel: "CO2",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cloud" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TVOC"
        children={()=><ForeCast forecast={"tvoc"}/>}
        options={{
          tabBarLabel: "TVOC",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="leaf" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PM"
        children={()=><ForeCast forecast={"pm"}/>}
        options={{
          tabBarLabel: "PM2.5",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="test-tube" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CO"
        children={()=><ForeCast forecast={"co"}/>}
        options={{
          tabBarLabel: "CO",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="hubspot" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NO2"
        children={()=><ForeCast forecast={"no2"}/>}
        options={{
          tabBarLabel: "NO2",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="molecule" color={'#0D8735'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ozone"
        children={()=><ForeCast forecast={"ozone"}/>}
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

export default ForeCastTab;

const styles = StyleSheet.create({
  TabCon: {
    
  },
});
