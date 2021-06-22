import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView,Image } from "react-native";
import BottomNav from "./Monitor/BottomNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Host } from "../env";
import RobotImage from "../../assets/Robot.png"

const MonitorScreen = (props) => {
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
          <Text style={styles.texthead}>OOPS</Text>
          <Text style={styles.textsubhead}>SENSOR NOT DETECTED</Text>
          <Image source={RobotImage}/>
          <Text style={styles.textlabel}>LOOKS LIKE YOU DONT HAVE ANY SENSORS</Text>
          <Text style={styles.textpar}>Please add Sensor under Manage Devices Tab</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <BottomNav />
        </View>
      );
    }
  }

  return <View>{RenderDisplay()}</View>;
};

export default MonitorScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  cont: {
    height: "100%",
    width: "100%",
    textAlign : "center",
    backgroundColor : "#fff",
    justifyContent: 'center',

  },
  texthead : {
    fontSize : 70,
    fontWeight : "bold",
    alignSelf  : 'center',
    color : '#0D8735'
    
  },
  textsubhead : {
    fontSize : 25,
    fontWeight : "bold",
    alignSelf  : 'center',
    color : '#3A4234'
  },
  textpar : {
    fontSize : 15,
    alignSelf  : 'center',
    position : "absolute",
    bottom : 10,
    color : '#0D8735'
    
    
  },
  textlabel : {
    fontSize : 17,
    alignSelf  : 'center',
    fontWeight : "bold",
    color : '#61B522',
  },
  
});
