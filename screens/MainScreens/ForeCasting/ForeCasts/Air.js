import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BezierLineChart from "../../../Diagrams/BarChart";
import { Host } from "../../../env";

const ForeCast = (props) => {
  var userToken;
  var res = [];
  var nam = [];
  var SensorID = [];

  const [foreCastAc, SetforeCast] = useState(false);

  const [foreCastLabel, setforeCastLabel] = useState([0]);
  const [foreCastData, setforeCastData] = useState([0]);

  var forecastpred = [];
  var forecasthead = [];

  useEffect(() => {
    GetSensorForeCast();
  }, []);

  const GetSensorForeCast = async function () {
    try {
      //Setting var to null
      nam = [];
      SensorID = [];

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

      var promise = GetFC();

      function GetFC() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("air");
          forecastpred = [];
          forecasthead = [];
          if (senObj.message != "Something went wrong") {
            for (let y = 0; y < 8; y++) {
              forecastpred.push(senObj.forecasts[y].forecast);
              let timestr = senObj.forecasts[y].time;
              let t = timestr.search("T");
              let timealone = timestr.substr(t + 1, timestr.length);
              forecasthead.push(timealone);
            }
          }
          resolve({ forecastpred, forecasthead });
        });
      }

      promise.then((val1) => {
        setforeCastData(val1.forecastpred);
        setforeCastLabel(val1.forecasthead);
        SetforeCast(true);
      });

      async function GetSensorReading(value) {
        try {
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            Host + "/sensors/" + props.sensorID + "/forecast/" + value,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
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

  if (foreCastAc == false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={70} color="#2DAF33" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Displaying Temperature */}
      <Text>AIR</Text>
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData}
      />
    </View>
  );
};

export default ForeCast;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
