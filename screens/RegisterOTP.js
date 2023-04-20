import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const RegisterOTP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerOtp}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.registerOtpChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.registerOtpItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("RegisterOTPError")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.next}>Next</Text>
      </Pressable>
      <Image
        style={[styles.registerOtpInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signUpOr, styles.textTypo]}>
        Sign Up or Register
      </Text>
      <Pressable
        style={[styles.framePressable, styles.frameChildLayout]}
        onPress={() => navigation.navigate("RegisterOTPError")}
      />
      <Pressable
        style={[styles.registerOtpChild1, styles.frameChildLayout]}
        onPress={() => navigation.navigate("RegisterOTPError")}
      />
      <View style={[styles.frameView, styles.frameChildLayout]} />
      <View style={[styles.registerOtpChild2, styles.frameChildLayout]} />
      <View style={[styles.registerOtpChild3, styles.frameChildLayout]} />
      <View style={[styles.registerOtpChild4, styles.frameChildLayout]} />
      <Text style={[styles.enterOtp, styles.step23Typo]}>Enter OTP</Text>
      <Text
        style={[styles.enterOtpSent, styles.signUpOrFlexBox]}
      >{`Enter OTP sent to arunreddy3@gmail.com 
for verification`}</Text>
      <Text style={[styles.step23, styles.step23Typo]}>
        <Text style={styles.step}>STEP</Text>
        <Text style={styles.textTypo}> 2/3</Text>
      </Text>
      <View style={[styles.activeWrapper, styles.activeLayout]}>
        <View style={[styles.active, styles.activeLayout]} />
      </View>
      <Text style={[styles.pleaseFillThe, styles.signUpOrFlexBox]}>
        Please fill the Below Details
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-34393.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  buttonLayout: {
    height: 44,
    width: 270,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
  },
  frameChildLayout: {
    height: 37,
    width: 37,
    borderWidth: 1,
    borderColor: "#abaab6",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    top: 316,
    borderStyle: "solid",
    position: "absolute",
  },
  step23Typo: {
    textAlign: "left",
    fontSize: FontSize.regular12_size,
    position: "absolute",
  },
  signUpOrFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  activeLayout: {
    width: 87,
    height: 22,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  homeIndicator: {
    top: 778,
    height: 34,
  },
  registerOtpChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  registerOtpItem: {
    top: 0,
    height: 812,
  },
  forgotPassword: {
    marginLeft: 136.29,
    top: 412,
    color: Color.secondaryColor,
    textAlign: "right",
    width: 163,
    display: "none",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    top: 0,
    left: 0,
  },
  next: {
    top: 9,
    left: 85,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 101,
    height: 22,
    textAlign: "center",
    color: Color.pureWhite,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  button: {
    top: 381,
    left: 53,
  },
  registerOtpInner: {
    width: 623,
    height: 339,
    top: 0,
    position: "absolute",
  },
  signUpOr: {
    marginLeft: -115.5,
    top: 55,
    fontSize: FontSize.size_3xl,
    width: 231,
    height: 31,
    textAlign: "center",
    position: "absolute",
    color: Color.pureWhite,
    fontWeight: "600",
    left: "50%",
  },
  framePressable: {
    left: 61,
  },
  registerOtpChild1: {
    left: 106,
  },
  frameView: {
    left: 151,
  },
  registerOtpChild2: {
    left: 196,
  },
  registerOtpChild3: {
    left: 241,
  },
  registerOtpChild4: {
    left: 286,
  },
  enterOtp: {
    top: 289,
    left: 164,
    fontFamily: FontFamily.nunitoSansRegular,
    color: Color.grey,
  },
  enterOtpSent: {
    width: "85.07%",
    top: "27.59%",
    left: "8.27%",
    fontSize: FontSize.size_sm,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.regular12,
  },
  step: {
    fontFamily: FontFamily.regular12,
  },
  step23: {
    top: 173,
    left: 265,
    color: Color.color1,
  },
  active: {
    borderRadius: Border.br_8xl,
    borderColor: "#aa9eaf",
    borderWidth: 0.5,
    borderStyle: "solid",
    width: 87,
    top: 0,
    left: 0,
  },
  activeWrapper: {
    top: 171,
    left: 245,
  },
  pleaseFillThe: {
    marginLeft: -149.5,
    top: 175,
    fontSize: FontSize.size_3xs,
    width: 152,
    height: 16,
    color: Color.grey,
    fontFamily: FontFamily.regular12,
    left: "50%",
  },
  vectorIcon: {
    height: "1.87%",
    width: "2.45%",
    top: "7.81%",
    right: "86.77%",
    bottom: "90.32%",
    left: "10.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  registerOtp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.pureWhite,
  },
});

export default RegisterOTP;
