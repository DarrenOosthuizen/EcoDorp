import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Text,
} from "react-native";
import OutdoorDevice from "./Devices/OutdoorDevice";
import IndoorDevice from "./Devices/IndoorDevice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Host } from "../env";
import AddSensor from "./Manage/AddSensor";

const ManageScreen = ({ navigation }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [result, setResult] = useState([]);
  var userToken;
  var res = [];
  var selectedData;
  const [loginState, SetloginState] = useState(false);

  useEffect(() => {
    GetSensorData();
  }, []);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const getSensorObjects = () => {
    return sleep(50).then((v) => res);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const GetSensorData = async function () {
    try {
      userToken = await AsyncStorage.getItem("userToken");

      //Getting Sensors Name Type and ID
      res = await fetch(Host + "/sensors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: userToken,
        },
      });
      res = await res.json();
      if (res.length == 0) {
        setShouldRender(false);
        SetloginState(true);
      } else {
        setShouldRender(true);
      }
      const mapLoop = async (_) => {
        const promises = res.map(async (element) => {
          const senObj = await getSensorObjects();
          const senRead = await GetSensorReading(element.id);

          element["reading"] = senRead;
          return senObj;
        });
        const senObj = await Promise.all(promises);
        setResult(senObj[0]);
      };
      mapLoop();

      async function GetSensorReading(value) {
        try {
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            Host + "/sensors/" + value + "/data/last",
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
          let senReading = amountvalues(resultsen);
          return sleep(50).then((v) => senReading);
        } catch (e) {
          console.log(e);
        }
      }

      //Method to check amount of values which are out
      const amountvalues = (readingObject) => {
        let Reading = 0;

        //Set Optimal 10 to 40
        if (readingObject.temp >= 10 && readingObject.temp <= 40) {
        } else {
          Reading++;
        }

        //Set Optimal to 30-50
        if (readingObject.hum >= 30 && readingObject.hum <= 50) {
        } else {
          Reading++;
        }

        //Set Optimal to 900-1026
        if (readingObject.air >= 900 && readingObject.air <= 1026) {
        } else {
          Reading++;
        }

        //Set Optimal to 400-1000

        if (readingObject.co2 >= 400 && readingObject.co2 <= 1000) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-650
        if (readingObject.tvoc >= 0 && readingObject.tvoc <= 650) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-12
        if (readingObject.pm >= 0 && readingObject.pm <= 12) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-25
        if (readingObject.co >= 0 && readingObject.co <= 9) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-80
        if (readingObject.no2 >= 0 && readingObject.no2 <= 80) {
        } else {
          Reading++;
        }

        //Set Optimal to 0-70
        if (readingObject.ozone >= 0 && readingObject.ozone <= 70) {
        } else {
          Reading++;
        }
        SetloginState(true);
        return Reading;
      };
    } catch (e) {}
  };

  if (loginState == false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={100} color="#2DAF33" />
      </View>
    );
  }

  function RenderDisplay() {
    if (shouldRender == false) {
      return (
        <View style={{ height: "100%", width: "100%" }}>
          <AddSensor />
          <View style={styles.cont}>
            <Text style={styles.texthead}>Sensors can be added above</Text>
          </View>
        </View>
      );
    } else {
      return (
          <View style={styles.container}>
            <View style={styles.devicecontainer}>
              <ScrollView>
              {result.map((sensor) =>
                sensor.device_name == "Buiten 1" ? (
                  <OutdoorDevice
                    key={sensor.id}
                    text={sensor.device_name}
                    heading={sensor.name}
                    reading={sensor.reading}
                    object={sensor}
                  />
                ) : (
                  <IndoorDevice
                    key={sensor.id}
                    text={sensor.device_name}
                    heading={sensor.name}
                    reading={sensor.reading}
                    object={sensor}
                  />
                )
              )}
              </ScrollView>
            </View>
            <View style={styles.addsen}>
              <AddSensor />
            </View>
          </View>
      );
    }
  }

  return <View>{RenderDisplay()}</View>;
};

export default ManageScreen;

const styles = StyleSheet.create({
  container : {
    height : '100%',
    width : '100%',
  },
  devicecontainer: {
    height: "90%",
    width : '100%', 
  },
  scrollcontainer : {
    height : '100%',
    width : '100%', 
  },
  modalcon: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalclose: {
    backgroundColor: "#2DAF33",
  },
  cont: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  texthead: {
    fontSize: 28,
  },
  textpar: {
    fontSize: 18,
  },
  addsen: {
    justifyContent : "flex-end",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 2


  },
});
