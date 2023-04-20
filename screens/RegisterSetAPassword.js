import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const RegisterSetAPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerSetAPassword}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={styles.registerSetAPasswordChild}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.registerSetAPasswordItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password?
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("RegisterThankyou")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={styles.finish}>Finish</Text>
      </Pressable>
      <Image
        style={styles.registerSetAPasswordInner}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signUpOr, styles.textTypo]}>
        Sign Up or Register
      </Text>
      <Text style={[styles.setANew, styles.setANewFlexBox]}>
        Set a new password for your Account
      </Text>
      <Text style={[styles.step33, styles.step33Typo]}>
        <Text style={styles.step}>STEP</Text>
        <Text style={styles.textTypo}> 3/3</Text>
      </Text>
      <View style={[styles.activeWrapper, styles.activeLayout]}>
        <View style={[styles.active, styles.activeLayout]} />
      </View>
      <Text style={[styles.pleaseFillThe, styles.pleaseFillTheTypo]}>
        Please fill the Below Details
      </Text>
      <View style={[styles.formsinputsbasic, styles.formsinputsbasicLayout]}>
        <View style={[styles.bg, styles.rectanglePosition]}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={styles.rectanglePosition}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
          </View>
        </View>
        <Text style={[styles.cooperexamplecom, styles.forgotPasswordTypo]}>
          johndoe@example.com
        </Text>
        <Text style={[styles.setPassword, styles.step33Typo]}>
          Set Password
        </Text>
      </View>
      <View style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}>
        <View style={[styles.bg, styles.rectanglePosition]}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
          </View>
        </View>
        <View style={styles.rectanglePosition}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
          </View>
        </View>
        <Text style={[styles.cooperexamplecom, styles.forgotPasswordTypo]}>
          johndoe@example.com
        </Text>
        <Text style={[styles.setPassword, styles.step33Typo]}>
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
        <Text style={styles.passwordMust}>Password must</Text>
      </View>
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
  forgotPasswordTypo: {
    fontSize: FontSize.size_base,
    display: "none",
    fontFamily: FontFamily.regular12,
    position: "absolute",
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
  setANewFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  step33Typo: {
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    position: "absolute",
  },
  activeLayout: {
    width: 87,
    height: 22,
    position: "absolute",
  },
  pleaseFillTheTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.regular12,
  },
  formsinputsbasicLayout: {
    height: 40,
    width: 286,
    left: 45,
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
  haveLayout: {
    width: 296,
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
  registerSetAPasswordChild: {
    width: 584,
    height: 971,
    top: 0,
    left: 0,
    position: "absolute",
  },
  registerSetAPasswordItem: {
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
    left: "50%",
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    top: 0,
    left: 0,
  },
  finish: {
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
    top: 527,
    left: 53,
  },
  registerSetAPasswordInner: {
    width: 623,
    height: 339,
    top: 0,
    left: 0,
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
  setANew: {
    width: "85.07%",
    top: "26.35%",
    left: "7.47%",
    fontSize: FontSize.size_sm,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.regular12,
  },
  step: {
    fontFamily: FontFamily.regular12,
  },
  step33: {
    top: 173,
    left: 265,
    color: Color.color1,
    textAlign: "left",
  },
  active: {
    borderRadius: Border.br_8xl,
    borderStyle: "solid",
    borderColor: "#aa9eaf",
    borderWidth: 0.5,
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
    color: Color.grey,
    width: 152,
    height: 16,
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
  },
  bg: {
    display: "none",
  },
  rectangle1: {
    backgroundColor: Color.slategray_100,
  },
  cooperexamplecom: {
    marginTop: -12,
    top: "50%",
    left: 16,
    color: Color.primaryColor,
    textAlign: "left",
    display: "none",
    fontFamily: FontFamily.regular12,
  },
  setPassword: {
    top: 12,
    left: 12,
    color: Color.bodyLight,
    textAlign: "left",
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
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    left: 0,
  },
  passwordMust: {
    width: "33.03%",
    left: "2.4%",
    lineHeight: 18,
    color: Color.primaryColor,
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    position: "absolute",
  },
  haveAtLeastOneCapitalLettParent: {
    top: 381,
    height: 115,
    left: 45,
    width: 296,
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
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  registerSetAPassword: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default RegisterSetAPassword;
