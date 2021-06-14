import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Forecasting = () => {
  return (
    <View style={styles.container}>
      <Text>Fore Casting Screen</Text>
    </View>
  );
};

export default Forecasting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
