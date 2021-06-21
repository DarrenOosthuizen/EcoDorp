import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import { Host } from "../../env";

const NormalPrediction = (props) => {
  const [shouldRender, SetShouldRender] = useState(false);
  var userToken;
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
  const [sensorPred, setSensorPred] = useState([]);
  let arrpred = [];

  useEffect(() => {
    GetSensorData();
  }, []);

  let predvalue = 0;
  const GetTempValue = (value) => {
    if (value < 10) {
      let object = {
        key: predvalue,
        heading: "Temperature Low",
        detail1: "•Close any open Windows/Doors to stop cold air comming in.",
        detail2: "•Wear Wool or Down clothing to keep body temperature up.",
        detail3:
          "•Turn on Heated floor, Gas Heater or air conditioning to desired temperature for maximum of 1 hour.",
      };
      arrpred.push(object);
      predvalue++;
    } else if (value > 40) {
      let object = {
        key: predvalue,
        heading: "Temperature High",
        detail1:
          "•If available turn airconditioning on low temperature such as 17C for atleast 1 hour to ensure circulation.",
        detail2:
          "•Stay hydrated. When you lose water you limit your body’s ability to cool itself. So drink plenty of fluids.",
        detail3:
          "•Wear cotton. Cotton is breathable and light, which makes it excellent material for summer clothing. Synthetic fabrics hold in the heat.",
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetHumValue = (value) => {
    if (value < 30) {
      let object = {
        key: predvalue,
        heading: "Humidity Low",
        detail1:
          "•Cook Without Lids. Cooking creates a significant amount of moisture, especially boiling water which creates steam.",
        detail2:
          "•Hang Your Laundry Indoors. Hanging your laundry in the house instead slowly adds a small amount of moisture to the room as the moisture evaporates.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 70) {
      let object = {
        key: predvalue,
        heading: "Humidity High",
        detail1:
          "•Grow Plants that Absorb Humidity. Some plants, like Boston ferns, remove moisture from the air. Not only are you reducing your humidity levels and energy consumption, but you’re helping the environment by removing more carbon dioxide and adding more oxygen too!.",
        detail2:
          "•Don’t Boil Water on Especially Humid Days. Some of that boiled water turns into steam, which then gets absorbed into the rest of your home’s air.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetAirValue = (value) => {
    if (value < 300) {
      let object = {
        key: predvalue,
        heading: "Air Pressure Low",
        detail1:
          "•Cool the home by running the air conditioner, opening windows on a cool day or using ceiling fans.",
        detail2:
          "•Cool air sinks, suppressing air molecules and increasing air pressure.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 1100) {
      let object = {
        key: predvalue,
        heading: "Air Pressure High",
        detail1:
          "•Turn off exhaust fans or reduce the number of them running in the home.",
        detail2:
          "•Exhaust fans remove air from inside the house to the outside, lowering the inside air pressure.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetCO2Value = (value) => {
    if (value < 400) {
      let object = {
        key: predvalue,
        heading: "CO2 Low",
        detail1: "•CO2 is low.Well Done! Keep up the good work.",
        detail2: null,
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 10000) {
      let object = {
        key: predvalue,
        heading: "CO2 High",
        detail1: "•Increase airflow while cooking..",
        detail2:
          "•Switch lights off when you leave the room and unplug your electronic devices when they are not in use.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetTVOCValue = (value) => {
    if (value < 0) {
      let object = {
        key: predvalue,
        heading: "TVOC Low",
        detail1: "•TVOC is low.Well Done! Keep up the good work.",
        detail2: null,
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 1200) {
      let object = {
        key: predvalue,
        heading: "TVOC High",
        detail1: "•Lower the humidity level in you house.",
        detail2: "•Try to buy cleaning products marked low or no VOCs.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetPMValue = (value) => {
    if (value < 1) {
      let object = {
        key: predvalue,
        heading: "PM2.5 Low",
        detail1: "•PM2.5 is low.Well Done! Keep up the good work.",
        detail2: null,
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 200) {
      let object = {
        key: predvalue,
        heading: "PM2.5 High",
        detail1:
          "•Avoid using anything that burns, such as wood fireplaces, gas logs and even candles or incense.",
        detail2:
          "•Keep the room clean – but don’t vacuum unless your vacuum has a HEPA filter. That stirs up particles already inside your home. Wet mopping can help reduce dust.",
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetNO2Value = (value) => {
    if (value < 1) {
      let object = {
        key: predvalue,
        heading: "NO2 Low",
        detail1: "•NO2 Reading is very low. Well Done! Keep up the good work.",
        detail2: null,
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 1000) {
      let object = {
        key: predvalue,
        heading: "NO2 High",
        detail1:
          "•If any stoves, ovens, fireplaces are currently in use, reduce the use of these applications.",
        detail2:
          "•Avoid using and oils or kerosene inside the house, smoking an tobacco products inside is not recommended.",
        detail3:
          "•Open Windows/Doors or add more plants which can bring Oxygen inside.",
      };
      arrpred.push(object);
      predvalue++;
    }
  };
  const GetOzoneValue = (value) => {
    if (value < 1) {
      let object = {
        key: predvalue,
        heading: "Ozone Low",
        detail1: "•Ozone is low.Well Done! Keep up the good work.",
        detail2: null,
        detail3: null,
      };
      arrpred.push(object);
      predvalue++;
    }
    if (value > 1000) {
      let object = {
        key: predvalue,
        heading: "Ozone High",
        detail1:
          "•Conserve electricity and set your air conditioner at higher temperature.",
        detail2:
          "•Keep the windows closed, especially on warm and sunny days with little or no wind.",
        detail3:
          "•Use household, workshopr or garden chemicals that have very little evaporation.",
      };
      arrpred.push(object);
      predvalue++;
    }
  };

  const GetSensorData = async function () {
    try {
      //Getting UserToken to be able to make requests to API
      userToken = await AsyncStorage.getItem("userToken");

      var promise = GetFC();

      function GetFC() {
        return new Promise(async function (resolve, reject) {
          let senobj = await GetSensorReading();
          resolve(senobj);
        });
      }
    } catch (e) {
      console.log(e);
    }

    promise.then((val) => {
      GetTempValue(val.temp);
      GetAirValue(val.air);
      GetNO2Value(val.no2);
      GetOzoneValue(val.ozone);
      GetHumValue(val.hum);
      GetPMValue(val.pm);
      GetTVOCValue(val.tvoc);
      GetCO2Value(val.co2);
      if (arrpred.length == 0) {
        let object = {
          key: 1,
          heading: "Well Done",
          detail1:
            "Well Done. All Readings are within optimal range. Keep it up",
          detail2: null,
          detail3: null,
        };
        arrpred.push(object);
      }
      setSensorPred(arrpred);
      SetShouldRender(true);
    });

    async function GetSensorReading(value) {
      try {
        let resultsen = await fetch(
          Host + "/sensors/" + props.sensorID + "/data/last",
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
        return resultsen;
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (shouldRender == false) {
    return (
      <View style={styles.actindcon}>
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
    <View>
      <ScrollView>
        {sensorPred.map((element) => (
          <View style={styles.container} key={element.key}>
            <Text style={styles.heading}>{element.heading}</Text>
            <Text>{element.detail1}</Text>
            <Text>{element.detail2}</Text>
            <Text>{element.detail3}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NormalPrediction;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#D4D1D2",
    width: "95%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: "5%",
    marginBottom: "2%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
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
});
