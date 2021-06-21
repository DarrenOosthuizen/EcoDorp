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
import * as Animatable from "react-native-animatable";
import BezierLineChart from "../../../Diagrams/BarChart";
import { Host } from "../../../env";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ForeCast = (props) => {
  var userToken;
  var res = [];
  var nam = [];
  var SensorID = [];

  const [foreCastAc, SetforeCast] = useState(false);

  const [foreCastLabel, setforeCastLabel] = useState([0]);
  const [foreCastData, setforeCastData] = useState([0]);

  var forecastpred = [];
  var forecasthead = [];

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
          let senObj = await GetSensorReading("pm");
          forecastpred = [];
          forecasthead = [];
          if (senObj.message != "Something went wrong") {
            for (let y = 0; y < 8; y++) {
              forecastpred.push(senObj.forecasts[y].forecast);
              let timestr = senObj.forecasts[y].time;
              let t = timestr.search("T");
              let timealone = timestr.substr(t + 1, 5);
              forecasthead.push(timealone);
            }
          }
          resolve({ forecastpred, forecasthead });
        });
      }

      promise.then((val1) => {
        setforeCastData(val1.forecastpred);
        setforeCastLabel(val1.forecasthead);
        SetforeCast(true);
      });

      async function GetSensorReading(value) {
        try {
          userToken = await AsyncStorage.getItem("userToken");
          let resultsen = await fetch(
            Host + "/sensors/" + props.sensorID + "/forecast/" + value,
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

  return (
    <View style={styles.ForeContainer}>
      <View style={styles.ForeHeading}>
        <Animatable.View style={styles.ForeIcon}>
          <MaterialCommunityIcons name="test-tube" color={"#FFF"} size={36} />
        </Animatable.View>
        <Animatable.View style={styles.ForeText}>
          <Text style={styles.ForeTextLabel}>PM2.5 Forecast</Text>
        </Animatable.View>
      </View>
      <Animatable.View style={styles.ForeGraph}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <BezierLineChart
            labelheading={foreCastLabel}
            datavalue={foreCastData}
          />
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default ForeCast;

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
