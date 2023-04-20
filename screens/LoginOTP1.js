import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginOTP1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginOtp}>
      <View style={[styles.homeIndicator, styles.image8IconPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.loginOtpChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.loginOtpItem, styles.image8IconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.cooperexamplecomFlexBox]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.cooperexamplecomFlexBox]}>
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
      <View style={[styles.homeIndicator, styles.image8IconPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.haveAnAccountContainer, styles.enterOtpSentTypo]}>
        <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
        <Text style={[styles.signUp, styles.textTypo]}>Sign Up</Text>
      </Text>
      <Image
        style={[styles.image8Icon, styles.image8IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Text style={[styles.signUpOr, styles.signTypo]}>
        Sign Up or Register
      </Text>
      <View style={[styles.bg4, styles.bg3Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom2, styles.cooperexamplecomFlexBox]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg5, styles.bg3Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom3, styles.cooperexamplecomFlexBox]}>
        johndoe@example.com
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.otpVerification, styles.nextFlexBox]}>
        OTP Verification
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("LoginOTP")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
      </Pressable>
      <View style={[styles.frameView, styles.loginChildLayout]} />
      <View style={[styles.loginOtpChild1, styles.loginChildLayout]} />
      <View style={[styles.loginOtpChild2, styles.loginChildLayout]} />
      <View style={[styles.loginOtpChild3, styles.loginChildLayout]} />
      <View style={[styles.loginOtpChild4, styles.loginChildLayout]} />
      <View style={[styles.loginOtpChild5, styles.loginChildLayout]} />
      <Text style={[styles.enterOtp, styles.cooperexamplecomFlexBox]}>
        Enter OTP
      </Text>
      <Text
        style={[styles.enterOtpSent, styles.enterOtpSentTypo]}
      >{`Enter OTP sent to arunreddy3@gmail.com 
for verification`}</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-343933.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image8IconPosition: {
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
  cooperexamplecomFlexBox: {
    textAlign: "left",
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
  enterOtpSentTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  nextFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  buttonLayout: {
    height: 44,
    width: 270,
    position: "absolute",
  },
  loginChildLayout: {
    height: 37,
    width: 37,
    borderWidth: 1,
    borderColor: "#abaab6",
    borderStyle: "solid",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    top: 316,
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
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
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
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
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
  image8Icon: {
    top: 525,
    height: 291,
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
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
  },
  bg5: {
    top: "34.11%",
    bottom: "60.96%",
  },
  cooperexamplecom3: {
    marginTop: -121,
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
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
  otpVerification: {
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
  next: {
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
  frameView: {
    left: 61,
  },
  loginOtpChild1: {
    left: 106,
  },
  loginOtpChild2: {
    left: 151,
  },
  loginOtpChild3: {
    left: 196,
  },
  loginOtpChild4: {
    left: 241,
  },
  loginOtpChild5: {
    left: 286,
  },
  enterOtp: {
    top: 289,
    left: 164,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.nunitoSansRegular,
    color: Color.grey,
  },
  enterOtpSent: {
    width: "85.07%",
    top: "27.59%",
    left: "8.27%",
    color: Color.midnightblue_100,
    fontFamily: FontFamily.regular12,
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

export default LoginOTP1;
