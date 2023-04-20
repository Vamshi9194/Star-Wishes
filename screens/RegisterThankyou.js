import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const RegisterThankyou = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerThankyou}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.registerThankyouChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.registerThankyouItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.signIn, styles.yourFlexBox]}>{`Sign In `}</Text>
      </Pressable>
      <Image
        style={[styles.registerThankyouInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signUpOr, styles.signUpOrTypo]}>
        Sign Up or Register
      </Text>
      <Text style={[styles.yourRegistrationIs, styles.yourFlexBox]}>
        Your Registration is successful
      </Text>
      <Text style={[styles.thankYou, styles.signUpOrTypo]}>Thank You!</Text>
      <Image
        style={styles.thankingVectorIcon}
        resizeMode="cover"
        source={require("../assets/thankingvector.png")}
      />
      <Text style={[styles.yourFormHas, styles.yourFlexBox]}>
        Thankyou for your Interest and Sign in to enjoy the greetings from your
        favorite star
      </Text>
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
  yourFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  signUpOrTypo: {
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "center",
    left: "50%",
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
  registerThankyouChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  registerThankyouItem: {
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
  signIn: {
    top: 9,
    left: 85,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 101,
    height: 22,
    color: Color.pureWhite,
    fontSize: FontSize.size_base,
  },
  button: {
    top: 559,
    left: 50,
  },
  registerThankyouInner: {
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
    color: Color.pureWhite,
  },
  yourRegistrationIs: {
    width: "64.8%",
    top: "54.68%",
    left: "16.8%",
    fontSize: FontSize.size_sm,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.regular12,
  },
  thankYou: {
    marginLeft: -173.5,
    top: 238,
    fontSize: 31,
    color: Color.color1,
    width: 348,
    height: 39,
  },
  thankingVectorIcon: {
    marginLeft: -118.5,
    top: 300,
    width: 225,
    height: 122,
    left: "50%",
    position: "absolute",
  },
  yourFormHas: {
    marginLeft: -154.5,
    top: 488,
    fontSize: 13,
    lineHeight: 20,
    color: Color.disabled,
    width: 299,
    height: 46,
    fontFamily: FontFamily.regular12,
    left: "50%",
  },
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  registerThankyou: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.pureWhite,
  },
});

export default RegisterThankyou;
