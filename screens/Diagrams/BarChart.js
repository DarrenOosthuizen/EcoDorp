import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const BarLineChart = (props) => {
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
      <BarChart
        data={{
          labels: label,
          datasets: [
            {
              data: datas,
            },
          ],
        }}
        width={Dimensions.get("window").width * (datas.length/7)} // from react-native
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#0D8735",
          backgroundGradientTo: "#0D8735",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
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

export default BarLineChart;
