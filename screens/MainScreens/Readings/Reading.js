import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ReadingSlider from "./ReadingSlider";
import ReadingVirus from "./ReadingVirus";
import Icon from "react-native-vector-icons/FontAwesome5";

const Reading = (props) => {
  let GreenColor = "#51D257";
  let RedColor = "#EF1D10";

  const ChangeValue = (value) => {
    return value.toFixed(1);
  };
  const GetTempValue = (value) => {
    if (value >= -40 && value <= 85) {
      return (value / 95) * 100;
    }
    if (value < -40) {
      return 2;
    }
    if (value > 85) {
      return 90;
    }
  };
  const GetHumValue = (value) => {
    return (value / 100) * 100;
  };
  const GetAirValue = (value) => {
    if (value >= 300 && value <= 1100) {
      return (value / 1232) * 100;
    }
    if (value < 300) {
      return 2;
    }
    if (value > 1100) {
      return 90;
    }
  };
  const GetCO2Value = (value) => {
    if (value >= 400 && value <= 10000) {
      return (value / 11200) * 100;
    }
    if (value < 400) {
      return 2;
    }
    if (value > 10000) {
      return 90;
    }
  };
  const GetTVOCValue = (value) => {
    if (value >= 0 && value <= 1200) {
      return (value / 1344) * 100;
    }
    if (value < 0) {
      return 2;
    }
    if (value > 1200) {
      return 90;
    }
  };
  const GetPMValue = (value) => {
    if (value >= 1 && value <= 200) {
      return (value / 224) * 100;
    }
    if (value < 1) {
      return 2;
    }
    if (value > 200) {
      return 90;
    }
  };
  const GetCOValue = (value) => {
    if (value >= 0 && value <= 1000) {
      return (value / 1120) * 100;
    }
    if (value < 0) {
      return 2;
    }
    if (value > 1000) {
      return 90;
    }
  };
  const GetNO2Value = (value) => {
    if (value >= 1 && value <= 1000) {
      return (value / 1120) * 100;
    }
    if (value < 1) {
      return 2;
    }
    if (value > 1000) {
      return 90;
    }
  };
  const GetOzoneValue = (value) => {
    if (value >= 1 && value <= 1000) {
      return (value / 1120) * 100;
    }
    if (value < 1) {
      return 2;
    }
    if (value > 1000) {
      return 90;
    }
  };

  const GetColorVirus = (value) => {
    if (value <= 4) {
      return "#51D257";
    }
    if (value > 4) {
      return "#EF1D10";
    }
  };

  //Set Optimal 10 to 40
  const SetTempColor = (value) => {
    if (value >= 10 && value <= 40) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 30-50
  const SetHumColor = (value) => {
    if (value >= 30 && value <= 50) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 900-1026
  const SetAirColor = (value) => {
    if (value >= 900 && value <= 1026) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 400-1000
  const SetCO2Color = (value) => {
    if (value >= 400 && value <= 1000) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 0-650
  const SetTVOCColor = (value) => {
    if (value >= 0 && value <= 650) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };
  //Set Optimal to 0-12
  const SetPMColor = (value) => {
    if (value >= 0 && value <= 12) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 0-25
  const SetCOColor = (value) => {
    if (value >= 0 && value <= 9) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 0-80
  const SetNO2Color = (value) => {
    if (value >= 0 && value <= 80) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  //Set Optimal to 0-70
  const SetOZONEColor = (value) => {
    if (value >= 0 && value <= 70) {
      return GreenColor;
    } else {
      return RedColor;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ReadingIndex}>
        <View style={styles.ReadingIndexText}>
          <Text style={styles.ReadingIndexHeading}> Virus Index</Text>
        </View>
        <View style={styles.ReadingIndexIndicator}>
          <ReadingVirus value={props.virus} />
        </View>
        <View style={styles.ReadingIndexValue}>
          <Text
            style={[
              { color: GetColorVirus(props.virus) },
              styles.ReadingIndexValueText,
            ]}
          >
            {props.virus}
          </Text>
          <Text
            style={[
              { color: GetColorVirus(props.virus) },
              styles.ReadingIndexValuePer,
            ]}
          >
            /10
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="thermometer" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> Temperature</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetTempValue(props.temp)}
            color={SetTempColor(props.temp)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[
              { color: SetTempColor(props.temp) },
              styles.ReadingValueText,
            ]}
          >
            {ChangeValue(props.temp)}°C
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="tint" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> Humidity</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetHumValue(props.hum)}
            color={SetHumColor(props.hum)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[{ color: SetHumColor(props.hum) }, styles.ReadingValueText]}
          >
            {ChangeValue(props.hum)}%
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="cloudscale" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> Air Pressure</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetAirValue(props.air)}
            color={SetAirColor(props.air)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[{ color: SetAirColor(props.air) }, styles.ReadingValueText]}
          >
            {ChangeValue(props.air)} hPa
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="cloud" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> CO2</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetCO2Value(props.co2)}
            color={SetCO2Color(props.co2)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[{ color: SetCO2Color(props.co2) }, styles.ReadingValueText]}
          >
            {ChangeValue(props.co2)} ppm
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="leaf" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> TVOC</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetTVOCValue(props.tvoc)}
            color={SetTVOCColor(props.tvoc)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[
              { color: SetTVOCColor(props.tvoc) },
              styles.ReadingValueText,
            ]}
          >
            {ChangeValue(props.tvoc)} ppb
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="vial" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> PM2.5</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetPMValue(props.pm)}
            color={SetPMColor(props.pm)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[{ color: SetPMColor(props.pm) }, styles.ReadingValueText]}
          >
            {ChangeValue(props.pm)} µg/m3
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="cloudsmith" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> CO</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetCOValue(props.co)}
            color={SetCOColor(props.co)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[{ color: SetCOColor(props.co) }, styles.ReadingValueText]}
          >
            {ChangeValue(props.co)} ppm
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="hubspot" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> NO2</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetNO2Value(props.no2)}
            color={SetNO2Color(props.no2)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[{ color: SetNO2Color(props.no2) }, styles.ReadingValueText]}
          >
            {ChangeValue(props.no2)} ppb
          </Text>
        </View>
      </View>
      <View style={styles.ReadingUnit}>
        <View style={styles.ReadingText}>
          <Icon name="globe" size={20} style={styles.ReadingIcon}></Icon>
          <Text style={styles.ReadingHeading}> Ozone</Text>
        </View>
        <View style={styles.ReadingSlider}>
          <ReadingSlider
            value={GetOzoneValue(props.ozone)}
            color={SetOZONEColor(props.ozone)}
          />
        </View>
        <View style={styles.ReadingValue}>
          <Text
            style={[
              { color: SetOZONEColor(props.ozone) },
              styles.ReadingValueText,
            ]}
          >
            {ChangeValue(props.ozone)} ppb
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  ReadingIndex: {
    backgroundColor: "#E4E4E3",
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
  },
  ReadingUnit: {
    marginLeft: '2%',
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
  },
  ReadingText: {
    width: "42%",
    paddingLeft: 5,
    flexDirection: "row",
    alignContent: "flex-start",
    fontSize: 2,
  },
  ReadingSlider: {
    width: "25%",
    justifyContent: "center",
  },
  ReadingValue: {
    width: "33%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 5,
    fontWeight: "bold",
  },
  ReadingValueText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ReadingHeading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },
  ReadingIcon: {
    width: 25,
  },
  ReadingIndexHeading: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  ReadingIndexText: {
    width: "55%",
    paddingLeft: 5,
    justifyContent: "center",
  },
  ReadingIndexValueText: {
    fontSize: 45,
    fontWeight: "bold",
  },
  ReadingIndexValue: {
    width: "25%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ReadingIndexValuePer: {
    fontSize: 21,
    alignSelf: "flex-end",
    top: -4,
    fontWeight: "bold",
  },
  ReadingIndexIndicator: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
