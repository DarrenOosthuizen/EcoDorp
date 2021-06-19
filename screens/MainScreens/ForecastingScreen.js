import React from "react";
import { View, Text, Button, StyleSheet,useWindowDimensions  } from "react-native";
import BottomTab from './ForeCasting/BottomNavigator';



const Forecasting = () => {
  return (
    <View style={styles.container}>
      <BottomTab/>

    </View>
  );
};

export default Forecasting;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
});
