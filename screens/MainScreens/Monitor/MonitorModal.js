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
import ModalReading from "./MonitorModalIcon";


const ModalMonitor = ({ showModal, setShowModal}) => {
  const Reading = [
    {
      heading: "Virus Index",
      text: "Optimal Virus Index is Below 4. Any Reading above that is not viable for human health",
      color: "#0D8735",
      icon : "virus",
      key: 1,
    },
    {
      heading: "Temperature",
      text: "Optimal values are based on a Temperature Reading higher than -20°C to 70°C, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "thermometer",
      key: 2,
    },
    {
      heading: "Humidity",
      text: "Optimal values are based on a Humidity Percent higher than 20% to 80%, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "tint",
      key: 3,
    },
    {
      heading: "Air Pressure",
      text: "Optimal values are based on a Atmospheric Pressure between 300hPA to 1100hPA, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "cloudscale",
      key: 4,
    },
    {
      heading: "CO2",
      text: "Optimal values are based on a CO2 PPM(Parts Per Million) Reading of 400 ppm to 10 000 ppm, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "cloud",
      key: 5,
    },
    {
      heading: "TVOC",
      text: "Optimal values are based on a TVOC PPB(Parts Per Billion) Reading higher 0 ppb to 1200 ppb, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "leaf",
      key: 6,
    },
    {
      heading: "PM2.5",
      text: "Optimal values are based on a PM2.5 µg/m3(Micrograms of gas pollutant per cubic meter of ambient air) than -20°C to 70°C, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "vial",
      key: 7,
    },
    {
      heading: "CO",
      text: "Optimal values are based on a CO PPM(Parts Per Million) Reading of 0 ppm to 1000 ppm, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "cloudsmith",
      key: 8,
    },
    {
      heading: "NO2",
      text: "Optimal values are based on a NO2 PPB(Parts Per Billion) Reading of 1 ppb to 1000 ppb, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "hubspot",
      key: 9,
    },
    {
      heading: "OZONE",
      text: "Optimal values are based on a Ozone PPB(Parts Per Billion) Reading of 1 ppb to 1000 ppb, If reading is outside this range, the slider will turn red else will be green",
      color: "#0D8735",
      icon : "globe",
      key: 10,
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
              <ScrollView>
                <View style={styles.modalcon}>
                  <View style={styles.DetailsCon}>
                    <Text style={styles.DeviceHeading}>Optimal Values</Text>
                    <Text style={styles.DeviceText}>Help</Text>
                  </View>
                  <View style={styles.ReadingCon}>
                    {Reading.map((readingitem) => (
                      <ModalReading
                        heading={readingitem.heading}
                        text={readingitem.text}
                        color={readingitem.color}
                        key={readingitem.key}
                        icon={readingitem.icon}
                      />
                    ))}
                    <View style={styles.Divider} />
                  </View>
                  <View style={styles.ButtonCon}>
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

export default ModalMonitor;

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
