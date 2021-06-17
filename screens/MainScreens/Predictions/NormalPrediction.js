import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NormalPrediction = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>{props.heading}</Text>
      <Text>{props.text}</Text>
    </View>
  );
};

export default NormalPrediction;

const styles = StyleSheet.create({
  container: {
    padding : 10,
    backgroundColor : "#D4D1D2" ,
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginTop: '5%',
    marginBottom: '2%'

  },
  heading: {
    fontSize: 20,
    fontWeight : 'bold',
    

  },
});
