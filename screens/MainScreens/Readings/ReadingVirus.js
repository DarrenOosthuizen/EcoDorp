import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ReadingVirus = (props) => {

  const ChangeValue = (value) => {
    return value.toFixed(1);
  };
  const GetVirus = (virus) =>
  {
    if(virus<=4)
    {
      return "GOOD"
    }
    if(virus>4)
    {
      return "BAD"
    }
  }
  const GetColor = (virus) =>
  {
    if(virus<=4)
    {
      return "#51D257"
    }
    if(virus>4)
    {
      return "#EF1D10"
    }
  }
  return (
    <View style={{backgroundColor: GetColor(props.value),
    width: "80%",
    borderRadius: 10,
    justifyContent: 'center'
    }}>
            <Text style={styles.text}>{GetVirus(props.value)}</Text>
    </View>
  );
};

export default ReadingVirus;

const styles = StyleSheet.create({

  text:
  {
    color : '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
});
