import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BezierLineChart from "../Diagrams/BarChart";
import { Host } from "../../../env";
import * as Animatable from "react-native-animatable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const SensorData = (props) => {
  var userToken;
  var res = [];
  var nam = [];
  var SensorID = [];

  const [foreCastAc, SetforeCast] = useState(false);

  const [sensorDataLabelMon, SetsensorDataLabelMon] = useState([0]);
  const [sensorDataLabelWeek, SetsensorDataLabelWeek] = useState([0]);
  const [sensorDataLabelDay, SetsensorDataLabelDay] = useState([0]);
  const [sensorDataReadingMon, SetsensorDataReadingMon] = useState([0]);
  const [sensorDataReadingWeek, SetsensorDataReadingWeek] = useState([0]);
  const [sensorDataReadingDay, SetsensorDataReadingDay] = useState([0]);

  var forecastpred = [];
  var forecasthead = [];

  var sensorDataRead = [];
  var sensorDataHead = [];

  useEffect(() => {
    GetSensorForeCast();
  }, []);

  const GetSensorForeCast = async function () {
    try {
      //Setting var to null
      nam = [];
      SensorID = [];

      //Getting UserToken to be able to make requests to API
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

      var promise = GetFC();

      function GetFC() {
        return new Promise(async function (resolve, reject) {
          let senObj = await GetSensorReading();
          forecastpred = [];
          forecasthead = [];
          sensorDataRead = [];
          sensorDataHead = [];
          if (senObj.message != "Unknown sensor") {
            senObj.map((element) => {
              forecastpred.push(element.co2);
              let timestr = element.date;
              let t = timestr.search("T");
              let timealone = timestr.substr(t + 1, timestr.length);
              let datealone = timestr.substr(0, t - 1);
              forecasthead.push(datealone + " " + timealone);
            });
          }
          for (
            let i = forecastpred.length - 1;
            i >= forecastpred.length - 61;
            i--
          ) {
            sensorDataRead.push(forecastpred[i]);
            sensorDataHead.push(forecasthead[i]);
          }
          resolve({ sensorDataRead, sensorDataHead });
        });
      }

      promise.then((val1) => {
        SetsensorDataReadingMon(val1.sensorDataRead);
        SetsensorDataLabelMon(val1.sensorDataHead);

        sensorDataRead = [];
        sensorDataHead = [];
        for (
          let i = val1.sensorDataRead.length - 1;
          i >= val1.sensorDataHead.length - 20;
          i--
        ) {
          sensorDataRead.push(val1.sensorDataRead[i]);
          sensorDataHead.push(val1.sensorDataHead[i]);
        }
        SetsensorDataLabelWeek(sensorDataHead);
        SetsensorDataReadingWeek(sensorDataRead);

        sensorDataRead = [];
        sensorDataHead = [];
        for (
          let i = val1.sensorDataRead.length - 1;
          i >= val1.sensorDataHead.length - 7;
          i--
        ) {
          sensorDataRead.push(val1.sensorDataRead[i]);
          sensorDataHead.push(val1.sensorDataHead[i]);
        }
        SetsensorDataLabelDay(sensorDataHead);
        SetsensorDataReadingDay(sensorDataRead);
        SetforeCast(true);
      });

      async function GetSensorReading() {
        try {
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            Host + "/sensors/" + props.sensorID + "/data",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: userToken,
              },
            }
          );
          resultsen = await resultsen.json();
          return resultsen;
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (foreCastAc == false) {
    return (
      <View style={styles.actindcon}>
        <View style={styles.LabelCon}>
          <Animatable.View
            style={styles.IconCon}
            animation="pulse"
            duration={5000}
            easing="ease-out"
            iterationCount="infinite"
          ></Animatable.View>
          <Animatable.View
            style={styles.TextCon}
            animation="pulse"
            duration={5000}
            easing="ease-out"
            iterationCount="infinite"
          ></Animatable.View>
        </View>
        <Animatable.View
          style={styles.GraphCon}
          animation="pulse"
          duration={5000}
          easing="ease-out"
          iterationCount="infinite"
        >
          <ActivityIndicator size={70} color="#2DAF33" style={styles.actind} />
        </Animatable.View>
      </View>
    );
  }
  function RenderGraph() {
    if (props.dataID == "Month") {
      return (
        <ScrollView horizontal={true}>
          <BezierLineChart
            labelheading={sensorDataLabelMon}
            datavalue={sensorDataReadingMon}
          />
        </ScrollView>
      );
    } else if (props.dataID == "Week") {
      return (
        <ScrollView horizontal={true}>
          <BezierLineChart
            labelheading={sensorDataLabelWeek}
            datavalue={sensorDataReadingWeek}
          />
        </ScrollView>
      );
    } else {
      return (
        <ScrollView horizontal={true}>
          <BezierLineChart
            labelheading={sensorDataLabelDay}
            datavalue={sensorDataReadingDay}
          />
        </ScrollView>
      );
    }
  }

  return (
    <View style={styles.ForeContainer}>
      <View style={styles.ForeHeading}>
        <Animatable.View style={styles.ForeIcon}>
          <MaterialCommunityIcons name="cloud" color={"#FFF"} size={36} />
        </Animatable.View>
        <Animatable.View style={styles.ForeText}>
          <Text style={styles.ForeTextLabel}>CO2 Readings</Text>
        </Animatable.View>
      </View>
      <Animatable.View style={styles.ForeGraph}>
        {RenderGraph()}
      </Animatable.View>
    </View>
  );
};

export default SensorData;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  actindcon: {
    height: 180,
    margin: "5%",
  },
  actind: {
    alignSelf: "center",
  },
  LabelCon: {
    height: "20%",
    flexDirection: "row",
  },
  IconCon: {
    backgroundColor: "#B1B0B6",
    height: "100%",
    width: "10%",
    borderRadius: 100,
  },
  TextCon: {
    backgroundColor: "#B1B0B6",
    height: "100%",
    width: "80%",
    borderRadius: 50,
    marginLeft: "5%",
  },
  GraphCon: {
    justifyContent: "center",
    backgroundColor: "#B1B0B6",
    height: "80%",
    borderRadius: 20,
    marginTop: "5%",
  },
  ForeContainer: {
    height: 290,
    marginLeft: "2%",
    marginTop: "2%",
    marginRight: "2%",
  },
  ForeHeading: {
    flexDirection: "row",
    height: 40,
  },
  ForeIcon: {
    backgroundColor: "#61B522",
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  ForeGraph: {
    height: 250,
  },
  ForeText: {
    backgroundColor: "#61B522",
    width: "85%",
    marginLeft: 10,
    borderRadius: 60,
    justifyContent: "center",
    paddingLeft: 20,
  },
  ForeTextLabel: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
