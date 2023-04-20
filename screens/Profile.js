import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.profileItem, styles.profilePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7643.png")}
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
      <View style={[styles.profileInner, styles.profilePosition]} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-343932.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse.png")}
      />
      <Text style={[styles.profile1, styles.signUpOrPosition]}>Profile</Text>
      <Image
        style={[styles.vectorIcon, styles.profileChildLayout1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.lineView} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleChildShadowBox]}
        onPress={() => navigation.navigate("PersonalDetails")}
      />
      <View style={[styles.rectangleView, styles.rectangleChildShadowBox]} />
      <View style={[styles.profileChild1, styles.rectangleChildShadowBox]} />
      <View style={[styles.profileChild2, styles.rectangleChildShadowBox]} />
      <View style={[styles.profileChild3, styles.rectangleChildShadowBox]} />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.backgroundIcon, styles.forgotPasswordPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <Image
        style={styles.knobIcon}
        resizeMode="cover"
        source={require("../assets/knob.png")}
      />
      <Image
        style={[styles.profileChild4, styles.profileChildLayout1]}
        resizeMode="cover"
        source={require("../assets/group-34404.png")}
      />
      <Image
        style={[styles.profileChild5, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34405.png")}
      />
      <Image
        style={[styles.profileChild6, styles.profileChildLayout1]}
        resizeMode="cover"
        source={require("../assets/group-34406.png")}
      />
      <View style={[styles.rectangle6, styles.rectangleBorder]} />
      <View style={[styles.rectangle7, styles.rectangleBorder]} />
      <View style={[styles.rectangle8, styles.rectangleBorder]} />
      <View style={styles.celebsParent}>
        <Text style={[styles.celebs, styles.text5Typo]}>Celebs</Text>
        <Text style={[styles.text2, styles.textTypo]}>27</Text>
      </View>
      <View style={[styles.parent, styles.groupPosition1]}>
        <Text style={[styles.text3, styles.textTypo]}>19</Text>
        <Text style={styles.voiceRecordings}>{`Voice
Recordings`}</Text>
      </View>
      <View style={[styles.group, styles.groupPosition1]}>
        <Text style={[styles.text2, styles.textTypo]}>14</Text>
        <Text style={[styles.videoWishes, styles.text5Typo]}>{`Video
Wishes`}</Text>
      </View>
      <Text style={[styles.profileSettings, styles.logoutTypo]}>
        Profile Settings
      </Text>
      <Text style={[styles.notifications, styles.logoutTypo]}>
        Notifications
      </Text>
      <Text style={[styles.coupons, styles.logoutTypo]}>Coupons</Text>
      <Text style={[styles.aboutStarWishes, styles.logoutTypo]}>
        About Star wishes
      </Text>
      <Text style={[styles.logout, styles.logoutTypo]}>{`Logout `}</Text>
      <Image
        style={styles.bellIcon}
        resizeMode="cover"
        source={require("../assets/bell.png")}
      />
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star.png")}
      />
      <Text style={[styles.johnDoe, styles.johnDoeTypo]}>John Doe</Text>
      <View style={styles.container}>
        <Text
          style={[styles.text5, styles.text5Typo]}
        >{`+91 98765 43210 `}</Text>
        <Image
          style={styles.icroundVerifiedIcon}
          resizeMode="cover"
          source={require("../assets/icroundverified.png")}
        />
      </View>
      <Image
        style={[styles.profileChild7, styles.profileChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34407.png")}
      />
      <View style={[styles.homeIndicatorParent, styles.navigationLayout]}>
        <View style={[styles.homeIndicator, styles.profilePosition]}>
          <View
            style={[styles.homeIndicator1, styles.forgotPasswordPosition]}
          />
        </View>
        <View style={[styles.homeIndicator, styles.profilePosition]}>
          <View
            style={[styles.homeIndicator1, styles.forgotPasswordPosition]}
          />
        </View>
        <View style={[styles.navigation, styles.ibagPosition]}>
          <View style={[styles.rectangle9, styles.ibagPosition]} />
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
  profilePosition: {
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
  profileChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  vectorIconLayout: {
    left: "89.87%",
    right: "8%",
    width: "2.13%",
    height: "1.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profileChildLayout: {
    height: "2.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: "#191781",
    borderRadius: Border.br_9xs,
    bottom: "52.71%",
    top: "37.44%",
    height: "9.85%",
    borderStyle: "solid",
    position: "absolute",
  },
  text5Typo: {
    color: Color.grey60,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: 0,
    position: "absolute",
  },
  groupPosition1: {
    top: 317,
    position: "absolute",
  },
  logoutTypo: {
    width: 151,
    color: Color.grey,
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    letterSpacing: -0.1,
    left: 51,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  johnDoeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
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
  profileChild: {
    width: 584,
    height: 971,
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileItem: {
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
    textAlign: "left",
    top: "50%",
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
    textAlign: "left",
    top: "50%",
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
    width: 231,
    textAlign: "center",
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
  },
  bg4: {
    top: "26.72%",
    bottom: "68.35%",
  },
  cooperexamplecom2: {
    marginTop: -181,
    color: Color.primaryColor,
    left: 62,
    textAlign: "left",
    top: "50%",
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
    textAlign: "left",
    top: "50%",
    display: "none",
    position: "absolute",
  },
  profileInner: {
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
  ellipseIcon: {
    top: 107,
    left: 142,
    width: 92,
    height: 92,
    position: "absolute",
  },
  profile1: {
    marginLeft: -134.5,
    top: 47,
    width: 99,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  vectorIcon: {
    height: "1.87%",
    width: "2.45%",
    top: "6.33%",
    right: "91.57%",
    bottom: "91.8%",
    left: "5.97%",
  },
  lineView: {
    top: 405,
    left: 18,
    borderColor: "#aba9b5",
    borderTopWidth: 1,
    width: 340,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rectanglePressable: {
    top: "51.97%",
    bottom: "42.24%",
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(54, 54, 54, 0.1)",
    borderRadius: Border.br_3xs,
    left: "4.8%",
    right: "4.8%",
    width: "90.4%",
    height: "5.79%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  rectangleView: {
    top: "59.36%",
    bottom: "34.85%",
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(54, 54, 54, 0.1)",
    borderRadius: Border.br_3xs,
    left: "4.8%",
    right: "4.8%",
    width: "90.4%",
    height: "5.79%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  profileChild1: {
    top: "66.38%",
    bottom: "27.83%",
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(54, 54, 54, 0.1)",
    borderRadius: Border.br_3xs,
    left: "4.8%",
    right: "4.8%",
    width: "90.4%",
    height: "5.79%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  profileChild2: {
    top: "73.4%",
    bottom: "20.81%",
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(54, 54, 54, 0.1)",
    borderRadius: Border.br_3xs,
    left: "4.8%",
    right: "4.8%",
    width: "90.4%",
    height: "5.79%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  profileChild3: {
    top: "80.42%",
    bottom: "13.79%",
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(54, 54, 54, 0.1)",
    borderRadius: Border.br_3xs,
    left: "4.8%",
    right: "4.8%",
    width: "90.4%",
    height: "5.79%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  vectorIcon1: {
    top: "54.06%",
    right: "7.47%",
    bottom: "44.21%",
    left: "90.4%",
    width: "2.13%",
    height: "1.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    top: "68.6%",
    bottom: "29.68%",
  },
  vectorIcon3: {
    top: "75.86%",
    bottom: "22.41%",
  },
  vectorIcon4: {
    top: "82.76%",
    bottom: "15.52%",
  },
  backgroundIcon: {
    marginTop: 89,
    marginLeft: 123.5,
    width: 37,
    height: 23,
    top: "50%",
    left: "50%",
  },
  knobIcon: {
    marginTop: 86,
    marginLeft: 130.5,
    width: 36,
    height: 35,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  profileChild4: {
    height: "1.97%",
    width: "3.73%",
    top: "53.88%",
    right: "88.67%",
    bottom: "44.15%",
    left: "7.6%",
  },
  profileChild5: {
    width: "4.53%",
    top: "68.17%",
    right: "88.13%",
    bottom: "29.74%",
    left: "7.33%",
  },
  profileChild6: {
    height: "1.32%",
    width: "2.87%",
    top: "82.65%",
    right: "89.1%",
    bottom: "16.03%",
    left: "8.03%",
  },
  rectangle6: {
    right: 262,
    left: 33,
  },
  rectangle7: {
    right: 147,
    left: 148,
  },
  rectangle8: {
    right: 32,
    left: 263,
  },
  celebs: {
    lineHeight: 19,
    color: Color.grey60,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    top: 26,
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
  },
  text2: {
    left: 12,
  },
  celebsParent: {
    top: 322,
    width: 42,
    height: 45,
    left: 51,
    position: "absolute",
  },
  text3: {
    left: 25,
  },
  voiceRecordings: {
    lineHeight: 15,
    color: Color.grey60,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    top: 26,
    textAlign: "center",
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  parent: {
    left: 155,
    width: 67,
    height: 56,
  },
  videoWishes: {
    top: 29,
    lineHeight: 14,
    color: Color.grey60,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
  },
  group: {
    left: 281,
    width: 43,
    height: 57,
  },
  profileSettings: {
    top: 438,
  },
  notifications: {
    top: 498,
  },
  coupons: {
    top: 555,
  },
  aboutStarWishes: {
    top: 612,
  },
  logout: {
    top: 669,
  },
  bellIcon: {
    top: 494,
    left: 24,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  starIcon: {
    top: 610,
    left: 28,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  johnDoe: {
    top: 203,
    left: 140,
    fontSize: FontSize.semibold20_size,
    letterSpacing: -0.3,
    lineHeight: 24,
    color: Color.black,
    position: "absolute",
  },
  text5: {
    lineHeight: 19,
    color: Color.grey60,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.regular12,
    top: 0,
  },
  icroundVerifiedIcon: {
    top: 4,
    width: 12,
    height: 12,
    left: 99,
    position: "absolute",
  },
  container: {
    top: 227,
    left: 131,
    width: 111,
    height: 19,
    position: "absolute",
  },
  profileChild7: {
    width: "29.07%",
    top: "32.2%",
    right: "35.33%",
    bottom: "65.7%",
    left: "35.6%",
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
  rectangle9: {
    borderRadius: Border.br_9xl,
    height: 96,
    width: 375,
    left: 0,
    backgroundColor: Color.color1,
  },
  navigation: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 5,
    elevation: 5,
    height: 96,
    width: 375,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    bottom: 0,
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
    bottom: 48,
    height: 35,
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
  profile: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default Profile;
