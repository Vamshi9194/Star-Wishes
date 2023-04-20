import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#fff", "#adadad"]}
    >
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.backgroundIcon, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    left: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.pureWhite,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    width: 375,
    height: 34,
  },
  backgroundIcon: {
    top: 0,
    width: 780,
    height: 1005,
    opacity: 0.1,
  },
  frameIcon: {
    top: 379,
    left: 78,
    width: 245,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default SplashScreen;
