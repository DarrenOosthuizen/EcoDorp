import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ReadingSlider = (props) => {
  return (
    <View style={styles.container}>
        <View style={{color : '#ffff',
      backgroundColor : "#fff",
      width : 8,
      height: 8,
      borderRadius: 10,
      justifyContent: 'center',
      left: props.value + '%',
      }}>
            <Text></Text>
        </View>
    </View>
  );
};

export default ReadingSlider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#51D257",
    width: "100%",
    borderRadius: 10,
    height: '40%',
    justifyContent: 'center'
  },
});
