import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import BezierLineChart from "../Diagrams/BezierLineChart";
import LineChart from "../Diagrams/LineChart";
import BarChart from "../Diagrams/BarChart";
import PieChart from "../Diagrams/PieChart";




const HomeScreen = () => {

  const testobject = [
    {
      name: "Random Info",
      population: 102120120,
      color: "rgba(220,220,120,1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "This is why wdwdwadawdawd",
      population: 102120120,
      color: "rgba(180,10,120,1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Helo There",
      population: 102120120,
      color: "rgba(220,120,120,1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Corsair",
      population: 102120120,
      color: "rgba(120,120,320,1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container} id="test">
        <ScrollView horizontal={true}>
        <BezierLineChart style={styles.test}
          labelheading={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            
          ]}
          datavalue={[10, 20, 15, 20, 30, 50, 20, 30]}
        />
        </ScrollView>
        <ScrollView horizontal={true}>
        <LineChart
          labelheading={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
          datavalue={[10, 20, 15, 20, 30, 50, 20, 30, 30, 50, 20, 30]}
        />
        </ScrollView>
        <ScrollView horizontal={true}>
        <BarChart
          labelheading={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
          ]}
          datavalue={[0.2, 0.6, 0.5, 0.7, 0.2]}
        />
        </ScrollView>
        <ScrollView horizontal={true}>
        <PieChart pieobject={testobject} />
        </ScrollView>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft : '5%',
    marginRight : '5%',
  },
});
