import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginOTP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginOtp}>
      <View style={[styles.homeIndicator, styles.loginOtpItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.loginOtpChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.loginOtpItem, styles.loginOtpItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg2, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>········</Text>
      <Image
        style={[styles.iconsbasichide, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconsbasichide.png")}
      />
      <View style={[styles.bg3, styles.bg3Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>········</Text>
      <Image
        style={[styles.iconChevronDown, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconchevrondown.png")}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Image
        style={[styles.loginOtpInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
      <View style={[styles.homeIndicator, styles.loginOtpItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.haveAnAccountContainer, styles.yourPasswordGotTypo]}>
        <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
        <Text style={[styles.signUp, styles.textTypo]}>Sign Up</Text>
      </Text>
      <Text style={[styles.signUpOr, styles.signTypo]}>
        Sign Up or Register
      </Text>
      <View style={[styles.bg4, styles.bg3Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom2, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg5, styles.bg3Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom3, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.passwordUpdated, styles.loginFlexBox]}>
        Password Updated
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.login, styles.loginFlexBox]}>Login</Text>
      </Pressable>
      <Text style={[styles.yourPasswordGot, styles.yourPasswordGotTypo]}>
        Your password got successfully updated
      </Text>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-343933.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginOtpItemPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  bgPosition: {
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cooperexamplecomTypo: {
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
  },
  iconsbasichidePosition: {
    height: 20,
    width: 20,
    right: 57,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  bg3Position: {
    height: "4.93%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  signTypo: {
    height: 31,
    width: 231,
    fontSize: FontSize.size_3xl,
    top: 55,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  yourPasswordGotTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  loginFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  buttonLayout: {
    height: 44,
    width: 270,
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
  loginOtpChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  loginOtpItem: {
    top: 0,
    height: 812,
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  bg: {
    top: "19.95%",
    bottom: "75%",
    height: "5.05%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -235,
  },
  bg1: {
    top: "26.97%",
    bottom: "67.98%",
    height: "5.05%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -178,
  },
  bg2: {
    height: "5.17%",
    top: "33.99%",
    bottom: "60.84%",
  },
  text: {
    marginTop: -139,
    letterSpacing: 1.2,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  iconsbasichide: {
    marginTop: -119,
  },
  bg3: {
    top: "42%",
    bottom: "53.08%",
  },
  text1: {
    marginTop: -75,
    letterSpacing: 1.2,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  iconChevronDown: {
    marginTop: -55,
    overflow: "hidden",
  },
  forgotPassword: {
    marginLeft: 136.29,
    top: 412,
    color: Color.secondaryColor,
    textAlign: "right",
    width: 163,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  loginOtpInner: {
    width: 623,
    height: 339,
    top: 0,
    position: "absolute",
  },
  signIn: {
    marginLeft: -115.5,
  },
  dontHaveAn: {
    color: Color.grey,
    fontFamily: FontFamily.regular12,
  },
  signUp: {
    color: Color.darkslategray_200,
  },
  haveAnAccountContainer: {
    top: 745,
    left: 73,
    letterSpacing: 0,
    lineHeight: 22,
    width: 229,
    height: 19,
  },
  signUpOr: {
    marginLeft: -579.5,
  },
  bg4: {
    top: "26.72%",
    bottom: "68.35%",
  },
  cooperexamplecom2: {
    marginTop: -181,
  },
  bg5: {
    top: "34.11%",
    bottom: "60.96%",
  },
  cooperexamplecom3: {
    marginTop: -121,
  },
  vectorIcon: {
    height: "1.87%",
    width: "2.45%",
    top: "7.81%",
    right: "85.71%",
    bottom: "90.32%",
    left: "11.84%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordUpdated: {
    marginLeft: -173.5,
    top: 168,
    fontSize: FontSize.size_lg,
    color: Color.color1,
    width: 348,
    height: 39,
    textAlign: "center",
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    left: "50%",
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    top: 0,
    left: 0,
  },
  login: {
    top: 9,
    left: 85,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 101,
    height: 22,
    color: Color.pureWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 381,
    left: 53,
  },
  yourPasswordGot: {
    width: "85.07%",
    top: "27.59%",
    left: "8.27%",
    color: Color.midnightblue_100,
    fontFamily: FontFamily.regular12,
  },
  frameIcon: {
    top: 255,
    left: 101,
    width: 176,
    height: 107,
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
  loginOtp: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default LoginOTP;
