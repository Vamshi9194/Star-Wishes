import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Anniversary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.anniversary}>
      <View style={[styles.homeIndicator, styles.homeIndicatorLayout]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.anniversaryChild, styles.anniversaryPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.anniversaryItem, styles.anniversaryPosition]}
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
        style={[styles.anniversaryInner, styles.anniversaryPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.anniversary1, styles.signUpOrTypo]}>
        Anniversary
      </Text>
      <View style={[styles.homeIndicator, styles.homeIndicatorLayout]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={[styles.signUpOr, styles.signUpOrTypo]}>
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
        style={[styles.groupIcon, styles.anniversaryPosition]}
        resizeMode="cover"
        source={require("../assets/group-343931.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.buttonRent, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <View style={styles.buttonRentInner}>
          <View style={styles.buttonRentInner}>
            <View style={styles.buttonRentInner}>
              <View style={styles.buttonRentInner}>
                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonRent1, styles.lineViewBorder]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <View style={styles.buttonRentInner}>
          <View style={styles.buttonRentInner}>
            <View style={styles.buttonRentInner}>
              <View style={styles.buttonRentInner}>
                <Text style={[styles.back, styles.nextTypo]}>Back</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Text style={[styles.april1985, styles.april1985Position]}>
        05 April 1985
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text style={[styles.anniversaryDate, styles.april1985Position]}>
        Anniversary Date
      </Text>
      <Image
        style={[styles.anniversaryChild1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-34414.png")}
      />
      <Image
        style={styles.productPicture03Icon}
        resizeMode="cover"
        source={require("../assets/product-picture03.png")}
      />
      <Text style={[styles.provideOccasionDetails, styles.nextTypo]}>
        Provide Occasion details of the person.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorLayout: {
    width: 375,
    left: 0,
  },
  anniversaryPosition: {
    top: 0,
    position: "absolute",
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
  signUpOrTypo: {
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
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_15xl,
    flexDirection: "row",
  },
  nextTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.regular12,
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  april1985Position: {
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
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
    position: "absolute",
  },
  anniversaryChild: {
    width: 584,
    height: 971,
    left: 0,
    top: 0,
  },
  anniversaryItem: {
    width: 375,
    left: 0,
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
  anniversaryInner: {
    width: 623,
    height: 339,
    left: 0,
    top: 0,
  },
  anniversary1: {
    marginLeft: -115.5,
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
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
  },
  vectorIcon: {
    height: "1.19%",
    width: "2.89%",
    top: "16.63%",
    right: "6.44%",
    bottom: "82.19%",
    left: "90.67%",
  },
  next: {
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    color: Color.pureWhite,
  },
  buttonRentInner: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  buttonRent: {
    top: 756,
    right: 22,
    backgroundColor: Color.color2,
    width: 115,
    height: 32,
    position: "absolute",
  },
  back: {
    color: Color.gray_100,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  buttonRent1: {
    top: 755,
    right: 233,
    backgroundColor: Color.snow,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#aca9a9",
    borderWidth: 1,
    width: 117,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_15xl,
    flexDirection: "row",
    height: 34,
  },
  april1985: {
    top: 183,
    fontSize: FontSize.regular12_size,
    color: Color.purple,
    width: 75,
    height: 19,
  },
  lineView: {
    top: 205,
    left: 11,
    borderColor: "#aba9b5",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  anniversaryDate: {
    top: 169,
    fontSize: FontSize.size_5xs,
    letterSpacing: -0.1,
    lineHeight: 8,
    color: Color.grey,
    width: 73,
    height: 8,
  },
  anniversaryChild1: {
    height: "2.21%",
    width: "4.12%",
    top: "22.19%",
    right: "8.03%",
    bottom: "75.6%",
    left: "87.85%",
  },
  productPicture03Icon: {
    top: 303,
    left: 20,
    borderRadius: 161,
    width: 335,
    height: 346,
    position: "absolute",
  },
  provideOccasionDetails: {
    top: 221,
    left: 13,
    lineHeight: 21,
    color: Color.color1,
    width: 342,
    height: 36,
    textAlign: "left",
    position: "absolute",
  },
  anniversary: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default Anniversary;
