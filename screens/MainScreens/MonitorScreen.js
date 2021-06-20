import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import BottomNav from "./Monitor/BottomNavigator";

const MonitorScreen = (props) => {
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  );
};

export default MonitorScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
