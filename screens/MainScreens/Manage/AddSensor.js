import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddModal from './ManageModal'
const AddSensor = (props) => {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={styles.textlabel}>Add New Sensor</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            onPress={openModal}
          >
            <MaterialCommunityIcons
              name="plus-circle"
              color={"#61B522"}
              size={45}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <AddModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </View>
    </View>
  );
};

export default AddSensor;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 60,
    flexDirection: "row",
    backgroundColor: "#EEF9E6",
    borderRadius: 20,
    margin: "2.5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  textcontainer: {
    width: "67.5%",

    marginLeft: "2.5%",
    justifyContent: "center",
  },
  buttoncontainer: {
    width: "27.5%",
    marginLeft: "2.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  textlabel: {
    fontSize: 26,
    marginLeft: "5%",
    color: "#0D8735",
  },
});
