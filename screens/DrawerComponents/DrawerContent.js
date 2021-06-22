import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../components/context";
import { Host } from "../env";

import IconF5 from "react-native-vector-icons/FontAwesome5";

export const DrawerContent = (props) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [userData, setUserData] = React.useState({
    emailaddress: "",
    name: "",
    totalsensors: 0,
  });

  var userToken;

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      userToken = await AsyncStorage.getItem("userToken");
    } catch (e) {}

    let result = await fetch(Host + "/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: userToken,
      },
    });
    result = await result.json();
    if (
      result.message == "Token blacklisted. Please log in again" ||
      result.message == "Invalid token. Please log in again."
    ) {
      signOut();
      alert("Credentials Expired. Please Login again!");
    }

    setUserData({
      ...userData,
      emailaddress: result.email,
      name: result.name,
      totalsensors: result.sensors.length,
    });
  }

  const { signOut, toggleTheme } = React.useContext(AuthContext);
  const paperTheme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0D8735" barStyle="light-content" />
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <IconF5 name="user" solid color="#0D8735" size={50} />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{userData.name}</Title>
                <Caption style={styles.caption}>
                  {userData.emailaddress}
                </Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {userData.totalsensors}
                </Paragraph>
                <Caption style={styles.caption}>Devices Online</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {userData.totalsensors}
                </Paragraph>
                <Caption style={styles.caption}>Total Devices</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeSec");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="thermometer-outline" color={color} size={size} />
              )}
              label="Monitor"
              onPress={() => {
                props.navigation.navigate("Monitor");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cloud-outline" color={color} size={size} />
              )}
              label="Forecasting"
              onPress={() => {
                props.navigation.navigate("ForeCasting");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="locate-outline" color={color} size={size} />
              )}
              label="Manage Devices"
              onPress={() => {
                props.navigation.navigate("Manage");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="pulse-outline" color={color} size={size} />
              )}
              label="Predictions"
              onPress={() => {
                props.navigation.navigate("Prediction");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} color="#068527" />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
