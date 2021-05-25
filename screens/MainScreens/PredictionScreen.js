import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PredictionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Predictions Screen</Text>
    </View>
  );
};

export default PredictionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
