import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.homeChild, styles.homePosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.homeItem, styles.homePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Register1")}
      >
        <View style={styles.buttonChild} />
        <Text style={styles.getStarted}>Get Started</Text>
      </Pressable>
      <Image
        style={styles.homeInner}
        resizeMode="cover"
        source={require("../assets/group-343931.png")}
      />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={styles.musiciconvisibilityHidden}
        resizeMode="cover"
        source={require("../assets/musiciconvisibilityhidden.png")}
      />
      <Text style={[styles.seeHowIt, styles.seeHowItTypo]}>
        See how it works
      </Text>
      <Text
        style={[styles.celebrateEventsOf, styles.seeHowItTypo]}
      >{`Celebrate events of lifetime

Gift a Star Wish `}</Text>
      <Pressable
        style={[styles.buttonRent, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <Text style={[styles.allTheBest, styles.allTheBestTypo]}>
          All the Best
        </Text>
      </Pressable>
      <Pressable
        style={[styles.buttonRent1, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <View style={styles.buttonRentInner}>
          <View style={styles.buttonRentInner}>
            <View style={styles.buttonRentInner}>
              <View style={styles.buttonRentInner}>
                <Text style={styles.allTheBestTypo}>Anniversary</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  seeHowItTypo: {
    alignItems: "center",
    textAlign: "left",
    color: Color.color1,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    display: "flex",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  allTheBestTypo: {
    fontFamily: FontFamily.regular12,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.pureWhite,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  homeIndicator: {
    top: 778,
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeChild: {
    width: 584,
    height: 971,
  },
  homeItem: {
    width: 375,
    height: 812,
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    height: 56,
    width: 240,
    top: 0,
    left: 0,
    position: "absolute",
  },
  getStarted: {
    top: 16,
    left: 67,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 107,
    height: 20,
    textAlign: "center",
    color: Color.pureWhite,
    position: "absolute",
  },
  button: {
    top: 696,
    left: 68,
    height: 56,
    width: 240,
    position: "absolute",
  },
  homeInner: {
    top: 8,
    right: 8,
    width: 367,
    height: 21,
    position: "absolute",
  },
  frameIcon: {
    top: 62,
    left: 78,
    width: 245,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  musiciconvisibilityHidden: {
    height: "2.96%",
    width: "6.4%",
    top: "81.28%",
    right: "73.6%",
    bottom: "15.76%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  seeHowIt: {
    top: 665,
    left: 111,
    width: 189,
    height: 19,
  },
  celebrateEventsOf: {
    top: 167,
    left: 26,
    width: 327,
    height: 329,
  },
  allTheBest: {
    width: 89,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.regular12,
  },
  buttonRent: {
    right: 233,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    height: 32,
    width: 115,
    borderRadius: Border.br_15xl,
    top: 603,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.color2,
    position: "absolute",
  },
  buttonRentInner: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  buttonRent1: {
    right: 38,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    height: 32,
    width: 115,
    borderRadius: Border.br_15xl,
    top: 603,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.color2,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.pureWhite,
  },
});

export default Home;
