import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InDoorSensor from "../../../assets/InDoorDevice.png";
import Icon from 'react-native-vector-icons/FontAwesome5';

const IndoorDeviceCheck = (props) => {
  const truncate = (string) => {
    return string.length > 103 ? string.substring(0, 100) + "..." : string;
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={InDoorSensor} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.text}> {truncate(props.text)}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="check-circle" solid color="#17D453" size={30}/>
      </View>
    </View>
  );
};

const IndoorDeviceCross = (props) => {
  const truncate = (string) => {
    return string.length > 103 ? string.substring(0, 100) + "..." : string;
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={InDoorSensor} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.text}> {truncate(props.text)}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="times-circle" solid color="#F20606" size={30}/>
      </View>
    </View>
  );
};

export {IndoorDeviceCheck,IndoorDeviceCross};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#D5FCEA",
    marginRight: "1%",
    marginLeft: "1%",
    width: "98%",
    marginTop: "1%",
    borderBottomColor: "#898A8B",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  heading: {
    fontWeight : '700',
    paddingLeft : 5,
    paddingTop: 2,
  },
  text :{ 
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "15%",
    height: 90,
  },
  textContainer: {
    width: "75%",
    padding: 5,
  },
  iconContainer : {
    justifyContent: 'center'

  }
});
