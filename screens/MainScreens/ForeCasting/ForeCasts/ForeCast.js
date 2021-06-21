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
import * as Animatable from "react-native-animatable";

import BezierLineChart from "../../../Diagrams/BarChart";

import Humidity from "./Hum";
import Temperature from "./Temp";
import AirPressure from "./Air";
import NO2 from "./NO2";
import CO2 from "./CO2";
import Ozone from "./Ozone";
import PM from "./Pm";
import TVOC from "./Tvoc";

const ForeCast = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Displaying Temperature */}
        <Temperature sensorID={props.sensorID} />

        {/* Displaying Humidity */}
        <Humidity sensorID={props.sensorID} />

        {/* Displaying Air Pressure */}
        <AirPressure sensorID={props.sensorID} />

        {/* Displaying CO2 */}
        <CO2 sensorID={props.sensorID} />

        {/* Displaying NO2 */}
        <NO2 sensorID={props.sensorID} />

        {/* Displaying Ozone */}
        <Ozone sensorID={props.sensorID} />

        {/* Displaying PM */}
        <PM sensorID={props.sensorID} />

        {/* Displaying TVOC */}
        <TVOC sensorID={props.sensorID} />
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
});
