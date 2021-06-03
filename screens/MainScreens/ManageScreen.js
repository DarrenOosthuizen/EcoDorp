import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import {OutdoorDeviceCheck,OutdoorDeviceCross} from "./Devices/OutdoorDevice";
import {IndoorDeviceCheck,IndoorDeviceCross} from "./Devices/IndoorDevice";
import IndoorDevice from "./Devices/IndoorDevice";

const ManageScreen = () => {
  var values = [{}];

  const setValue = () => {
    values = [
      {
        key: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat et lectus porttitor faucibus. Praesent nec ante ante. Nunc sed dui at justo pretium tincidunt eu non mi. Nunc.",
        heading: "Heading 1",
      },
      {
        key: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat et lectus porttitor faucibus. Praesent nec ante ante. Nunc sed dui at justo pretium tincidunt eu non mi. Nunc.",
        heading: "Heading 2",
      }
    ];
  };
  setValue();
  return (
    <ScrollView>
      <View style={styles.container}>
      {values.map((prediction) => (
          <OutdoorDeviceCheck
            key={prediction.key}
            text={prediction.text}
            heading={prediction.heading}
          />
        ))}
        {values.map((prediction) => (
          <OutdoorDeviceCross
            key={prediction.key}
            text={prediction.text}
            heading={prediction.heading}
          />
        ))}
        {values.map((prediction) => (
          <IndoorDeviceCheck
            key={prediction.key}
            text={prediction.text}
            heading={prediction.heading}
          />
        ))}
        {values.map((prediction) => (
          <IndoorDeviceCross
            key={prediction.key}
            text={prediction.text}
            heading={prediction.heading}
          />
        ))}
      </View>
    </ScrollView>
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
