import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import BezierLineChart from "../../Diagrams/BarChart";
import LineChart from "../../Diagrams/LineChart";
import BarChart from "../../Diagrams/BarChart";
import PieChart from "../../Diagrams/PieChart";
import {Host} from "../../env"

const ForeCast = (props) => {
  var userToken;
  var res = [];
  var nam = [];
  var SensorID = [];


  const [foreCast, SetforeCast] = useState(false);
  const [placeholdervalue, setplaceholdevalue] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);


  const [sensorItems, setSensorItems] = useState([]);
  const [foreCastLabel, setforeCastLabel] = useState([]);
  const [foreCastData, setforeCastData] = useState([]);


  var forecastarray = [];
  var forecastheading = [];
  var primarray = [];
  var secarray = [];

  var forecast = ["temperature","humidity","air","co2","no2","ozone","pm","tvoc"]

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
      setplaceholdevalue(res[0].name + " " + "(" + res[0].device_name + ")");

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


      //Getting Sensor Data from API and Populate array
      const mapLoop = async (_) => {
        const promises = res.map(async (element) => {
          const senRead = await GetSensorReading(element.id);
          return senRead;
        });
        const senObj = await Promise.all(promises);

        //Getting ForeCast and Time from the Result and populating into seperate arrays to fill graph
        for (let index = 0; index < senObj.length; index++) {
          primarray = [];
          secarray = [];
          for (let y = 0; y < 8; y++) {
            primarray.push(senObj[index].forecasts[y].forecast);
            let timestr = senObj[index].forecasts[y].time;
            let t = timestr.search("T");
            let timealone = timestr.substr(t + 1, timestr.length);
            secarray.push(timealone);
          }
          forecastarray.push(primarray);
          forecastheading.push(secarray);
        }
        setforeCastData(forecastarray);
        setforeCastLabel(forecastheading);
        console.log(foreCastData);
        console.log(foreCastLabel);

        //Setting Indicator to true so that the data can be displayed
        SetforeCast(true);
      };
      mapLoop();




      //Getting Sensor Data from API and Populate array
      const mapLoop1 = async (_) => {
        console.log("test")
        const promises = forecast.map(async (element) => {
          const senRead = await GetSensorReading1(element);
          return senRead;
        });
        const senObj = await Promise.all(promises);
        console.log("Hello")
        console.log(senObj)

        //Getting ForeCast and Time from the Result and populating into seperate arrays to fill graph
        // for (let index = 0; index < senObj.length; index++) {
        //   primarray = [];
        //   secarray = [];
        //   for (let y = 0; y < 8; y++) {
        //     primarray.push(senObj[index].forecasts[y].forecast);
        //     let timestr = senObj[index].forecasts[y].time;
        //     let t = timestr.search("T");
        //     let timealone = timestr.substr(t + 1, timestr.length);
        //     secarray.push(timealone);
        //   }
        //   forecastarray.push(primarray);
        //   forecastheading.push(secarray);
        // }

      };
      mapLoop1();
      async function GetSensorReading1(value) {
        try {
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            Host + "/sensors/" +
              1 +
              "/forecast/" +
              value,
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
          return sleep(50).then((v) => resultsen);
        } catch (e) {
          console.log(e);
        }
      }








      async function GetSensorReading(value) {
        try {
          let forecast = props.forecast;
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            Host + "/sensors/" +
              value +
              "/forecast/" +
              forecast,
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
          return sleep(50).then((v) => resultsen);
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (foreCast == false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={70} color="#2DAF33" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DropDownPicker
        style={styles.dropdown}
        disableBorderRadius
        dropDownContainerStyle={{
          borderColor: "#fff",
        }}
        textStyle={{
          color: "#2DAF33",
          fontSize: 20,
          fontWeight: "bold",
        }}
        open={open}
        value={value}
        items={sensorItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setSensorItems}
        loading={loading}
        placeholder={placeholdervalue}
      />
      <BezierLineChart
        style={styles.test}
        labelheading={foreCastLabel[1]}
        datavalue={foreCastData[value]}
      />
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
