import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import BottonNav from "./Predictions/BottomNavigator";

const PredictionScreen = (props) => {
  return (
    <View style={styles.container}>
      <BottonNav />
    </View>
  );
};

export default PredictionScreen;

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height: '100%'
  },

});
