import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import ReadingView from "../Readings/Reading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Host } from "../../env";

const AddSensorModal = ({ showModal, setShowModal, objectModal }) => {
  var userToken;
  const [showReading, SetShowReading] = useState(false);
  const [sensorData, setSensorData] = useState({
    date: "2021-06-07T09:39:57.057Z",
    temp: 0,
    hum: 0,
    pm: 0,
    tvoc: 0,
    co2: 0,
    co: 0,
    air: 0,
    ozone: 0,
    no2: 0,
    virus: 0,
  });
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  // const mapLoop = async (value) => {
  //   const promises = async () => {
  //     const senRead = await GetSensorReading(value);
  //     return senRead;
  //   };
  //   const senObj = await Promise.all(promises);
  //   //console.log(senObj)
  //   setSensorData(senObj);
  // };
  const GetData = (value) => {
    SetShowReading((prev) => !prev);
    GetSensorReading(value);
  };
  async function GetSensorReading(value) {
    try {
      userToken = await AsyncStorage.getItem("userToken");
      let resultsen = await fetch(Host + "/sensors/" + value + "/data/last", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: userToken,
        },
      });
      resultsen = await resultsen.json();
      setSensorData(resultsen);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {showModal ? (
        <View>
          <Modal
            isVisible={showModal}
            animationIn={"slideInRight"}
            animationOut={"slideOutRight"}
            onBackdropPress={() => setShowModal((prev) => !prev)}
            onBackButtonPress={() => setShowModal((prev) => !prev)}
            onSwipeComplete={() => setShowModal((prev) => !prev)}
            propagateSwipe={true}
          >
            <ScrollView>
              <View style={styles.modalcon}>
                <View style={styles.DetailsCon}>
                  <Text style={styles.DeviceHeading}>Add New Sensor</Text>
                  <Text style={styles.DeviceText}>Sensor</Text>
                </View>
                <View style={styles.ReadingCon}>
                  <View style={styles.Divider} />
                  <View style={styles.input}>
                    <Text style={styles.textinput}>Sensor Modal : </Text>
                    <TextInput placeholder="Enter Modal Name of Sensor" />
                  </View>
                  <View style={styles.Divider} />
                  <View style={styles.input}>
                    <Text style={styles.textinput}>Sensor Name : </Text>
                    <TextInput placeholder="Enter Friendly name for Sensor" />
                  </View>
                </View>
                <View style={styles.ButtonCon}>
                  <TouchableOpacity
                    style={styles.ReadingsButton}
                    onPress={() => alert("Well done")}
                  >
                    <Text style={styles.ButtonText}>Add Sensor</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.CloseButton}
                    onPress={() => setShowModal((prev) => !prev)}
                  >
                    <Text style={styles.ButtonTextClose}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>
      ) : null}
    </>
  );
};

export default AddSensorModal;

const styles = StyleSheet.create({
  modalcon: {
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "flex-start",
  },

  DetailsCon: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  DeviceHeading: {
    fontWeight: "bold",
    fontSize: 35,
  },
  DeviceText: {
    color: "#9A9B9E",
    marginBottom: "2%",
  },
  ModelHeading: {
    fontWeight: "bold",
    fontSize: 30,
  },
  ModelText: {
    color: "#9A9B9E",
    marginBottom: "2%",
  },
  ReadingCon1: {
    height: 350,
  },
  Divider: {
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#9A9B9E",
    height: 1,
    marginBottom: "1%",
  },
  ButtonCon: {
    alignItems: "center",
  },

  ReadingsButton: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    backgroundColor: "#0D8735",
    width: "60%",
    borderRadius: 6,
    alignItems: "center",
    marginTop: "5%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  DeleteButton: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    backgroundColor: "#E81313",
    width: "60%",
    borderRadius: 6,
    alignItems: "center",
    marginTop: "5%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  CloseButton: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    backgroundColor: "#FCFCFC",
    width: "60%",
    borderRadius: 6,
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  ButtonTextClose: {
    color: "#0D8735",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginLeft: "5%",
  },
  textinput: {
    color: "#0D8735",
    marginLeft: 10,
  },
});
