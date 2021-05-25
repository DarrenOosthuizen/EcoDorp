import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const RoomLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Room Layout Screen</Text>
    </View>
  );
};

export default RoomLayoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
