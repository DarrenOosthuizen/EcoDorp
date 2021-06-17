import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Privacy Screen</Text>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
