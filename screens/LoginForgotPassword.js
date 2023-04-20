import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginForgotPassword}>
      <Image
        style={styles.loginForgotPasswordChild}
        resizeMode="cover"
        source={require("../assets/group-17171.png")}
      />
      <Image
        style={[styles.loginForgotPasswordItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7648.png")}
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
        source={require("../assets/iconsbasichide1.png")}
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
      <Text style={[styles.forgotPassword, styles.cooperexamplecomTypo1]}>
        Forgot Password?
      </Text>
      <Image
        style={styles.loginForgotPasswordInner}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.haveAnAccountContainer, styles.setANewTypo]}>
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
      <Text style={[styles.setANew, styles.setANewTypo]}>
        Set a new password for your Account
      </Text>
      <View style={[styles.formsinputsbasic, styles.formsinputsbasicLayout]}>
        <View style={[styles.bg6, styles.rectanglePosition]}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={styles.rectanglePosition}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle7, styles.rectanglePosition]} />
          </View>
        </View>
        <Text style={[styles.cooperexamplecom4, styles.cooperexamplecomTypo]}>
          johndoe@example.com
        </Text>
        <Text style={[styles.setPassword, styles.passwordTypo]}>
          Set Password
        </Text>
      </View>
      <View style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}>
        <View style={[styles.bg6, styles.rectanglePosition]}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={styles.rectanglePosition}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle7, styles.rectanglePosition]} />
          </View>
        </View>
        <Text style={[styles.cooperexamplecom4, styles.cooperexamplecomTypo]}>
          johndoe@example.com
        </Text>
        <Text style={[styles.setPassword, styles.passwordTypo]}>
          Confirm Password
        </Text>
      </View>
      <View style={[styles.haveAtLeastOneCapitalLettParent, styles.haveLayout]}>
        <Text style={[styles.haveAtLeastContainer, styles.haveLayout]}>
          <Text
            style={styles.haveAtLeast}
          >{`Have at least one capital letter, one lower case letter
Have at least one special characher & number
      `}</Text>
          <Text style={styles.exAbcd123}>{`Ex: Abcd@123
`}</Text>
          <Text style={styles.haveAtLeast}>{`Not be same as the email
Have atleast 8 characters
Not be same as the last three passwords`}</Text>
        </Text>
        <Text style={[styles.passwordMust, styles.passwordTypo]}>
          Password must
        </Text>
      </View>
      <Text style={[styles.forgotPassword1, styles.passwordFlexBox]}>
        Forgot Password !
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("LoginOTP1")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.resetPassword, styles.passwordFlexBox]}>
          Reset Password
        </Text>
      </Pressable>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-343933.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    top: 778,
    position: "absolute",
  },
  bgPosition: {
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    display: "none",
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  cooperexamplecomTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regular12,
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
  cooperexamplecomTypo1: {
    fontSize: FontSize.size_base,
    display: "none",
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
  setANewTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  formsinputsbasicLayout: {
    height: 40,
    width: 286,
    left: 45,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    position: "absolute",
  },
  haveLayout: {
    width: 296,
    position: "absolute",
  },
  passwordFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  buttonLayout: {
    height: 44,
    width: 270,
    position: "absolute",
  },
  loginForgotPasswordChild: {
    width: 584,
    height: 971,
    left: 0,
    top: 778,
    position: "absolute",
  },
  loginForgotPasswordItem: {
    height: 812,
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
  },
  bg: {
    top: "19.95%",
    bottom: "75%",
    display: "none",
    height: "5.05%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -235,
    color: Color.primaryColor,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
    left: 62,
    textAlign: "left",
    top: "50%",
  },
  bg1: {
    top: "26.97%",
    bottom: "67.98%",
    display: "none",
    height: "5.05%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -178,
    color: Color.primaryColor,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
    left: 62,
    textAlign: "left",
    top: "50%",
  },
  bg2: {
    height: "5.17%",
    top: "33.99%",
    bottom: "60.84%",
    display: "none",
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
    left: "50%",
    fontFamily: FontFamily.regular12,
  },
  loginForgotPasswordInner: {
    width: 623,
    height: 339,
    top: 0,
    left: 0,
    position: "absolute",
  },
  signIn: {
    marginLeft: -115.5,
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
    height: 34,
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
    color: Color.primaryColor,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
    left: 62,
    textAlign: "left",
    top: "50%",
  },
  bg5: {
    top: "34.11%",
    bottom: "60.96%",
  },
  cooperexamplecom3: {
    marginTop: -121,
    color: Color.primaryColor,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
    left: 62,
    textAlign: "left",
    top: "50%",
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
  setANew: {
    width: "85.07%",
    top: "26.35%",
    left: "7.47%",
    color: Color.midnightblue_100,
    fontFamily: FontFamily.regular12,
  },
  bg6: {
    display: "none",
  },
  rectangle7: {
    backgroundColor: Color.slategray_100,
  },
  cooperexamplecom4: {
    marginTop: -12,
    left: 16,
    color: Color.primaryColor,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
    top: "50%",
    textAlign: "left",
  },
  setPassword: {
    top: 12,
    left: 12,
    color: Color.bodyLight,
    fontFamily: FontFamily.regular12,
  },
  formsinputsbasic: {
    top: 256,
  },
  formsinputsbasic1: {
    top: 316,
  },
  haveAtLeast: {
    color: Color.disabled,
  },
  exAbcd123: {
    color: Color.primaryColor,
  },
  haveAtLeastContainer: {
    top: 25,
    fontSize: FontSize.size_3xs,
    lineHeight: 15,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    left: 0,
  },
  passwordMust: {
    width: "33.03%",
    left: "2.4%",
    lineHeight: 18,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    color: Color.primaryColor,
    top: "0%",
    fontSize: FontSize.regular12_size,
  },
  haveAtLeastOneCapitalLettParent: {
    top: 381,
    height: 115,
    left: 45,
    width: 296,
  },
  forgotPassword1: {
    marginLeft: -173.5,
    top: 168,
    fontSize: FontSize.size_lg,
    color: Color.color1,
    width: 348,
    height: 39,
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
  resetPassword: {
    top: 9,
    left: 60,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 151,
    height: 22,
    color: Color.pureWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 527,
    left: 53,
  },
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  loginForgotPassword: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default LoginForgotPassword;
