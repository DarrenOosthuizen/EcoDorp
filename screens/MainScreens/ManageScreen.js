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
  var sensorIDs = [];
  useEffect(() => {
    let isMounted = true;
    dosomething().then(data => {if(isMounted) console.log("sensors mounted") ;
  })
    return () => {isMounted = false};
  }, []);

  const dosomething = async function () {
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
      //Getting Sensors results
      const getData = async () => {
      res.map(mapitem=> 
        {
        sensorIDs.push(mapitem.id);
        });
      }
      getData();
      console.log(sensorIDs),

      res.map((mapitem) => mapitem['reading'] = 6)
      setResult(res);
    } catch (e) {
      //console.log(e);
    }
  };
  
 
  setInterval(dosomething,30000);
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
