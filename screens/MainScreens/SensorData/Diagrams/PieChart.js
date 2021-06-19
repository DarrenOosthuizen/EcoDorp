import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const PieLineChart = (props) => {
  return (
    <View>
      <Text>Pie Line Chart View</Text>
      <PieChart
        data={props.pieobject}
        width={Dimensions.get("window").width} // from react-native
        height={200}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="0"
      />
    </View>
  );
};

export default PieLineChart;
