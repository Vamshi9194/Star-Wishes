import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const RegisterOTPError = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerOtpError}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.registerOtpErrorChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.registerOtpErrorItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("RegisterSetAPassword")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.next}>Next</Text>
      </Pressable>
      <Image
        style={[styles.registerOtpErrorInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signUpOr, styles.text6Typo]}>
        Sign Up or Register
      </Text>
      <View style={[styles.frameView, styles.frameWrapperLayout]} />
      <View style={[styles.wrapper, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textTypo]}>5</Text>
      </View>
      <View style={[styles.container, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textTypo]}>4</Text>
      </View>
      <View style={[styles.frame, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textTypo]}>0</Text>
      </View>
      <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textTypo]}>7</Text>
      </View>
      <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textTypo]}>7</Text>
      </View>
      <Text style={[styles.enterOtp, styles.textTypo]}>Enter OTP</Text>
      <Text style={[styles.text5, styles.textTypo]}>8</Text>
      <Text
        style={[styles.enterOtpSent, styles.enterOtpSentTypo]}
      >{`Enter OTP sent to arunreddy3@gmail.com 
for verification`}</Text>
      <Text style={[styles.resendTheNew, styles.step23Clr]}>
        Resend the new OTP
      </Text>
      <Text style={[styles.step23, styles.step23Clr]}>
        <Text style={styles.step}>STEP</Text>
        <Text style={styles.text6Typo}> 2/3</Text>
      </Text>
      <View style={[styles.activeWrapper, styles.activeLayout]}>
        <View style={[styles.active, styles.activeLayout]} />
      </View>
      <Text style={[styles.pleaseFillThe, styles.textClr]}>
        Please fill the Below Details
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.incorrectOtp, styles.textTypo]}>Incorrect OTP</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
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
  text6Typo: {
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
  },
  frameWrapperLayout: {
    height: 37,
    width: 37,
    borderWidth: 1,
    borderColor: "#ff6262",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    top: 316,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.regular12_size,
  },
  enterOtpSentTypo: {
    fontSize: FontSize.size_sm,
    width: "85.07%",
    textAlign: "center",
    fontFamily: FontFamily.regular12,
  },
  step23Clr: {
    color: Color.color1,
    position: "absolute",
  },
  activeLayout: {
    width: 87,
    height: 22,
    position: "absolute",
  },
  textClr: {
    color: Color.grey,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  registerOtpErrorChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  registerOtpErrorItem: {
    top: 0,
    height: 812,
    width: 375,
  },
  forgotPassword: {
    marginLeft: 136.29,
    top: 412,
    textAlign: "right",
    width: 163,
    display: "none",
    color: Color.secondaryColor,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
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
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 101,
    height: 22,
    textAlign: "center",
    color: Color.pureWhite,
    left: 85,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  button: {
    top: 428,
    left: 53,
  },
  registerOtpErrorInner: {
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
    left: "50%",
    color: Color.pureWhite,
    fontWeight: "600",
    position: "absolute",
  },
  frameView: {
    left: 61,
  },
  text: {
    top: 11,
    left: 15,
    color: Color.grey,
    position: "absolute",
    fontFamily: FontFamily.nunitoSansRegular,
    textAlign: "left",
    fontSize: FontSize.regular12_size,
  },
  wrapper: {
    left: 106,
  },
  container: {
    left: 151,
  },
  frame: {
    left: 196,
  },
  wrapper1: {
    left: 241,
  },
  wrapper2: {
    left: 286,
  },
  enterOtp: {
    top: 289,
    left: 164,
    color: Color.grey,
    position: "absolute",
    fontFamily: FontFamily.nunitoSansRegular,
    textAlign: "left",
    fontSize: FontSize.regular12_size,
  },
  text5: {
    top: 327,
    left: 76,
    color: Color.grey,
    position: "absolute",
    fontFamily: FontFamily.nunitoSansRegular,
    textAlign: "left",
    fontSize: FontSize.regular12_size,
  },
  enterOtpSent: {
    top: "27.34%",
    left: "8.27%",
    color: Color.midnightblue_100,
    position: "absolute",
  },
  resendTheNew: {
    top: "48.89%",
    left: "7.47%",
    textDecoration: "underline",
    fontSize: FontSize.size_sm,
    width: "85.07%",
    textAlign: "center",
    fontFamily: FontFamily.regular12,
  },
  step: {
    fontFamily: FontFamily.regular12,
  },
  step23: {
    top: 173,
    left: 265,
    textAlign: "left",
    fontSize: FontSize.regular12_size,
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
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.regular12,
  },
  vectorIcon: {
    height: "1.87%",
    width: "2.45%",
    top: "7.81%",
    right: "86.77%",
    bottom: "90.32%",
    left: "10.77%",
  },
  incorrectOtp: {
    top: 364,
    textAlign: "left",
    fontSize: FontSize.regular12_size,
    left: 85,
    color: Color.secondaryColor,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.64%",
    width: "3.56%",
    top: "45.07%",
    right: "79.64%",
    bottom: "53.28%",
    left: "16.8%",
  },
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  registerOtpError: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.pureWhite,
    height: 812,
  },
});

export default RegisterOTPError;
