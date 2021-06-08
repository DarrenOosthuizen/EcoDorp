import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import OutdoorDevice from "./Devices/OutdoorDevice";
import IndoorDevice from "./Devices/IndoorDevice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ManageScreen = () => {
  const [result, setResult] = useState([]);
  var userToken;
  var res = [];

  useEffect(() => {
    GetSensorData();
  }, []);


  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  const getSensorObjects = () => {
    return sleep(50).then(v => res)
  }
  

  const GetSensorData = async function () {
    try {
      userToken = await AsyncStorage.getItem("userToken");

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
    

      const mapLoop = async _ => {
        console.log('Start')
        const promises = res.map(async element => {
          const senObj = await getSensorObjects() ;
          const senRead = await GetSensorReading(element.id);

          element["reading"] = senRead
          return senObj
        })
        const senObj = await Promise.all(promises)
        console.log(senObj[0])
        console.log('End')
        setResult(senObj[0])
      }
      mapLoop()

      async function GetSensorReading(value) {
        try {
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            "http://flystudio.co.za:5000/sensors/" + value + "/data/last",
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
          let senReading = amountvalues(resultsen);
          console.log(senReading);
          return sleep(50).then(v => senReading)
        } catch (e) {}
      }
      
      //Method to check amount of values which are out
      const amountvalues = (readingObject) => {
        let Reading = 0;

        //Set Optimal 10 to 40
        if (readingObject.temp >= 10 && readingObject.temp <= 40) {
        } else {
          Reading++;
        }

        //Set Optimal to 30-50
        if (readingObject.hum >= 30 && readingObject.hum <= 50) {
        } else {
          Reading++;
        }

        //Set Optimal to 900-1026
        if (readingObject.air >= 900 && readingObject.air <= 1026) {
        } else {
          Reading++;
        }

        //Set Optimal to 400-1000

        if (readingObject.co2 >= 400 && readingObject.co2 <= 1000) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-650
        if (readingObject.tvoc >= 0 && readingObject.tvoc <= 650) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-12
        if (readingObject.pm >= 0 && readingObject.pm <= 12) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-25
        if (readingObject.co >= 0 && readingObject.co <= 9) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-80
        if (readingObject.no2 >= 0 && readingObject.no2 <= 80) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-70
        if (readingObject.ozone >= 0 && readingObject.ozone <= 70) {
        } else {
          Reading++;
        }
        return Reading;
      };
    } catch (e) {}
  };

  //setInterval(GetSensorData, 10000);
  return (
    <ScrollView>
      <View style={styles.container}>
        {result.map((sensor) =>
          sensor.device_name == "b790" ? (
            <OutdoorDevice
              key={sensor.id}
              text={sensor.device_name}
              heading={sensor.name}
              reading={sensor.reading}
            />
          ) : (
            <IndoorDevice
              key={sensor.id}
              text={sensor.device_name}
              heading={sensor.name}
              reading={sensor.reading}
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
