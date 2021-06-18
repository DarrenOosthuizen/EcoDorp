import React, { useState, useEffect } from "react";
import Reading from "../DataScreen";
import ForeCast from "./ForeCastScreen";
import NewForecast from "./ForeCasts/ForeCast";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Host } from "../../env";

const Tab = createMaterialTopTabNavigator();

function ForeCastTab() {
  var userToken;
  var res = [];
  var nam = [];

  const [sensorItems, setSensorItems] = useState([
    { label: "Default", value: 0 },
  ]);

  useEffect(() => {
    GetSensorForeCast();
  }, []);

  const GetSensorForeCast = async function () {
    try {
      //Setting var to null
      console.log("starting");
      nam = [];

      //Getting UserToken to be able to make requests to API
      userToken = await AsyncStorage.getItem("userToken");

      //Getting Sensors Name Type and ID
      res = await fetch(Host + "/sensors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: userToken,
        },
      });
      res = await res.json();

      //Setting Drop Down List

      res.forEach((element) => {
        //Populating array with Sensors ID
        let obj = {
          label: element.name + " " + "(" + element.device_name + ")",
          value: element.id,
        };

        nam.push(obj);
        setSensorItems(nam);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Tab.Navigator
      tabBarPosition={"bottom"}
      tabBarOptions={{
        activeTintColor: "#0D8735",
        inactiveTintColor: "#3A4234",
        scrollEnabled: true,
        pressColor: "#61B522",
        tabStyle: {
          width: 150,
          borderLeftWidth: 1,
          borderLeftColor: "#d7d8d8",
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
      {sensorItems.map((element) => (
        <Tab.Screen
          key={element.value}
          name={element.label}
          children={() => <NewForecast sensorID={element.value} />}
          options={{
            tabBarLabel: element.label,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="thermometer"
                color={"#0D8735"}
                size={26}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default ForeCastTab;

const styles = StyleSheet.create({
  TabCon: {},
});
