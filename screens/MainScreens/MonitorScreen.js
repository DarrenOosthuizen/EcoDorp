import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Readings from './Readings/Reading';

const MonitorScreen = () => {
  let object = {
    "date": "2021-06-06T20:14:49.846Z",
    "temp": 20.2,
    "hum": 42.3,
    "pm": 3,
    "tvoc": 40,
    "co2":503,
    "co": 0,
    "air": 1017.2,
    "ozone": 11,
    "no2": 89,
    "virus": 2,
  }
  return (
    <View style={styles.container}>
      <Readings {...object}/>
    </View>
  );
};

export default MonitorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
