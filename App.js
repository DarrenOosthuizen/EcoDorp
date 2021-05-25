import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import RootStackScreen from "./screens/AuthenticationScreens/RootStackScreen";

import {HomeStackScreen,MonitorStackScreen,RoomLayoutStackScreen,ManageStackScreen,PredictionStackScreen,SettingsStackScreen} from './screens/DrawerComponents/DrawerComponents'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Monitor" component={MonitorStackScreen} />
        <Drawer.Screen name="Room Layout" component={RoomLayoutStackScreen} /> 
        <Drawer.Screen name="Manage Devices" component={ManageStackScreen} />
        <Drawer.Screen name="Predictions" component={PredictionStackScreen} />
        <Drawer.Screen name="Setting" component={SettingsStackScreen} />
        
      </Drawer.Navigator>
     {/*<RootStackScreen />*/}
    </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
