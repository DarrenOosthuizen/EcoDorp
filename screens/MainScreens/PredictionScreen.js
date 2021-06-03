import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import NormalPrediction from "./Predictions/NormalPrediction";

const PredictionScreen = (props) => {
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
      },
      {
        key: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat et lectus porttitor faucibus. Praesent nec ante ante. Nunc sed dui at justo pretium tincidunt eu non mi. Nunc.",
        heading: "Heading 3",
      },
      {
        key: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat et lectus porttitor faucibus. Praesent nec ante ante. Nunc sed dui at justo pretium tincidunt eu non mi. Nunc.",
        heading: "Heading 4",
      },
      {
        key: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat et lectus porttitor faucibus. Praesent nec ante ante. Nunc sed dui at justo pretium tincidunt eu non mi. Nunc.",
        heading: "Heading 5",
      },
      {
        key: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat et lectus porttitor faucibus. Praesent nec ante ante. Nunc sed dui at justo pretium tincidunt eu non mi. Nunc.",
        heading: "Heading 6",
      },
    ];
  };
  setValue();
  return (
    <ScrollView>
      <View style={styles.container}>
        {values.map((prediction) => (
          <NormalPrediction
            key={prediction.key}
            text={prediction.text}
            heading={prediction.heading}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default PredictionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
  },
  items: {
    backgroundColor: "rgb(240,201,201)",
  },
});
