import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import BottomTab from "./SensorData/BottomNavigatorData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Host } from "../env";

const DataScreen = () => {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      userToken = await AsyncStorage.getItem("userToken");
    } catch (e) {}

    let result = await fetch(Host + "/sensors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: userToken,
      },
    });
    result = await result.json();
    if (result.length == 0) {
      setShouldRender(false);
    } else {
      setShouldRender(true);
    }
  }

  function RenderDisplay() {
    if (shouldRender == false) {
      return (
        <View style={styles.cont}>
          <Text style={styles.texthead}>No sensors linked to User</Text>
          <Text style={styles.textpar}>Please add Sensor under Manage Devices Tab</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
      <BottomTab />
    </View>
      );
    }
  }


  return (
    <View>{RenderDisplay()}</View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  cont: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems : 'center'
  },
  texthead : {
    fontSize : 28
  },
  textpar : {
    fontSize : 18
  },
});
