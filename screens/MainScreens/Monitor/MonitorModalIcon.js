import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ModalIcon = (props) => {
  return (
        <View>
          <View style={styles.Divider} />
          <View style={styles.ReadingOBJ}>
            <View style={styles.ReadingOBJText}>
              <Text style={styles.ReadingHeading}>{props.heading}</Text>
              <Text style={styles.ReadingText}>{props.text}</Text>
            </View>
            <View style={styles.ReadingOBJCircle}>
              <Icon name={props.icon} solid color={props.color} size={30} />
            </View>
          </View>
        </View>
    );
};

export default ModalIcon;

const styles = StyleSheet.create({
  Divider: {
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#9A9B9E",
    height: 1,
    marginBottom: "1%",
  },
  ReadingOBJ: {
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
  },
  ReadingOBJText: {
    width: "80%",
  },
  ReadingHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  ReadingText: {
    color: "#9A9B9E",
    margin: "2%",
  },
  ReadingOBJCircle: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
