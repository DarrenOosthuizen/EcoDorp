import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import RootStackScreen from "./screens/AuthenticationScreens/RootStackScreen";
import AsynceStorage from '@react-native-community/async-storage';

import {
  HomeStackScreen,
  MonitorStackScreen,
  RoomLayoutStackScreen,
  ManageStackScreen,
  PredictionStackScreen,
  SettingsStackScreen,
} from "./screens/DrawerComponents/DrawerComponents";

import { DrawerContent } from "./screens/DrawerComponents/DrawerContent";
import { AuthContext } from "./components/context";

const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) =>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName : action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          userName : null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName : action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  const[loginState, dispatch] = React.useReducer(loginReducer, initialLoginState) ;
  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      let userToken;
      userToken = null;
      if(userName == 'Admin' && password == 'Admin')
      {
        userToken = 'thisiswhatscalledarandomtokenforthememe';
        try {
          await AsynceStorage.setItem('userToken' , userToken)
        }
        catch(e)
        {
          console.log(e);
        }
        
      }
      dispatch({type : 'LOGIN',id: userName, token: userToken});
    },
    signOut: async() => {
      try {
        await AsynceStorage.removeItem('userToken')
      }
      catch(e)
      {
        console.log(e);
      }
      dispatch({type : 'LOGOUT'});
    },
    signUp: () => {
      setUserToken("randomtoken");
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsynceStorage.getItem('userToken')
      }
      catch(e)
      {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={DarkTheme}>
          {loginState.userToken != null ? (
            <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={HomeStackScreen} />
          </Drawer.Navigator>
          )
        :
          <RootStackScreen />
        }
          
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
