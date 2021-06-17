import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Help Screen</Text>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
