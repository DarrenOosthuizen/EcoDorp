import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0D8735" barStyle="light-content" />
      <View style={styles.header} backgroundColor="#FFFF">
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          source={require("../../assets/BlockLogo.png")}
          style={styles.logo}
          resizeMode="stretch"
          backgroundColor="#FFFF"
        />
      </View>
      <Animatable.View
        style={[styles.footer, { backgroundColor: colors.splashbackground }]}
        animation="fadeInUpBig"
      >
        <Text style={styles.title}>Stay connected with your BestFriend!</Text>
        <Text style={styles.text}>Sign in with Boekel account.</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <LinearGradient
              colors={["#0A8934", "#0A8934"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Login</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FFFF",
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1.3,
    backgroundColor: "#61B522",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#FFFFFF",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
