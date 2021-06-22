import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import InDoorSensor from "../../../assets/InDoorDevice.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import ManageModal from "../Modal/ManageModal";

const IndoorDevice = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const sensoreValue = (int) => {
    if (int == 0) {
      return "#17d453";
      console.log("1");
    } else if (int > 0 && int < 5) {
      return "#FF8C00";
    } else if (int >= 5) {
      return "#F20606";
    }
  };
  const truncate = (string) => {
    return string.length > 103 ? string.substring(0, 100) + "..." : string;
  };
  return (
    <View>
      <View>
        <TouchableOpacity style={styles.container} onPress={openModal}>
          <View style={styles.imageContainer}>
            <Image source={InDoorSensor} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.text}> {truncate(props.text)}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="circle"
              solid
              color={sensoreValue(props.reading)}
              size={30}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <ManageModal
          showModal={showModal}
          setShowModal={setShowModal}
          objectModal={props.object}
        />
      </View>
    </View>
  );
};

export default IndoorDevice;

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
    fontWeight: "700",
    paddingLeft: 5,
    paddingTop: 2,
  },
  text: {
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
  iconContainer: {
    justifyContent: "center",
  },
});
