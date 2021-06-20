import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Readings from "../Readings/Reading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Host } from "../../env";

const Monitor = (props) => {
  var userToken;
  let arrSet = [];
  const [sensorData, setSensorData] = useState([
    {
      date: "2021-06-07T09:39:57.057Z",
      temp: 0,
      hum: 0,
      pm: 0,
      tvoc: 0,
      co2: 0,
      co: 0,
      air: 0,
      ozone: 0,
      no2: 0,
      virus: 0,
    },
  ]);

  useEffect(() => {
    GetSensorData();
  }, []);

  const GetSensorData = async function () {
    try {
      //Getting UserToken to be able to make requests to API
      userToken = await AsyncStorage.getItem("userToken");

      //Getting Sensor Data from API and Populate array
      const mapLoop = async (_) => {
        const senObj = await GetSensorReading(props.sensorID);
        arrSet.push(senObj);
        setSensorData(arrSet);
      };
      mapLoop();

      async function GetSensorReading(value) {
        try {
          let resultsen = await fetch(
            Host + "/sensors/" + value + "/data/last",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: userToken,
              },
            }
          );
          resultsen = await resultsen.json();
          return resultsen;
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeSensorReading = () => {
    return <Readings {...sensorData[0]} />;
  };

  return <View style={styles.container}>{changeSensorReading()}</View>;
};

export default Monitor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
