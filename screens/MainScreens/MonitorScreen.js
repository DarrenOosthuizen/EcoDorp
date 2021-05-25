import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MonitorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Monitor Screen</Text>
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
