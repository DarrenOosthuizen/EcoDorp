import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import RootStackScreen from "./screens/RootStackScreen";
export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
