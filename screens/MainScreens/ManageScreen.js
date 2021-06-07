import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import OutdoorDevice from "./Devices/OutdoorDevice";
import IndoorDevice from "./Devices/IndoorDevice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ManageScreen = () => {
  const [result, setResult] = useState([]);
  var sensorData = [];
  var userToken;
  var res = [];
  var sen = [];
  var sensorIDs = [];

  useEffect(() => {
    console.log("starting Manage useEffect")
    GetSensorData();
    console.log("ending Manage useEffect")
  }, []);

  const GetSensorData = async function () {
    try {
      userToken = await AsyncStorage.getItem("userToken");
      console.log(userToken);

      //Getting Sensors Name Type and ID
      res = await fetch("http://flystudio.co.za:5000/sensors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: userToken,
        },
      });
      res = await res.json();
      sensorIDs = [];

      //Getting Sensors results and pushing to sen array
        res.map(async(mapitem) => {
          sensorIDs.push(mapitem.id);
          let senres = await fetch(
            "http://flystudio.co.za:5000/sensors/" + mapitem.id + "/data/last",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: userToken,
              },
            }
          );
          senres = await senres.json();
          
          sen.push(senres)
          console.log(sen);
        });
      
        //Method to check amount of values which are out
        const amountvalues = () =>
        {
          
        }

      //Running Methods
      
      res.map((mapitem) => (mapitem["reading"] = 6));
      setResult(res);
    } catch (e) {}
  };

  //setInterval(GetSensorData, 30000);
  return (
    <ScrollView>
      <View style={styles.container}>
        {result.map((sensor) =>
          sensor.device_name == "b790" ? (
            <OutdoorDevice
              key={sensor.id}
              text={sensor.device_name}
              heading={sensor.name}
              reading={0}
            />
          ) : (
            <IndoorDevice
              key={sensor.id}
              text={sensor.device_name}
              heading={sensor.name}
              reading={2}
            />
          )
        )}
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
