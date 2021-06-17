import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Readings from "./Readings/Reading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MonitorScreen = (props) => {
  var userToken;
  var res = [];
  var nam = [];
  var SensorID = [];
  const [placeholdervalue, setplaceholdevalue] = useState()
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sensorItems, setSensorItems] = useState([]);
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

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const GetSensorData = async function () {
    try {
      //Setting var to null
      nam = [];
      SensorID = [];

      //Getting UserToken to be able to make requests to API
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
      setplaceholdevalue(res[0].name + " " + "(" + res[0].device_name+ ")" )
      //Getting Sensor Data from API and Populate array
      const mapLoop = async (_) => {
        const promises = res.map(async (element) => {
          const senRead = await GetSensorReading(element.id);
          return senRead;
        });
        const senObj = await Promise.all(promises);
        setSensorData(senObj);
      };
      mapLoop();

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
          return sleep(50).then((v) => resultsen);
        } catch (e) {}
      }

      //Setting Drop Down List
      let valuese = 1;
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
    } catch (e) {
      console.log(e);
    }
  };

  const changeSensorReading = () => {
    if (value != 0) {
      return <Readings {...sensorData[value - 1]} />;
    }
  };

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
      {changeSensorReading()}
    </View>
  );
};

export default MonitorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dropdown: {
    marginBottom: "0%",
    borderRadius: 0,
    borderColor: "#fff",
    fontSize: 20,
  },
});
