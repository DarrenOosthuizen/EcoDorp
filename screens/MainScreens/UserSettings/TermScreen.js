import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TermScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Terms Screen</Text>
    </View>
  );
};

export default TermScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
