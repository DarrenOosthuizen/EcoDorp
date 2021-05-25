import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ManageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Manage Screen</Text>
    </View>
  );
};

export default ManageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
