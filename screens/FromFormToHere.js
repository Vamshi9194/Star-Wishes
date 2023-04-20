import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FromFormToHere = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fromFormToHere}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homePosition} />
      </View>
      <Image
        style={[styles.fromFormToHereChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.fromFormToHereItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-764.png")}
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
        style={[styles.iconsbasichide, styles.iconsbasichideLayout]}
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
        style={[styles.iconChevronDown, styles.iconsbasichideLayout]}
        resizeMode="cover"
        source={require("../assets/iconchevrondown.png")}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Image
        style={[styles.fromFormToHereInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.whatsSpecial, styles.signUpOrTypo]}>
        What’s Special
      </Text>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={[styles.homeIndicator3, styles.homePosition]} />
      </View>
      <Text style={[styles.signUpOr, styles.signUpOrTypo]}>
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
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-34393.png")}
      />
      <Text style={styles.chooseAnOccasion}>
        Choose an Occasion to Surprise
      </Text>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1565.png")}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-1565.png")}
        />
      </View>
      <Pressable
        style={[styles.rectanglePressable, styles.fromChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.birthdayWishes, styles.newBornLayout]}>
        Birthday Wishes
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.ellipseGroup, styles.ellipsePosition]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15651.png")}
        />
        <Image
          style={[styles.icon1, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
      </View>
      <Pressable
        style={[styles.fromFormToHereChild1, styles.fromChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.newBorn, styles.newBornLayout]}>New born</Text>
      <Image
        style={[styles.vectorIcon1, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.ellipseContainer, styles.ellipsePosition]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15651.png")}
        />
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/2.png")}
        />
      </View>
      <Pressable
        style={[styles.fromFormToHereChild2, styles.fromChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.anniversary, styles.newBornLayout]}>
        Anniversary
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.fromFormToHereChild3, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34396.png")}
      />
      <Pressable
        style={[styles.fromFormToHereChild4, styles.fromChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.getWellSoon, styles.newBornLayout]}>
        Get Well Soon
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.fromFormToHereChild5, styles.ellipsePosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-15651.png")}
      />
      <Pressable
        style={[styles.fromFormToHereChild6, styles.fromChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.wedding, styles.newBornLayout]}>Wedding</Text>
      <Image
        style={[styles.vectorIcon4, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.groupView}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15651.png")}
        />
        <Image
          style={[styles.icon1, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homePosition} />
      </View>
      <Image
        style={[styles.fromFormToHereChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.fromFormToHereItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-782.png")}
      />
      <Image
        style={[styles.fromFormToHereInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.whatsSpecial, styles.signUpOrTypo]}>
        Add Movements
      </Text>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={[styles.homeIndicator3, styles.homePosition]} />
      </View>
      <Text style={styles.selectAndArrange}>Select and arrange</Text>
      <Pressable
        style={[styles.fromFormToHereChild9, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={styles.compileAllPhotosaudiosvide}
      >{`compile all photos,audios,videos here                  `}</Text>
      <Pressable
        style={[styles.fromFormToHereChild10, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide1, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild11, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide2, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild12, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide3, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild13, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide4, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild14, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide5, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild15, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide6, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild16, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide7, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild17, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide8, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Pressable
        style={[styles.fromFormToHereChild18, styles.fromChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.compileAllPhotosaudiosvide9, styles.compileLayout]}>
        compile all photos,audios,videos here
      </Text>
      <Text style={styles.selected}>0/5 Selected</Text>
      <View style={styles.frame} />
      <Image
        style={[styles.xmlid1Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/xmlid-1.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-34393.png")}
      />
      <Pressable
        style={styles.buttonRent}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <View style={styles.buttonRentInner}>
          <View style={styles.buttonRentInner}>
            <View style={styles.buttonRentInner}>
              <View style={styles.buttonRentInner}>
                <Text style={styles.next}>Next</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Image
        style={[styles.fromFormToHereChild20, styles.iconsbasichideLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1566.png")}
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
    position: "absolute",
    width: "100%",
  },
  cooperexamplecomTypo: {
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
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
  iconsbasichideLayout: {
    height: 20,
    width: 20,
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
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    top: 55,
    left: "50%",
    position: "absolute",
  },
  homePosition: {
    height: 5,
    width: 134,
    borderRadius: Border.br_81xl,
    left: "50%",
    bottom: 8,
    marginLeft: -66.5,
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  groupChildLayout: {
    height: 90,
    width: 90,
    position: "absolute",
  },
  fromChildShadowBox1: {
    height: 112,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    width: 339,
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  newBornLayout: {
    height: 28,
    width: 128,
    display: "flex",
    color: Color.color1,
    lineHeight: 21,
    alignItems: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipsePosition: {
    left: "5.33%",
    right: "73.33%",
    width: "21.33%",
    height: "9.85%",
    position: "absolute",
  },
  fromChildShadowBox: {
    height: 39,
    width: 316,
    left: 24,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  compileLayout: {
    height: 42,
    width: 269,
    left: 48,
    color: Color.grey,
    letterSpacing: -0.2,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
  },
  fromFormToHereChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  fromFormToHereItem: {
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
    display: "none",
    height: "5.05%",
  },
  cooperexamplecom: {
    marginTop: -235,
  },
  bg1: {
    top: "26.97%",
    bottom: "67.98%",
    display: "none",
    height: "5.05%",
  },
  cooperexamplecom1: {
    marginTop: -178,
  },
  bg2: {
    height: "5.17%",
    top: "33.99%",
    bottom: "60.84%",
    display: "none",
  },
  text: {
    marginTop: -139,
  },
  iconsbasichide: {
    marginTop: -119,
    right: 57,
    height: 20,
    width: 20,
    top: "50%",
    display: "none",
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
    right: 57,
    height: 20,
    width: 20,
    top: "50%",
    display: "none",
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
  fromFormToHereInner: {
    width: 623,
    height: 339,
    top: 0,
    position: "absolute",
  },
  whatsSpecial: {
    marginLeft: -115.5,
  },
  homeIndicator3: {
    display: "none",
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
  },
  bg5: {
    top: "34.11%",
    bottom: "60.96%",
  },
  cooperexamplecom3: {
    marginTop: -121,
  },
  groupIcon: {
    right: 8,
    width: 367,
    height: 21,
    top: 0,
    position: "absolute",
  },
  chooseAnOccasion: {
    height: 26,
    width: 339,
    color: Color.darkslategray_100,
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    left: 25,
    top: 141,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  icon: {
    top: 21,
    left: 21,
    width: 47,
    height: 47,
    position: "absolute",
  },
  ellipseParent: {
    left: 18,
    top: 167,
    display: "none",
  },
  rectanglePressable: {
    left: 14,
    height: 112,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    top: 167,
  },
  birthdayWishes: {
    top: 209,
    left: 172,
    width: 128,
    display: "flex",
    color: Color.color1,
    lineHeight: 21,
  },
  vectorIcon: {
    top: "21.92%",
    bottom: "76.89%",
    left: "89.33%",
    right: "7.78%",
    maxWidth: "100%",
    width: "2.89%",
    height: "1.19%",
    position: "absolute",
  },
  groupItem: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon1: {
    height: "52.08%",
    width: "52.08%",
    top: "23.61%",
    right: "24.31%",
    bottom: "24.31%",
    left: "23.61%",
    position: "absolute",
  },
  ellipseGroup: {
    top: "22.54%",
    bottom: "67.61%",
  },
  fromFormToHereChild1: {
    top: 294,
    left: 14,
    height: 112,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
  },
  newBorn: {
    top: 336,
    left: 172,
    width: 128,
    display: "flex",
    color: Color.color1,
    lineHeight: 21,
  },
  vectorIcon1: {
    top: "37.56%",
    bottom: "61.25%",
    left: "89.33%",
    right: "7.78%",
    maxWidth: "100%",
    width: "2.89%",
    height: "1.19%",
    position: "absolute",
  },
  icon2: {
    top: 12,
    left: 19,
    width: 41,
    height: 41,
    position: "absolute",
  },
  ellipseContainer: {
    top: "38.18%",
    bottom: "51.97%",
  },
  fromFormToHereChild2: {
    top: 423,
    left: 20,
  },
  anniversary: {
    top: 460,
    left: 175,
  },
  vectorIcon2: {
    top: "53.45%",
    right: "6.18%",
    bottom: "45.36%",
    left: "90.93%",
    width: "2.89%",
    height: "1.19%",
    maxWidth: "100%",
    position: "absolute",
  },
  fromFormToHereChild3: {
    width: "8.03%",
    top: "56.65%",
    right: "80.77%",
    bottom: "38.3%",
    left: "11.2%",
    height: "5.05%",
    position: "absolute",
  },
  fromFormToHereChild4: {
    top: 554,
    left: 14,
    height: 112,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
  },
  getWellSoon: {
    top: 591,
    left: 172,
    width: 128,
    display: "flex",
    color: Color.color1,
    lineHeight: 21,
  },
  vectorIcon3: {
    top: "69.58%",
    bottom: "29.23%",
    left: "89.33%",
    right: "7.78%",
    maxWidth: "100%",
    width: "2.89%",
    height: "1.19%",
    position: "absolute",
  },
  fromFormToHereChild5: {
    top: "70.2%",
    bottom: "19.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fromFormToHereChild6: {
    top: 683,
    left: 13,
  },
  wedding: {
    top: 725,
    left: 171,
  },
  vectorIcon4: {
    top: "85.47%",
    right: "8.04%",
    bottom: "13.34%",
    left: "89.07%",
    width: "2.89%",
    height: "1.19%",
    maxWidth: "100%",
    position: "absolute",
  },
  groupView: {
    top: "86.08%",
    right: "73.6%",
    bottom: "4.06%",
    left: "5.07%",
    width: "21.33%",
    height: "9.85%",
    position: "absolute",
  },
  selectAndArrange: {
    width: 188,
    height: 13,
    color: Color.darkslategray_100,
    lineHeight: 18,
    letterSpacing: -0.1,
    left: 25,
    fontSize: FontSize.regular12_size,
    top: 141,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  fromFormToHereChild9: {
    top: 163,
  },
  compileAllPhotosaudiosvide: {
    top: 162,
    left: 38,
    width: 297,
    height: 40,
    color: Color.grey,
    letterSpacing: -0.2,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  fromFormToHereChild10: {
    top: 219,
  },
  compileAllPhotosaudiosvide1: {
    top: 218,
  },
  fromFormToHereChild11: {
    top: 276,
  },
  compileAllPhotosaudiosvide2: {
    top: 275,
  },
  fromFormToHereChild12: {
    top: 330,
  },
  compileAllPhotosaudiosvide3: {
    top: 329,
  },
  fromFormToHereChild13: {
    top: 385,
  },
  compileAllPhotosaudiosvide4: {
    top: 384,
  },
  fromFormToHereChild14: {
    top: 446,
  },
  compileAllPhotosaudiosvide5: {
    top: 445,
  },
  fromFormToHereChild15: {
    top: 502,
  },
  compileAllPhotosaudiosvide6: {
    top: 501,
  },
  fromFormToHereChild16: {
    top: 561,
  },
  compileAllPhotosaudiosvide7: {
    top: 560,
  },
  fromFormToHereChild17: {
    top: 616,
  },
  compileAllPhotosaudiosvide8: {
    top: 615,
  },
  fromFormToHereChild18: {
    top: 667,
  },
  compileAllPhotosaudiosvide9: {
    top: 666,
  },
  selected: {
    left: 255,
    color: Color.purple,
    width: 88,
    height: 19,
    fontSize: FontSize.regular12_size,
    top: 141,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  frame: {
    top: 6,
    left: -167,
    width: 224,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  xmlid1Icon: {
    height: "7.45%",
    width: "11.34%",
    top: "1.85%",
    right: "76.66%",
    bottom: "90.7%",
    left: "12%",
    position: "absolute",
  },
  next: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
  },
  buttonRentInner: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  buttonRent: {
    top: 747,
    right: 38,
    borderRadius: Border.br_15xl,
    backgroundColor: Color.color2,
    width: 317,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 31,
    position: "absolute",
  },
  fromFormToHereChild20: {
    top: 175,
    left: 302,
  },
  fromFormToHere: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default FromFormToHere;
