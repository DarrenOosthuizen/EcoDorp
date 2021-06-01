import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, ActivityIndicator } from "react-native";
import RootStackScreen from "./screens/AuthenticationScreens/RootStackScreen";
import { HomeStackScreen } from "./screens/DrawerComponents/DrawerComponents";
import { DrawerContent } from "./screens/DrawerComponents/DrawerContent";
import { AuthContext } from "./components/context";

const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);


  const readData = async () => {
    try {
      const userTheme = await AsyncStorage.getItem('userTheme')
  
      alert(userTheme)
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const CustomerDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      backgroundColor: "#ffffff",
      text: "#333333",
      splashbackground: "#61B61C",
    },
  };

  const CustomerDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...PaperDarkTheme.colors,
      backgroundColor: "#333333",
      text: "#ffffff",
      splashbackground: "#333333",
    },
  };

  const theme = isDarkTheme ? CustomerDarkTheme : CustomerDefaultTheme;
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, logintoken) => {
        try {
          await AsyncStorage.setItem("userToken", logintoken);
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: "LOGIN", id: userName, token: logintoken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("randomtoken");
        setIsLoading(false);
      },
      toggleTheme: () => {
        console.log(isDarkTheme);
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
        console.log(!isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
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
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken != null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="Home" component={HomeStackScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
