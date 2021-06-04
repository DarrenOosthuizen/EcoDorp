import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import OutdoorDevice from "./Devices/OutdoorDevice";
import IndoorDevice from "./Devices/IndoorDevice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ManageScreen = () => {
  const [result, setResult] = useState([]); 
  var values = [];
  var userToken;
  var res = []
  useEffect( () => {
    const dosomething = async function() {
      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log(userToken);
        res = await fetch("http://flystudio.co.za:5000/sensors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: userToken,
        },
        
      })
      res = await res.json();
      setResult(res);
      } catch (e) {
        //console.log(e); 
      }
      
    }
    dosomething();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {result.map((sensor) => (
          sensor.device_name == "b790" ? (<OutdoorDevice
            key={sensor.id}
            text={sensor.device_name}
            heading={sensor.name}
            reading= {2}
          />) : (<IndoorDevice
            key={sensor.id}
            text={sensor.device_name}
            heading={sensor.name}
            reading= {2}
          />)
          
        ))}
      </View>
    </ScrollView>
  );
};

export default ManageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
