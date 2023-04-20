import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <View style={[styles.homeIndicator, styles.registerItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.registerChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.registerItem, styles.registerItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <View style={[styles.bg, styles.borderPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={[styles.border, styles.bg1Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={[styles.border1, styles.bg2Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.cooperexamplecomPosition]}>
        johndoe@example.com
      </Text>
      <Text style={[styles.arun, styles.arunTypo]}>Arun</Text>
      <Text style={[styles.reddy, styles.arunTypo]}>Reddy</Text>
      <View style={[styles.bg1, styles.bg1Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.cooperexamplecomPosition]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg2, styles.bg2Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={[styles.border2, styles.borderPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle5, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>········</Text>
      <Image
        style={[styles.iconsbasichide, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconsbasichide.png")}
      />
      <Text style={[styles.arunreddygmailcom, styles.textTypo1]}>
        arunreddy@gmail.com
      </Text>
      <View style={[styles.bg3, styles.borderPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <View style={[styles.border3, styles.bg5Border]} />
      <Image
        style={[styles.iconChevronDown, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconchevrondown.png")}
      />
      <Image
        style={[styles.stroke169Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/stroke-1691.png")}
      />
      <Text style={[styles.forgotPassword, styles.forgotPasswordClr]}>
        Forgot Password?
      </Text>
      <Text style={[styles.iAcceptTermsContainer, styles.textTypo1]}>
        <Text style={styles.orClr}>{`I accept `}</Text>
        <Text
          style={[styles.termsConditions, styles.textTypo]}
        >{`Terms & Conditions`}</Text>
      </Text>
      <View style={styles.bg4}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle7, styles.rectanglePosition]} />
        </View>
      </View>
      <Image
        style={styles.checkboxIcon}
        resizeMode="cover"
        source={require("../assets/checkbox.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonIconLayout]}
        onPress={() => navigation.navigate("RegisterOTP")}
      >
        <View style={[styles.buttonChild, styles.buttonIconLayout]} />
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
      <Image
        style={[styles.registerInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signUpOr, styles.signTypo]}>
        Sign Up or Register
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={[styles.pleaseEnterValid, styles.forgotPasswordClr]}>
        Please enter valid email address
      </Text>
      <View style={[styles.homeIndicator, styles.registerItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.signUpOr1, styles.signTypo]}>
        Sign Up or Register
      </Text>
      <Text style={[styles.text1, styles.textTypo1]}>+91</Text>
      <Text style={[styles.text2, styles.textTypo1]}>9963712029</Text>
      <View style={[styles.lineView, styles.border3Border]} />
      <Text style={[styles.pleaseFillThe, styles.text3Typo]}>
        Please fill the Below Details
      </Text>
      <Text style={[styles.step13, styles.textTypo1]}>
        <Text style={styles.step}>STEP</Text>
        <Text style={styles.text3Typo}> 1/3</Text>
      </Text>
      <View style={[styles.activeWrapper, styles.activeLayout]}>
        <View style={[styles.active, styles.activeLayout]} />
      </View>
      <View style={[styles.homeIndicator, styles.registerItemPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.haveAnAccountContainer}>
        <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
        <Text style={[styles.signIn, styles.textTypo]}>Sign in</Text>
      </Text>
      <View style={[styles.buttonfilledgoogle, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg5, styles.bg5Position]} />
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
            Sign up with Google
          </Text>
        </View>
      </View>
      <View style={[styles.buttonfilledtextIcon, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg6, styles.bg5Position]} />
          <Image
            style={[styles.fbIcon, styles.fbIconLayout]}
            resizeMode="cover"
            source={require("../assets/fb.png")}
          />
          <Text style={[styles.loginWithFacebook, styles.loginLayout]}>
            Sign up with facebook
          </Text>
        </View>
      </View>
      <View style={[styles.buttonoutlinetextIcon, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg7, styles.bg5Position]} />
          <Image
            style={[styles.icon24email, styles.fbIconLayout]}
            resizeMode="cover"
            source={require("../assets/icon24email.png")}
          />
          <View style={styles.rectangle8} />
          <Text style={[styles.loginWithEmail, styles.loginLayout]}>
            Sign up with Email
          </Text>
          <Image
            style={[styles.pathIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
        </View>
      </View>
      <Text style={[styles.or, styles.orClr]}>or</Text>
      <View style={[styles.registerChild1, styles.registerChildLayout]} />
      <View style={[styles.registerChild2, styles.registerChildLayout]} />
      <Image
        style={[styles.groupIcon, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/group-343931.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerItemPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  borderPosition: {
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
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
  bg1Position: {
    top: "26.97%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  bg2Position: {
    top: "33.99%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  cooperexamplecomPosition: {
    left: 62,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  arunTypo: {
    color: Color.purple,
    fontSize: FontSize.regular12_size,
    left: 58,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
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
  textTypo1: {
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    position: "absolute",
  },
  bg5Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  forgotPasswordClr: {
    color: Color.secondaryColor,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  buttonIconLayout: {
    height: 44,
    width: 270,
    position: "absolute",
  },
  signTypo: {
    height: 31,
    width: 231,
    fontSize: FontSize.size_3xl,
    top: 55,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "center",
    color: Color.pureWhite,
    left: "50%",
    position: "absolute",
  },
  border3Border: {
    borderColor: "#191781",
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
  },
  activeLayout: {
    width: 87,
    height: 22,
    position: "absolute",
  },
  bg5Position: {
    borderRadius: Border.br_13xl_5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  orClr: {
    color: Color.bodyDark,
    fontFamily: FontFamily.regular12,
  },
  registerChildLayout: {
    height: 1,
    width: 109,
    borderTopWidth: 1,
    borderColor: "#aba9b5",
    top: 572,
    borderStyle: "solid",
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
  registerChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  registerItem: {
    top: 0,
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
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.color1,
  },
  border: {
    bottom: "68.1%",
    height: "4.93%",
  },
  border1: {
    bottom: "61.08%",
    height: "4.93%",
  },
  cooperexamplecom: {
    marginTop: -235,
    textAlign: "left",
    color: Color.primaryColor,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  arun: {
    top: 231,
  },
  reddy: {
    top: 288,
  },
  bg1: {
    bottom: "67.98%",
    display: "none",
    height: "5.05%",
  },
  cooperexamplecom1: {
    marginTop: -178,
    textAlign: "left",
    color: Color.primaryColor,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  bg2: {
    height: "5.17%",
    bottom: "60.84%",
    display: "none",
  },
  rectangle5: {
    backgroundColor: "rgba(255, 12, 12, 0.64)",
  },
  border2: {
    top: "41.01%",
    bottom: "54.06%",
    height: "4.93%",
    position: "absolute",
  },
  text: {
    marginTop: -139,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
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
  arunreddygmailcom: {
    top: 345,
    left: 59,
    color: "#998a8a",
    fontFamily: FontFamily.regular12,
  },
  bg3: {
    top: "42%",
    bottom: "53.08%",
    height: "4.93%",
    display: "none",
    position: "absolute",
  },
  border3: {
    top: "49.01%",
    bottom: "46.06%",
    borderRadius: Border.br_5xs,
    borderColor: "#191781",
    position: "absolute",
    height: "4.93%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  iconChevronDown: {
    marginTop: -55,
    overflow: "hidden",
  },
  stroke169Icon: {
    height: "0.74%",
    width: "2.7%",
    top: "51.05%",
    right: "75.18%",
    bottom: "48.21%",
    left: "22.12%",
  },
  forgotPassword: {
    marginLeft: 136.29,
    top: 412,
    textAlign: "right",
    width: 163,
    fontSize: FontSize.size_base,
    display: "none",
    left: "50%",
  },
  termsConditions: {
    color: Color.color1,
  },
  iAcceptTermsContainer: {
    marginLeft: -95.09,
    top: 453,
    left: "50%",
  },
  rectangle7: {
    backgroundColor: Color.secondaryColor,
  },
  bg4: {
    height: "2.46%",
    width: "5.33%",
    top: "55.91%",
    right: "78.67%",
    bottom: "41.63%",
    left: "16%",
    position: "absolute",
  },
  checkboxIcon: {
    marginTop: 53,
    marginLeft: -123.5,
    width: 13,
    height: 11,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    top: 0,
    left: 0,
  },
  signUp: {
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
    top: 492,
    left: 53,
    height: 44,
    width: 270,
  },
  registerInner: {
    width: 623,
    height: 339,
    top: 0,
    position: "absolute",
  },
  signUpOr: {
    marginLeft: -115.5,
  },
  vectorIcon: {
    height: "1.64%",
    width: "3.56%",
    top: "46.47%",
    right: "82.49%",
    bottom: "51.89%",
    left: "13.96%",
  },
  pleaseEnterValid: {
    top: 378,
    left: 71,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  signUpOr1: {
    marginLeft: -579.5,
  },
  text1: {
    top: 409,
    left: 58,
    fontSize: FontSize.regular12_size,
    color: Color.primaryColor,
    fontFamily: FontFamily.regular12,
  },
  text2: {
    top: 410,
    left: 123,
    color: Color.primaryColor,
    fontFamily: FontFamily.regular12,
  },
  lineView: {
    top: 398,
    left: 104,
    borderRightWidth: 1,
    width: 1,
    height: 41,
    borderStyle: "solid",
  },
  pleaseFillThe: {
    marginLeft: -149.5,
    top: 175,
    fontSize: FontSize.size_3xs,
    width: 152,
    height: 16,
    color: Color.grey,
    textAlign: "center",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  step: {
    fontFamily: FontFamily.regular12,
  },
  step13: {
    top: 173,
    left: 265,
    color: Color.color1,
  },
  active: {
    borderRadius: Border.br_8xl,
    borderColor: "#aa9eaf",
    borderWidth: 0.5,
    borderStyle: "solid",
    top: 0,
    left: 0,
  },
  activeWrapper: {
    top: 171,
    left: 245,
  },
  haveAnAccount: {
    color: Color.grey,
    fontFamily: FontFamily.regular12,
  },
  signIn: {
    color: Color.darkslategray_200,
  },
  haveAnAccountContainer: {
    top: 759,
    left: 94,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    width: 188,
    height: 19,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  bg5: {
    borderColor: "#cfd9e3",
    borderWidth: 1,
    borderStyle: "solid",
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
    left: "30.19%",
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
    overflow: "hidden",
  },
  buttonfilledgoogle: {
    top: 705,
    left: 53,
    height: 44,
    width: 270,
  },
  bg6: {
    backgroundColor: Color.royalblue,
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
    top: 651,
    left: 53,
    height: 44,
    width: 270,
  },
  bg7: {
    borderColor: "#1c3957",
    borderWidth: 1,
    borderStyle: "solid",
  },
  icon24email: {
    top: "26.56%",
    bottom: "23.44%",
  },
  rectangle8: {
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
    top: 597,
    left: 53,
    height: 44,
    width: 270,
  },
  or: {
    marginLeft: -8.5,
    top: 557,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  registerChild1: {
    left: 203,
  },
  registerChild2: {
    left: 60,
  },
  groupIcon: {
    right: 8,
    width: 367,
    top: 0,
  },
  register: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default Register;
