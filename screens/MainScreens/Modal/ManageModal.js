import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import ModalReading from "./ManageModalReading";
import ReadingView from "../Readings/Reading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Host} from "../../env";

const ModalTester = ({ showModal, setShowModal, objectModal }) => {
  var userToken;
  const [showReading, SetShowReading] = useState(false)
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
  })
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // const mapLoop = async (value) => {
  //   const promises = async () => {
  //     const senRead = await GetSensorReading(value);
  //     return senRead;
  //   };
  //   const senObj = await Promise.all(promises);
  //   //console.log(senObj)
  //   setSensorData(senObj);
  // };
const GetData = (value) =>{
  SetShowReading((prev) => !prev)
  GetSensorReading(value)
}
  async function GetSensorReading(value) {
    try {
      userToken = await AsyncStorage.getItem("userToken");
      let resultsen = await fetch(
        Host +  "/sensors/" + value + "/data/last",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: userToken,
          },
        }
      );
      resultsen = await resultsen.json();
      setSensorData(resultsen)
    } catch (e) {
      console.log(e)
    }
  }

  const Reading = [
    {
      heading: "Optimal",
      text: "IF your device is displaying this reading then it is currently Optimal. That is determined by checking which readings are within safe range for human interaction",
      color: "#17d453",
      key: 1,
    },
    {
      heading: "Caution",
      text: "IF your device is displaying this reading then 1 or more readings are not within the optimal values which are safe for Humans. Please be cautious!",
      color: "#FF8C00",
      key: 2,
    },
    {
      heading: "Danger",
      text: "IF your device is displaying this reading then 5 or more readins are outside the safe range for Human lifes. Please be safe and watch your health",
      color: "#F20606",
      key: 3,
    },
  ];
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
            {showReading == false ? (
              <ScrollView>
                <View style={styles.modalcon}>
                  <View style={styles.DetailsCon}>
                    <Text style={styles.DeviceHeading}>{objectModal.name}</Text>
                    <Text style={styles.DeviceText}>Device</Text>
                    <Text style={styles.ModelHeading}>
                      {objectModal.device_name}
                    </Text>
                    <Text style={styles.ModelText}>Model</Text>
                  </View>
                  <View style={styles.ReadingCon}>
                    {Reading.map((readingitem) => (
                      <ModalReading
                        heading={readingitem.heading}
                        text={readingitem.text}
                        color={readingitem.color}
                        key={readingitem.key}
                      />
                    ))}
                    <View style={styles.Divider} />
                  </View>
                  <View style={styles.ButtonCon}>
                    <TouchableOpacity
                      style={styles.ReadingsButton}
                      onPress={
                        (() =>  GetData(objectModal.id))
                      }
                    >
                      <Text style={styles.ButtonText}>View Readings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DeleteButton}>
                      <Text style={styles.ButtonText}>Delete Device</Text>
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
            ) : (
              <ScrollView>
              <View style={styles.modalcon}>
                <View style={styles.DetailsCon}>
                  <Text style={styles.DeviceHeading}>{objectModal.name}</Text>
                  <Text style={styles.DeviceText}>Device</Text>
                  <Text style={styles.ModelHeading}>
                    {objectModal.device_name}
                  </Text>
                  <Text style={styles.ModelText}>Model</Text>
                </View>
                <View style={styles.ReadingCon1}>
                  <ReadingView {...sensorData} />
                </View>
                <View style={styles.Divider} />
                <View style={styles.ButtonCon}>
                  <TouchableOpacity
                    style={styles.ReadingsButton}
                    onPress={() => SetShowReading((prev) => !prev)}
                  >
                    <Text style={styles.ButtonText}>Hide Readings</Text>
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
            )}
          </Modal>
        </View>
      ) : null}
    </>
  );
};

export default ModalTester;

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
  ReadingCon1:
  {
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
});
