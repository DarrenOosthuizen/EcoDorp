import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import BottomTab from "./SensorData/BottomNavigatorData";

const DataScreen = () => {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
