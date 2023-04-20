import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PersonalDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalDetails}>
      <Image
        style={[styles.personalDetailsChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.personalDetailsItem, styles.personalPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
      />
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.colorwhite, styles.ibagPosition1]}>
          <View style={[styles.rectangle, styles.ibagPosition1]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={[styles.colorwhite, styles.ibagPosition1]}>
          <View style={[styles.rectangle, styles.ibagPosition1]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg2, styles.bgPosition]}>
        <View style={[styles.colorwhite, styles.ibagPosition1]}>
          <View style={[styles.rectangle, styles.ibagPosition1]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo1]}>········</Text>
      <Image
        style={[styles.iconsbasichide, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconsbasichide.png")}
      />
      <View style={[styles.bg3, styles.bg3Position]}>
        <View style={[styles.colorwhite, styles.ibagPosition1]}>
          <View style={[styles.rectangle, styles.ibagPosition1]} />
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo1]}>········</Text>
      <Image
        style={[styles.iconChevronDown, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconchevrondown.png")}
      />
      <Text style={[styles.forgotPassword, styles.forgotPasswordPosition]}>
        Forgot Password?
      </Text>
      <Text style={[styles.signUpOr, styles.signUpOrPosition]}>
        Sign Up or Register
      </Text>
      <View style={[styles.bg4, styles.bg3Position]}>
        <View style={[styles.colorwhite, styles.ibagPosition1]}>
          <View style={[styles.rectangle, styles.ibagPosition1]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom2, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg5, styles.bg3Position]}>
        <View style={[styles.colorwhite, styles.ibagPosition1]}>
          <View style={[styles.rectangle, styles.ibagPosition1]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom3, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.personalDetailsInner, styles.personalPosition]} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-343932.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.profileSettings, styles.signUpOrPosition]}>
        Profile Settings
      </Text>
      <Text style={[styles.johnDoe, styles.textTypo]}>John Doe</Text>
      <Text style={[styles.text2, styles.textTypo]}>***********</Text>
      <Text style={[styles.johndoegmailcom, styles.textTypo]}>
        johndoe@gmail.com
      </Text>
      <Text style={[styles.male, styles.textTypo]}>Male</Text>
      <Text style={[styles.text3, styles.textTypo]}>+91 98765 43210</Text>
      <Text style={[styles.april1985, styles.textTypo]}>05 April 1985</Text>
      <Text
        style={[styles.uppalHyderabad, styles.textTypo]}
      >{`Uppal, Hyderabad `}</Text>
      <View style={[styles.lineView, styles.personalChildLayout1]} />
      <View
        style={[styles.personalDetailsChild1, styles.personalChildLayout1]}
      />
      <View
        style={[styles.personalDetailsChild2, styles.personalChildLayout1]}
      />
      <View
        style={[styles.personalDetailsChild3, styles.personalChildLayout1]}
      />
      <View
        style={[styles.personalDetailsChild4, styles.personalChildLayout1]}
      />
      <View
        style={[styles.personalDetailsChild5, styles.personalChildLayout1]}
      />
      <View
        style={[styles.personalDetailsChild6, styles.personalChildLayout1]}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.password, styles.updateLayout]}>Password</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.gender, styles.genderTypo]}>Gender</Text>
      <Text style={[styles.mobileNumber, styles.genderTypo]}>
        Mobile number
      </Text>
      <Text style={[styles.dateOfBirth, styles.addressTypo]}>
        Date of Birth
      </Text>
      <Text style={[styles.address, styles.addressTypo]}>Address</Text>
      <Image
        style={[styles.personalDetailsChild7, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34408.png")}
      />
      <Image
        style={[styles.personalDetailsChild8, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34408.png")}
      />
      <Image
        style={[styles.personalDetailsChild9, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34408.png")}
      />
      <Image
        style={[styles.personalDetailsChild10, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34408.png")}
      />
      <Image
        style={[styles.personalDetailsChild11, styles.personalChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34408.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.update, styles.updateLayout]}>Update</Text>
      </Pressable>
      <Image
        style={styles.icroundVerifiedIcon}
        resizeMode="cover"
        source={require("../assets/icroundverified.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.personalDetailsChild12, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-344142.png")}
      />
      <View style={[styles.homeIndicatorParent, styles.navigationLayout]}>
        <View style={[styles.homeIndicator, styles.personalPosition]}>
          <View
            style={[styles.homeIndicator1, styles.forgotPasswordPosition]}
          />
        </View>
        <View style={[styles.homeIndicator, styles.personalPosition]}>
          <View
            style={[styles.homeIndicator1, styles.forgotPasswordPosition]}
          />
        </View>
        <View style={[styles.navigation, styles.ibagPosition]}>
          <View style={[styles.rectangle6, styles.ibagPosition]} />
        </View>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-34399.png")}
        />
        <View style={[styles.ibagWrapper, styles.groupIcon1Position]}>
          <View style={[styles.ibag, styles.ibagPosition]} />
        </View>
        <Text style={[styles.refer, styles.referTypo]}>Refer</Text>
        <Text style={[styles.offers, styles.referTypo]}>Offers</Text>
        <Pressable
          style={styles.ihomeParent}
          onPress={() => navigation.navigate("LandingPage")}
        >
          <Image
            style={[styles.ihomeIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ihome.png")}
          />
          <Text style={styles.home}>Home</Text>
        </Pressable>
        <Text style={[styles.services, styles.referTypo]}>Services</Text>
        <Image
          style={[styles.groupIcon1, styles.groupIcon1Position]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.share, styles.referTypo]}>Share</Text>
        <Image
          style={[styles.groupItem, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group-34398.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  personalPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bgPosition: {
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  ibagPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  cooperexamplecomTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  textTypo1: {
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    letterSpacing: 1.2,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  iconsbasichidePosition: {
    width: 20,
    right: 57,
    height: 20,
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
  forgotPasswordPosition: {
    left: "50%",
    position: "absolute",
  },
  signUpOrPosition: {
    height: 31,
    color: Color.pureWhite,
    left: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.purple,
    fontSize: FontSize.regular12_size,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  personalChildLayout1: {
    height: 1,
    width: 340,
    borderTopWidth: 1,
    borderColor: "#aba9b5",
    borderStyle: "solid",
    left: 18,
    position: "absolute",
  },
  nameTypo: {
    width: 28,
    color: Color.grey,
    lineHeight: 8,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xs,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  updateLayout: {
    width: 101,
    position: "absolute",
  },
  genderTypo: {
    width: 79,
    color: Color.grey,
    lineHeight: 8,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xs,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  addressTypo: {
    color: Color.grey,
    lineHeight: 8,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xs,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  personalChildLayout: {
    left: "90%",
    right: "6.93%",
    width: "3.07%",
    height: "1.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonLayout: {
    height: 44,
    width: 270,
    position: "absolute",
  },
  navigationLayout: {
    height: 96,
    width: 375,
    left: 0,
  },
  ibagPosition: {
    bottom: 0,
    position: "absolute",
  },
  groupPosition: {
    bottom: 61,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1Position: {
    bottom: 63,
    height: 20,
    position: "absolute",
  },
  referTypo: {
    opacity: 0.5,
    lineHeight: 11,
    fontSize: FontSize.size_4xs,
    bottom: 48,
    letterSpacing: -0.1,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  personalDetailsChild: {
    width: 584,
    height: 971,
    position: "absolute",
  },
  personalDetailsItem: {
    top: 0,
    height: 812,
  },
  rectangle: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  colorwhite: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
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
    display: "none",
    position: "absolute",
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
    display: "none",
    position: "absolute",
  },
  bg2: {
    height: "5.17%",
    top: "33.99%",
    bottom: "60.84%",
  },
  text: {
    marginTop: -139,
  },
  iconsbasichide: {
    marginTop: -119,
    height: 20,
  },
  bg3: {
    top: "42%",
    bottom: "53.08%",
  },
  text1: {
    marginTop: -75,
  },
  iconChevronDown: {
    marginTop: -55,
    height: 20,
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
    left: "50%",
    display: "none",
  },
  signUpOr: {
    marginLeft: -579.5,
    top: 55,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.semibold20,
    width: 231,
    textAlign: "center",
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
    display: "none",
    position: "absolute",
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
    display: "none",
    position: "absolute",
  },
  personalDetailsInner: {
    height: 95,
    backgroundColor: Color.color1,
    top: 0,
  },
  groupIcon: {
    right: 3,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.87%",
    width: "2.45%",
    top: "6.33%",
    right: "91.57%",
    bottom: "91.8%",
    left: "5.97%",
  },
  profileSettings: {
    marginLeft: -134.5,
    top: 47,
    width: 133,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  johnDoe: {
    top: 132,
  },
  text2: {
    top: 462,
  },
  johndoegmailcom: {
    top: 186,
  },
  male: {
    top: 240,
  },
  text3: {
    top: 343,
  },
  april1985: {
    top: 294,
  },
  uppalHyderabad: {
    top: 397,
  },
  lineView: {
    top: 153,
  },
  personalDetailsChild1: {
    top: 483,
  },
  personalDetailsChild2: {
    top: 207,
  },
  personalDetailsChild3: {
    top: 261,
  },
  personalDetailsChild4: {
    top: 364,
  },
  personalDetailsChild5: {
    top: 315,
  },
  personalDetailsChild6: {
    top: 418,
  },
  name: {
    top: 119,
  },
  password: {
    top: 449,
    color: Color.grey,
    lineHeight: 8,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xs,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  email: {
    top: 173,
  },
  gender: {
    top: 227,
  },
  mobileNumber: {
    top: 330,
  },
  dateOfBirth: {
    top: 281,
    width: 72,
    position: "absolute",
  },
  address: {
    top: 384,
    width: 46,
    position: "absolute",
  },
  personalDetailsChild7: {
    top: "16.69%",
    bottom: "81.96%",
  },
  personalDetailsChild8: {
    top: "23.34%",
    bottom: "75.31%",
  },
  personalDetailsChild9: {
    top: "42.67%",
    bottom: "55.97%",
  },
  personalDetailsChild10: {
    top: "49.32%",
    bottom: "49.32%",
  },
  personalDetailsChild11: {
    top: "56.83%",
    bottom: "41.81%",
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.color2,
    left: 0,
    top: 0,
  },
  update: {
    top: 9,
    left: 85,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    height: 22,
    textAlign: "center",
    color: Color.pureWhite,
    width: 101,
    fontSize: FontSize.size_base,
  },
  button: {
    top: 662,
    left: 53,
  },
  icroundVerifiedIcon: {
    top: 346,
    left: 120,
    width: 12,
    height: 12,
    position: "absolute",
  },
  vectorIcon1: {
    height: "0.62%",
    width: "2.4%",
    top: "30.23%",
    right: "7.33%",
    bottom: "69.15%",
    left: "90.27%",
  },
  personalDetailsChild12: {
    height: "2.09%",
    width: "4.11%",
    top: "35.9%",
    right: "6.43%",
    bottom: "62.01%",
    left: "89.47%",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.pureWhite,
  },
  homeIndicator: {
    bottom: 37,
    height: 34,
  },
  rectangle6: {
    borderRadius: Border.br_9xl,
    height: 96,
    width: 375,
    left: 0,
    backgroundColor: Color.color1,
  },
  navigation: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    height: 96,
    width: 375,
    left: 0,
  },
  groupChild: {
    width: "5.94%",
    right: "27.53%",
    left: "66.53%",
    height: 23,
  },
  ibag: {
    opacity: 0.4,
    height: 20,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: 0,
  },
  ibagWrapper: {
    width: "5.07%",
    right: "14.4%",
    left: "80.53%",
  },
  refer: {
    left: "66.13%",
  },
  offers: {
    left: "84.8%",
  },
  ihomeIcon: {
    width: "74.07%",
    right: "11.11%",
    bottom: 15,
    left: "14.81%",
    height: 20,
    position: "absolute",
  },
  home: {
    lineHeight: 11,
    fontSize: FontSize.size_4xs,
    bottom: 0,
    letterSpacing: -0.1,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    left: 0,
    position: "absolute",
  },
  ihomeParent: {
    width: "7.2%",
    right: "83.47%",
    left: "9.33%",
    height: 35,
    bottom: 48,
    position: "absolute",
  },
  services: {
    left: 99,
  },
  groupIcon1: {
    width: "6.08%",
    right: "65.27%",
    left: "28.66%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  share: {
    left: "46.67%",
  },
  groupItem: {
    width: "4.8%",
    right: "47.6%",
    bottom: 64,
    left: "47.6%",
    height: 18,
    position: "absolute",
  },
  groupIcon2: {
    width: "5.61%",
    right: "8.79%",
    left: "85.6%",
    height: 21,
  },
  homeIndicatorParent: {
    bottom: -29,
    position: "absolute",
  },
  personalDetails: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default PersonalDetails;
