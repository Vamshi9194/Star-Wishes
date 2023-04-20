const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import FromFormToHere from "./screens/FromFormToHere";
import MovementsToHere from "./screens/MovementsToHere";
import AnniversaryForm from "./screens/AnniversaryForm";
import Wedding from "./screens/Wedding";
import NewBorn from "./screens/NewBorn";
import Birthday from "./screens/Birthday";
import Anniversary from "./screens/Anniversary";
import WhatsSpecial from "./screens/WhatsSpecial";
import Home from "./screens/Home";
import PersonalDetails from "./screens/PersonalDetails";
import Profile from "./screens/Profile";
import CelebrityPage from "./screens/CelebrityPage";
import CelebrityPage1 from "./screens/CelebrityPage1";
import CelebrityPage2 from "./screens/CelebrityPage2";
import LandingPage from "./screens/LandingPage";
import LoginOTP from "./screens/LoginOTP";
import LoginOTP1 from "./screens/LoginOTP1";
import LoginForgotPassword from "./screens/LoginForgotPassword";
import SignIn from "./screens/SignIn";
import Register from "./screens/Register";
import RegisterThankyou from "./screens/RegisterThankyou";
import RegisterSetAPassword from "./screens/RegisterSetAPassword";
import RegisterOTPError from "./screens/RegisterOTPError";
import RegisterOTP from "./screens/RegisterOTP";
import Register1 from "./screens/Register1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    "Plus Jakarta Sans_semibold": require("./assets/fonts/Plus_Jakarta_Sans_semibold.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    // "Sk-Modernist_regular": require("./assets/fonts/Sk-Modernist_regular.ttf"),
    "Nunito Sans_regular": require("./assets/fonts/Nunito_Sans_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FromFormToHere"
              component={FromFormToHere}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MovementsToHere"
              component={MovementsToHere}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnniversaryForm"
              component={AnniversaryForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wedding"
              component={Wedding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewBorn"
              component={NewBorn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Birthday"
              component={Birthday}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Anniversary"
              component={Anniversary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WhatsSpecial"
              component={WhatsSpecial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalDetails"
              component={PersonalDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CelebrityPage"
              component={CelebrityPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CelebrityPage1"
              component={CelebrityPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CelebrityPage2"
              component={CelebrityPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginOTP"
              component={LoginOTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginOTP1"
              component={LoginOTP1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginForgotPassword"
              component={LoginForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterThankyou"
              component={RegisterThankyou}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterSetAPassword"
              component={RegisterSetAPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterOTPError"
              component={RegisterOTPError}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterOTP"
              component={RegisterOTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register1"
              component={Register1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
