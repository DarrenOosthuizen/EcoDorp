import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const LineChartDiagram = (props) => {
  const label = [];
  props.labelheading.forEach((element) => {
    label.push(element);
  });
  const datas = [];
  props.datavalue.forEach((element) => {
    datas.push(element);

  });

  return (
    <View>
      <Text>Line Chart View</Text>
      <LineChart
        data={{
          labels: label,
          datasets: [
            {
              data: datas,
            },
          ],
        }}
        width={Dimensions.get("window").width * (datas.length/4)} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#339966",
          backgroundGradientTo: "#339966",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChartDiagram;
