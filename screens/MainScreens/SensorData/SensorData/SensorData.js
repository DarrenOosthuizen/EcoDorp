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

import Humidity from "./Hum";
import Temperature from "./Temp";
import AirPressure from "./Air";
import NO2 from "./NO2";
import CO2 from "./CO2";
import Ozone from "./Ozone";
import PM from "./Pm";
import TVOC from "./Tvoc";

const SensorData = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Displaying Temperature */}
        <Temperature sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying Humidity */}
        <Humidity sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying Air Pressure */}
        <AirPressure sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying CO2 */}
        <CO2 sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying NO2 */}
        <NO2 sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying Ozone */}
        <Ozone sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying PM */}
        <PM sensorID={props.sensorID} dataID={props.dataID} />

        {/* Displaying TVOC */}
        <TVOC sensorID={props.sensorID} dataID={props.dataID} />
      </ScrollView>
    </View>
  );
};

export default SensorData;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
