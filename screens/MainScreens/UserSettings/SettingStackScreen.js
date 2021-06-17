import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();
import Settings from "../SettingScreen";
import EditProfileScreen from "./EditProfileScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import SupportScreen from "./SupportScreen";
import PrivacyScreen from "./PrivacyScreen";
import TermScreen from "./TermScreen";
import HelpScreen from "./HelpScreen";

const SettingStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Settings" component={Settings} />
    <RootStack.Screen name="EditProfile" component={EditProfileScreen} />
    <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    <RootStack.Screen name="Support" component={SupportScreen} />
    <RootStack.Screen name="Privacy" component={PrivacyScreen} />
    <RootStack.Screen name="Terms" component={TermScreen} />
    <RootStack.Screen name="Help" component={HelpScreen} />
  </RootStack.Navigator>
);

export default SettingStackScreen;
