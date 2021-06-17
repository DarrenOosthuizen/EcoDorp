import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  ScrollView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import BezierLineChart from "../../Diagrams/BarChart";
import LineChart from "../../Diagrams/LineChart";
import BarChart from "../../Diagrams/BarChart";
import PieChart from "../../Diagrams/PieChart";
import { Host } from "../../env";

const ForeCast = (props) => {
  var userToken;
  var res = [];
  var nam = [];
  var SensorID = [];

  const [foreCastAc, SetforeCast] = useState(false);

  const [sensorItems, setSensorItems] = useState([]);
  const [foreCastLabel, setforeCastLabel] = useState([0]);
  const [foreCastData, setforeCastData] = useState([0]);

  var forecastpred = [];
  var forecasthead = [];

  var forecast = [
    "temperature",
    "humidity",
    "air",
    "co2",
    "no2",
    "ozone",
    "pm",
    "tvoc",
  ];

  useEffect(() => {
    GetSensorForeCast();
  }, []);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

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

      //Setting Drop Down List
      let valuese = 0;
      res.forEach((element) => {
        //Populating array with Sensors ID
        SensorID.push(element.id);
        let obj = {
          label: element.name + " " + "(" + element.device_name + ")",
          value: valuese,
        };
        nam.push(obj);
        setSensorItems(nam);
        valuese++;
      });

      var promise = GetTemp();
      //var forecast = ["temperature","humidity","air","co2","no2","ozone","pm","tvoc"]
      function GetTemp() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("temperature");
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
      function GetHum() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("humidity");
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
      function GetAir() {
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
      function GetCO2() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("co2");
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
      function GetNO2() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("no2");
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
      function GetOzone() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("ozone");
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
      function GetPM() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("pm");
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
      function GetTVOC() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading("tvoc");
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
      //GetTemp().then(() => {run function and return promise}).then(() => {run function and return promise})

      promise
        .then((val1) => {
          setforeCastData(val1.forecastpred);
          setforeCastLabel(val1.forecasthead);
          return GetHum();
        })
        .then((val2) => {
          setforeCastData((state) => [[...state], [...val2.forecastpred]]);
          return GetAir();
        })
        .then((val3) => {
          setforeCastData((state) => [...state, [...val3.forecastpred]]);
          return GetCO2();
        })
        .then((val4) => {
          setforeCastData((state) => [...state, [...val4.forecastpred]]);
          return GetNO2();
        })
        .then((val5) => {
          setforeCastData((state) => [...state, [...val5.forecastpred]]);
          return GetOzone();
        })
        .then((val6) => {
          setforeCastData((state) => [...state, [...val6.forecastpred]]);
          return GetPM();
        })
        .then((val7) => {
          setforeCastData((state) => [...state, [...val7.forecastpred]]);
          return GetPM();
        })
        .then((val8) => {
          setforeCastData((state) => [...state, [...val8.forecastpred]]);
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
      <ScrollView>
      {/* Displaying Temperature */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[0]}
      />

      {/* Displaying Humidity */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[1]}
      />

      {/* Displaying Air */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[2]}
      />

      {/* Displaying CO2 */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[3]}
      />

      {/* Displaying NO2 */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[4]}
      />

      {/* Displaying Ozone */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[5]}
      />

      {/* Displaying PM */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[6]}
      />

      {/* Displaying TVOC */}
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel}
        datavalue={foreCastData[7]}
      />
      </ScrollView>
    </View>
  );
};

export default ForeCast;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  dropdown: {
    marginBottom: "0%",
    borderRadius: 0,
    borderColor: "#fff",
    fontSize: 20,
  },
});
