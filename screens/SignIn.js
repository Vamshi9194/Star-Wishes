import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={[styles.homeIndicator, styles.signInItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.signInChild, styles.signChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.signInItem, styles.signInItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg2, styles.bgPosition]}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>········</Text>
      <Image
        style={[styles.iconsbasichide, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconsbasichide.png")}
      />
      <View style={styles.bg3}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
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
        style={[styles.signInInner, styles.signChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
      <View style={[styles.homeIndicator, styles.signInItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.haveAnAccountContainer}>
        <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
        <Text style={[styles.signUp, styles.textTypo]}>Sign Up</Text>
      </Text>
      <View style={[styles.buttonfilledgoogle, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg4, styles.bg4Position]} />
          <Image
            style={[styles.bgIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Image
            style={[styles.googleIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/googleicon.png")}
          />
          <Text style={[styles.loginWithGoogle, styles.loginLayout]}>
            Sign In with Google
          </Text>
        </View>
      </View>
      <View style={[styles.buttonfilledtextIcon, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={styles.bg5} />
          <Image
            style={[styles.fbIcon, styles.fbIconLayout]}
            resizeMode="cover"
            source={require("../assets/fb.png")}
          />
          <Text style={[styles.loginWithFacebook, styles.loginLayout]}>
            Sign In with facebook
          </Text>
        </View>
      </View>
      <View style={[styles.buttonoutlinetextIcon, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg6, styles.bg4Position]} />
          <Image
            style={[styles.icon24email, styles.fbIconLayout]}
            resizeMode="cover"
            source={require("../assets/icon24email.png")}
          />
          <View style={styles.rectangle4} />
          <Text style={[styles.loginWithEmail, styles.loginLayout]}>
            Sign In with Email
          </Text>
          <Image
            style={[styles.pathIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
        </View>
      </View>
      <Text style={[styles.or, styles.cooperexamplecomTypo]}>or</Text>
      <Text style={[styles.signUpOr, styles.signTypo]}>
        Sign Up or Register
      </Text>
      <View style={[styles.bg7, styles.bg7Position]}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={[styles.rectangle6, styles.rectangleBg]} />
      <View style={[styles.iconlineeyeOn, styles.iconlineeyeOnPosition]} />
      <Text style={[styles.cooperexamplecom2, styles.iconlineeyeOnPosition]}>
        johndoe@example.com
      </Text>
      <View style={[styles.enterMobileNumberParent, styles.parentPosition]}>
        <Text style={[styles.enterMobileNumber, styles.rememberMeTypo]}>
          Enter Mobile Number
        </Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/16.png")}
        />
      </View>
      <View style={[styles.bg8, styles.bg8Position]}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={styles.bg8Position}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle8, styles.rectangleBg]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom3, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.yourPasswordParent, styles.parentPosition]}>
        <Text style={[styles.yourPassword, styles.rememberMeTypo]}>
          Your Password
        </Text>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/34.png")}
        />
      </View>
      <Image
        style={[styles.hideIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/hide.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonIconLayout]}
        onPress={() => navigation.navigate("LandingPage")}
      >
        <View style={[styles.buttonChild, styles.buttonIconLayout]} />
        <Text style={styles.signIn2}>Sign In</Text>
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-34392.png")}
      />
      <View style={[styles.activeParent, styles.activeLayout]}>
        <View style={[styles.active, styles.activeLayout]} />
        <Text style={styles.useMailId}>Use Mail Id</Text>
      </View>
      <Text style={styles.welcomeBackTo}>
        Welcome back to Star Wieshes. Have a good time
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.signInChild1, styles.lineViewLayout]} />
      <Pressable
        style={styles.rememberMePosition}
        onPress={() => navigation.navigate("LoginForgotPassword")}
      >
        <Text style={styles.forgotPassword2}>Forgot Password?</Text>
      </Pressable>
      <Text style={[styles.rememberMe, styles.rememberMePosition]}>
        Remember Me
      </Text>
      <Image
        style={[styles.signInChild2, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/group-343933.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInItemPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  signChildPosition: {
    left: 0,
    top: 0,
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
    top: "0%",
    height: "100%",
    width: "100%",
  },
  cooperexamplecomTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
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
  signTypo: {
    height: 31,
    width: 231,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    top: 55,
    textAlign: "center",
    color: Color.pureWhite,
    left: "50%",
    position: "absolute",
  },
  buttonIconLayout: {
    height: 44,
    width: 270,
    position: "absolute",
  },
  bg4Position: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_13xl_5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginLayout: {
    height: 21,
    position: "absolute",
  },
  fbIconLayout: {
    left: "4.37%",
    right: "86.89%",
    width: "8.74%",
    height: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bg7Position: {
    bottom: "68.35%",
    top: "26.72%",
    height: "4.93%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  rectangleBg: {
    backgroundColor: Color.slategray_100,
    position: "absolute",
  },
  iconlineeyeOnPosition: {
    marginTop: -181,
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: 57,
    height: 20,
    position: "absolute",
  },
  rememberMeTypo: {
    color: Color.gray_200,
    lineHeight: 20,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  iconLayout: {
    height: 16,
    width: 16,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bg8Position: {
    bottom: "60.96%",
    top: "34.11%",
    height: "4.93%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  activeLayout: {
    width: 62,
    height: 22,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 109,
    borderTopWidth: 1,
    borderColor: "#aba9b5",
    top: 450,
    borderStyle: "solid",
    position: "absolute",
  },
  rememberMePosition: {
    top: 331,
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
  signInChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  signInItem: {
    top: 0,
    height: 812,
  },
  rectangle: {
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  colorwhite: {
    position: "absolute",
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
    left: 62,
    textAlign: "left",
    fontSize: FontSize.size_base,
    display: "none",
    top: "50%",
    position: "absolute",
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
    left: 62,
    textAlign: "left",
    fontSize: FontSize.size_base,
    display: "none",
    top: "50%",
    position: "absolute",
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
    height: "4.93%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
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
    width: 163,
    textAlign: "right",
    color: Color.secondaryColor,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  signInInner: {
    width: 623,
    height: 339,
    top: 0,
    position: "absolute",
  },
  signIn1: {
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
    lineHeight: 22,
    width: 229,
    height: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  bg4: {
    borderColor: "#cfd9e3",
    backgroundColor: Color.pureWhite,
  },
  bgIcon: {
    height: "52.27%",
    width: "9.11%",
    top: "23.86%",
    right: "86.7%",
    bottom: "23.86%",
    left: "4.19%",
  },
  googleIcon: {
    height: "31.15%",
    width: "5.34%",
    top: "34.38%",
    right: "88.65%",
    bottom: "34.48%",
    left: "6.01%",
  },
  loginWithGoogle: {
    width: "47.48%",
    left: "29.26%",
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    height: 21,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    top: "50%",
    color: Color.darkslategray_200,
  },
  buttonfilledgoogle1: {
    position: "absolute",
    overflow: "hidden",
  },
  buttonfilledgoogle: {
    top: 597,
    left: 53,
    width: 270,
  },
  bg5: {
    backgroundColor: Color.royalblue,
    borderRadius: Border.br_13xl_5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  fbIcon: {
    top: "25%",
    bottom: "25%",
  },
  loginWithFacebook: {
    width: "51.89%",
    left: "27.67%",
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    height: 21,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    top: "50%",
    color: Color.pureWhite,
  },
  buttonfilledtextIcon: {
    top: 538,
    left: 53,
    width: 270,
  },
  bg6: {
    borderColor: "#1c3957",
  },
  icon24email: {
    top: "26.56%",
    bottom: "23.44%",
  },
  rectangle4: {
    height: "18.75%",
    width: "4.37%",
    top: "42.19%",
    right: "89.07%",
    bottom: "39.06%",
    left: "6.56%",
    borderRadius: Border.br_11xs,
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  loginWithEmail: {
    width: "43.4%",
    left: "31.76%",
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    height: 21,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    top: "50%",
    color: Color.darkslategray_200,
  },
  pathIcon: {
    height: "7.76%",
    width: "3.64%",
    top: "43.38%",
    right: "89.43%",
    bottom: "48.86%",
    left: "6.93%",
  },
  buttonoutlinetextIcon: {
    top: 479,
    left: 53,
    width: 270,
  },
  or: {
    marginLeft: -8.5,
    top: 436,
    color: Color.bodyDark,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  signUpOr: {
    marginLeft: -579.5,
  },
  bg7: {
    display: "none",
    position: "absolute",
  },
  rectangle6: {
    bottom: "68.35%",
    top: "26.72%",
    height: "4.93%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  iconlineeyeOn: {
    right: 34,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cooperexamplecom2: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
    color: Color.primaryColor,
    left: 62,
    display: "none",
  },
  enterMobileNumber: {
    left: 23,
    top: 0,
    position: "absolute",
  },
  icon: {
    top: 2,
  },
  enterMobileNumberParent: {
    top: 227,
    width: 148,
  },
  bg8: {
    display: "none",
  },
  rectangle8: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  cooperexamplecom3: {
    marginTop: -121,
    color: Color.primaryColor,
    left: 62,
    textAlign: "left",
    fontSize: FontSize.size_base,
    display: "none",
    top: "50%",
    position: "absolute",
  },
  yourPassword: {
    left: 24,
    top: 0,
    position: "absolute",
  },
  icon1: {
    top: 0,
  },
  yourPasswordParent: {
    top: 290,
    width: 112,
  },
  hideIcon: {
    height: "0.92%",
    width: "4.27%",
    top: "36.45%",
    right: "14.93%",
    bottom: "62.62%",
    left: "80.8%",
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    top: 0,
    left: 0,
  },
  signIn2: {
    top: 9,
    left: 84,
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
    top: 371,
    left: 53,
    width: 270,
  },
  groupIcon: {
    height: "2.46%",
    width: "5.33%",
    top: "40.76%",
    right: "80.53%",
    bottom: "56.77%",
    left: "14.13%",
  },
  active: {
    borderRadius: Border.br_9xs,
    borderColor: "#aa9eaf",
    borderWidth: 0.5,
    borderStyle: "solid",
    width: 62,
    top: 0,
    left: 0,
  },
  useMailId: {
    top: 5,
    left: 7,
    fontSize: FontSize.size_4xs,
    lineHeight: 12,
    color: "#888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 49,
    height: 11,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  activeParent: {
    top: 226,
    left: 260,
  },
  welcomeBackTo: {
    width: "67.73%",
    top: "20.57%",
    left: "16.27%",
    color: Color.midnightblue_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  lineView: {
    left: 203,
  },
  signInChild1: {
    left: 60,
  },
  forgotPassword2: {
    marginLeft: 22.5,
    width: 113,
    fontSize: FontSize.regular12_size,
    height: 19,
    textAlign: "right",
    color: Color.secondaryColor,
    fontFamily: FontFamily.regular12,
  },
  rememberMe: {
    marginLeft: -107.5,
    width: 137,
    color: Color.gray_200,
    lineHeight: 20,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    height: 24,
  },
  signInChild2: {
    right: 8,
    width: 367,
    top: 0,
  },
  signIn: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default SignIn;
