import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Readings from "./Readings/Reading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MonitorScreen = () => {
  var userToken;
  var res = [];
  var nam = [];
  var sen = [];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    { label: "Orange", value: 0 },
    { label: "Apple", value: 1 },
  ]);
  const [sensorItems, setSensorItems] = useState([
    { label: "Default", value: 0 },
  ]);
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
      res = [];
      sen = [];
      nam = [];
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

      //Setting Drop Down List
      let valuese = 0;
      res.forEach((element) => {
        console.log(element.name + " " + valuese);
        let obj = {
          label: element.name + " " + "(" + element.device_name + ")",
          value: valuese,
        };
        nam.push(obj);
        setSensorItems(nam);
        valuese++;
      });

      //Getting Sensors results and pushing to sen array
      let senres;
      res.forEach(async (element) => {
        senres = await fetch(
          "http://flystudio.co.za:5000/sensors/" + element.id + "/data/last",
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
        sen.push(senres);
        //console.log(sen)
        setSensorData(sen);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const changeSensorReading = () => {
    return <Readings {...sensorData[value]} />;
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
        onChangeValue={(value) => {
          console.log(value);
        }}
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
    marginBottom: "5%",
    borderRadius: 0,
    borderColor: "#fff",
    fontSize: 20,
  },
});
