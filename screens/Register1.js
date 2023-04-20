import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Register1 = () => {
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
        source={require("../assets/rectangle-7649.png")}
      />
      <Text style={[styles.haveAnAccountContainer, styles.loginFlexBox]}>
        <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
        <Text style={[styles.signIn, styles.textTypo]}>Sign in</Text>
      </Text>
      <View style={[styles.buttonfilledgoogle, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Image
            style={[styles.googleIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/googleicon.png")}
          />
          <Text style={[styles.loginWithGoogle, styles.loginTypo]}>
            Sign up with Google
          </Text>
        </View>
      </View>
      <View style={[styles.buttonfilledtextIcon, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={styles.bg1} />
          <Image
            style={[styles.fbIcon, styles.fbIconLayout]}
            resizeMode="cover"
            source={require("../assets/fb.png")}
          />
          <Text style={[styles.loginWithFacebook, styles.signUpOrClr]}>
            Sign up with facebook
          </Text>
        </View>
      </View>
      <View style={[styles.buttonoutlinetextIcon, styles.buttonIconLayout]}>
        <View style={[styles.buttonfilledgoogle1, styles.rectanglePosition]}>
          <View style={[styles.bg2, styles.bgPosition]} />
          <Image
            style={[styles.icon24email, styles.fbIconLayout]}
            resizeMode="cover"
            source={require("../assets/icon24email.png")}
          />
          <View style={styles.rectangle} />
          <Text style={[styles.loginWithEmail, styles.loginTypo]}>
            Sign up with Email
          </Text>
          <Image
            style={[styles.pathIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
        </View>
      </View>
      <View style={styles.formsinputsbasicParent}>
        <View style={styles.formsinputsbasicLayout}>
          <View style={[styles.bg3, styles.bg3Position]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle1, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.colorwhite, styles.rectanglePosition]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle2, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.cooperexamplecom, styles.orFlexBox]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.firstName, styles.emailTypo]}>First Name</Text>
        </View>
        <View style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}>
          <View style={[styles.bg3, styles.bg3Position]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle1, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.colorwhite, styles.rectanglePosition]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle2, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.cooperexamplecom, styles.orFlexBox]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.firstName, styles.emailTypo]}>Last Name</Text>
        </View>
        <Pressable
          style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}
          onPress={() => navigation.navigate("Register")}
        >
          <View style={[styles.bg3, styles.bg3Position]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle1, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.colorwhite, styles.rectanglePosition]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle2, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.text, styles.orFlexBox]}>········</Text>
          <Image
            style={styles.iconsbasichidePosition}
            resizeMode="cover"
            source={require("../assets/iconsbasichide.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        </Pressable>
        <View style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}>
          <View style={[styles.bg3, styles.bg3Position]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle1, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.colorwhite, styles.rectanglePosition]}>
            <View style={[styles.colorwhite, styles.rectanglePosition]}>
              <View style={[styles.rectangle2, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.text, styles.orFlexBox]}>········</Text>
          <Image
            style={[styles.iconChevronDown, styles.iconsbasichidePosition]}
            resizeMode="cover"
            source={require("../assets/iconchevrondown.png")}
          />
          <Text style={[styles.firstName, styles.emailTypo]}>
            Mobile Number
          </Text>
        </View>
      </View>
      <Text style={[styles.forgotPassword, styles.bg3Position]}>
        Forgot Password?
      </Text>
      <Text style={[styles.iAcceptTermsContainer, styles.step13Typo]}>
        <Text style={styles.orClr}>{`I accept `}</Text>
        <Text
          style={[styles.termsConditions, styles.textTypo]}
        >{`Terms & Conditions`}</Text>
      </Text>
      <Text style={[styles.or, styles.orClr]}>or</Text>
      <View style={styles.bg7}>
        <View style={[styles.colorwhite, styles.rectanglePosition]}>
          <View style={[styles.rectangle9, styles.rectanglePosition]} />
        </View>
      </View>
      <Image
        style={styles.checkboxIcon}
        resizeMode="cover"
        source={require("../assets/checkbox.png")}
      />
      <View style={[styles.button, styles.buttonIconLayout]}>
        <View style={[styles.buttonChild, styles.buttonIconLayout]} />
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      <Image
        style={[styles.registerInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.signUpOr, styles.text2Typo]}>
        Sign Up or Register
      </Text>
      <Text style={[styles.pleaseFillThe, styles.text2Typo]}>
        Please fill the Below Details
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.registerChild1, styles.lineViewLayout]} />
      <Text style={[styles.step13, styles.step13Typo]}>
        <Text style={styles.step}>STEP</Text>
        <Text style={styles.text2Typo}> 1/3</Text>
      </Text>
      <View style={[styles.activeWrapper, styles.activeLayout]}>
        <View style={[styles.active, styles.activeLayout]} />
      </View>
      <Image
        style={styles.groupIcon}
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
  loginFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
  },
  buttonIconLayout: {
    height: 44,
    width: 270,
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
  bgPosition: {
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    height: 21,
    top: "50%",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    letterSpacing: 0,
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
  signUpOrClr: {
    color: Color.pureWhite,
    textAlign: "center",
    position: "absolute",
  },
  bg3Position: {
    display: "none",
    position: "absolute",
  },
  orFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  emailTypo: {
    color: Color.bodyLight,
    top: 12,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  formsinputsbasicLayout: {
    height: 40,
    width: 286,
  },
  iconsbasichidePosition: {
    height: 20,
    width: 20,
    right: 14,
    marginTop: -10,
    display: "none",
    top: "50%",
    position: "absolute",
  },
  step13Typo: {
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    position: "absolute",
  },
  orClr: {
    color: Color.bodyDark,
    fontFamily: FontFamily.regular12,
  },
  text2Typo: {
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
  },
  lineViewLayout: {
    height: 1,
    width: 109,
    borderTopWidth: 1,
    borderColor: "#aba9b5",
    top: 572,
    borderStyle: "solid",
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
  },
  bg: {
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
    left: "30.19%",
    height: 21,
    color: Color.darkslategray_200,
    textAlign: "center",
    position: "absolute",
  },
  buttonfilledgoogle1: {
    position: "absolute",
    overflow: "hidden",
  },
  buttonfilledgoogle: {
    top: 705,
    left: 53,
    width: 270,
  },
  bg1: {
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
    height: 21,
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    top: "50%",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    letterSpacing: 0,
  },
  buttonfilledtextIcon: {
    top: 651,
    left: 53,
    width: 270,
  },
  bg2: {
    borderColor: "#1c3957",
  },
  icon24email: {
    top: "26.56%",
    bottom: "23.44%",
  },
  rectangle: {
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
    height: 21,
    color: Color.darkslategray_200,
    textAlign: "center",
    position: "absolute",
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
    width: 270,
  },
  rectangle1: {
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  colorwhite: {
    position: "absolute",
  },
  bg3: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  rectangle2: {
    backgroundColor: Color.slategray_100,
    position: "absolute",
  },
  cooperexamplecom: {
    marginTop: -12,
    color: Color.primaryColor,
    left: 16,
    textAlign: "left",
    display: "none",
    top: "50%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
  },
  firstName: {
    left: 12,
  },
  formsinputsbasic1: {
    marginTop: 20,
  },
  text: {
    marginTop: -30,
    fontSize: FontSize.size_21xl,
    letterSpacing: 1.2,
    color: Color.primaryColor,
    left: 16,
    textAlign: "left",
    display: "none",
    top: "50%",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
  },
  email: {
    left: 13,
  },
  iconChevronDown: {
    overflow: "hidden",
  },
  formsinputsbasicParent: {
    top: 218,
    left: 45,
    position: "absolute",
  },
  forgotPassword: {
    marginLeft: 136.29,
    top: 412,
    color: Color.secondaryColor,
    textAlign: "right",
    width: 163,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
    left: "50%",
  },
  termsConditions: {
    color: Color.color1,
  },
  iAcceptTermsContainer: {
    marginLeft: -95.09,
    top: 458,
    left: "50%",
  },
  or: {
    marginLeft: -8.5,
    top: 557,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  rectangle9: {
    backgroundColor: Color.secondaryColor,
    position: "absolute",
  },
  bg7: {
    height: "2.46%",
    width: "5.33%",
    top: "56.53%",
    right: "78.67%",
    bottom: "41.01%",
    left: "16%",
    position: "absolute",
  },
  checkboxIcon: {
    marginTop: 58,
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
    left: 85,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 101,
    height: 22,
    fontSize: FontSize.size_base,
    color: Color.pureWhite,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: 497,
    left: 53,
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
    top: 55,
    fontSize: FontSize.size_3xl,
    width: 231,
    height: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.pureWhite,
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  pleaseFillThe: {
    marginLeft: -149.5,
    top: 175,
    fontSize: FontSize.size_3xs,
    width: 152,
    height: 16,
    color: Color.grey,
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  lineView: {
    left: 203,
  },
  registerChild1: {
    left: 60,
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
    width: 87,
    top: 0,
    left: 0,
  },
  activeWrapper: {
    top: 171,
    left: 245,
  },
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  register: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default Register1;
