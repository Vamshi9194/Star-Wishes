import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MovementsToHere = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.movementsToHere}>
      <View style={styles.homeIndicator}>
        <View style={styles.homePosition} />
      </View>
      <Image
        style={[styles.movementsToHereChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={styles.movementsToHereItem}
        resizeMode="cover"
        source={require("../assets/rectangle-7641.png")}
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
        style={[styles.movementsToHereInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.whatsSpecial, styles.signUpOrTypo]}>
        What’s Special
      </Text>
      <View style={styles.homeIndicator}>
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
        style={[styles.rectanglePressable, styles.movementsChildShadowBox3]}
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
        style={[styles.movementsToHereChild1, styles.movementsChildShadowBox3]}
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
        style={[styles.movementsToHereChild2, styles.movementsChildShadowBox3]}
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
        style={[styles.movementsToHereChild3, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-34396.png")}
      />
      <Pressable
        style={[styles.movementsToHereChild4, styles.movementsChildShadowBox3]}
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
        style={[styles.movementsToHereChild5, styles.ellipsePosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-15651.png")}
      />
      <Pressable
        style={[styles.movementsToHereChild6, styles.movementsChildShadowBox3]}
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
      <View style={styles.homeIndicator}>
        <View style={styles.homePosition} />
      </View>
      <Image
        style={[styles.movementsToHereChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={styles.movementsToHereItem}
        resizeMode="cover"
        source={require("../assets/rectangle-782.png")}
      />
      <Image
        style={[styles.movementsToHereInner, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.whatsSpecial, styles.signUpOrTypo]}>First Name</Text>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator3, styles.homePosition]} />
      </View>
      <Text style={styles.giftDashboardgiftA}>
        Gift Dashboard/gift a Star wish
      </Text>
      <Pressable
        style={[styles.movementsToHereChild9, styles.movementsChildShadowBox2]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={[styles.momentsAddParticularContainer, styles.containerFlexBox]}
      >
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Moments
`}</Text>
          <Text style={styles.addParticularMemories}>
            Add particular memories or stories you remember
          </Text>
        </Text>
      </Text>
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </View>
      <Pressable
        style={[styles.movementsToHereChild10, styles.movementsChildShadowBox2]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={[
          styles.invitationAddParticularContainer,
          styles.containerFlexBox,
        ]}
      >
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Invitation
`}</Text>
          <Text style={styles.addParticularMemories}>
            Add particular memories or stories you remember
          </Text>
        </Text>
      </Text>
      <View style={[styles.container, styles.wrapperPosition]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </View>
      <Pressable
        style={[styles.movementsToHereChild11, styles.movementsChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={[
          styles.celebrityAddParticularContainer,
          styles.addContainerPosition1,
        ]}
      >
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Celebrity
`}</Text>
          <Text style={styles.addParticularMemories}>
            Add particular memories or stories you remember
          </Text>
        </Text>
      </Text>
      <View style={[styles.frame, styles.framePosition]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </View>
      <Pressable
        style={[styles.movementsToHereChild12, styles.movementsChildShadowBox1]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={[
          styles.themesAddParticularContainer,
          styles.addContainerPosition1,
        ]}
      >
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Themes
`}</Text>
          <Text style={styles.addParticularMemories}>
            Add particular memories or stories you remember
          </Text>
        </Text>
      </Text>
      <View style={[styles.wrapper1, styles.framePosition]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </View>
      <Pressable
        style={[styles.movementsToHereChild13, styles.movementsChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={[
          styles.settingAddParticularContainer,
          styles.addContainerPosition,
        ]}
      >
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Setting
`}</Text>
          <Text style={styles.addParticularMemories}>
            Add particular memories or stories you remember
          </Text>
        </Text>
      </Text>
      <Pressable
        style={[styles.movementsToHereChild14, styles.movementsChildShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text style={[styles.mediaCompileAllContainer, styles.containerFlexBox]}>
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Media
`}</Text>
          <Text style={styles.addParticularMemories}>
            compile all photos,audios,videos here
          </Text>
        </Text>
      </Text>
      <View style={[styles.wrapper2, styles.wrapper2Position]}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/4.png")}
        />
      </View>
      <Pressable
        style={[styles.movementsToHereChild15, styles.movementsChildPosition]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <Text
        style={[
          styles.musicAddParticularContainer,
          styles.addContainerPosition,
        ]}
      >
        <Text style={styles.momentsAddParticularContainer1}>
          <Text style={styles.moments}>{`Music
`}</Text>
          <Text style={styles.addParticularMemories}>
            Add particular memories or stories you remember
          </Text>
        </Text>
      </Text>
      <View style={styles.wrapper3}>
        <Image
          style={[styles.groupItem, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </View>
      <Pressable
        style={styles.buttonRent}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <Text style={[styles.goToHome, styles.containerFlexBox]}>
          Go to home
        </Text>
      </Pressable>
      <Text style={styles.april1985}>05 April 1985</Text>
      <View style={styles.frame1} />
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
      <Image
        style={[styles.lightThemeiconarrowsolidL, styles.wrapper2Position]}
        resizeMode="cover"
        source={require("../assets/light-themeiconarrowsolid-lineback-arrow-copy-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  movementsChildShadowBox3: {
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
    alignItems: "center",
    lineHeight: 21,
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
  movementsChildShadowBox2: {
    height: 96,
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
  containerFlexBox: {
    height: 42,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  wrapperPosition: {
    bottom: "74.32%",
    width: "4.54%",
    height: "3.14%",
    top: "22.54%",
    position: "absolute",
  },
  movementsChildShadowBox1: {
    top: 280,
    height: 96,
    width: 135,
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
  addContainerPosition1: {
    top: 322,
    height: 42,
    letterSpacing: "-2%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  framePosition: {
    bottom: "60.4%",
    top: "36.45%",
    width: "4.54%",
    height: "3.14%",
    position: "absolute",
  },
  movementsChildShadowBox: {
    left: 33,
    height: 96,
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
  addContainerPosition: {
    top: 442,
    height: 42,
    width: 122,
    letterSpacing: "-2%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  wrapper2Position: {
    left: "12.8%",
    position: "absolute",
  },
  movementsChildPosition: {
    top: 400,
    width: 135,
  },
  homeIndicator: {
    top: 778,
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  movementsToHereChild: {
    width: 584,
    height: 971,
    top: 0,
    position: "absolute",
  },
  movementsToHereItem: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
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
  movementsToHereInner: {
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
    left: 172,
    width: 128,
    display: "flex",
    color: Color.color1,
    top: 209,
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
    bottom: "67.61%",
    top: "22.54%",
    left: "5.33%",
    right: "73.33%",
  },
  movementsToHereChild1: {
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
  movementsToHereChild2: {
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
  movementsToHereChild3: {
    width: "8.03%",
    top: "56.65%",
    right: "80.77%",
    bottom: "38.3%",
    left: "11.2%",
    height: "5.05%",
    position: "absolute",
  },
  movementsToHereChild4: {
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
  movementsToHereChild5: {
    top: "70.2%",
    bottom: "19.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  movementsToHereChild6: {
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
  giftDashboardgiftA: {
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
  movementsToHereChild9: {
    width: 135,
    height: 96,
    top: 167,
    left: 42,
  },
  moments: {
    color: Color.black,
    fontSize: FontSize.regular12_size,
  },
  addParticularMemories: {
    fontSize: FontSize.size_4xs,
    color: Color.grey,
  },
  momentsAddParticularContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  momentsAddParticularContainer: {
    width: 122,
    letterSpacing: "-2%",
    height: 42,
    position: "absolute",
    left: 55,
    top: 209,
  },
  wrapper: {
    right: "79.99%",
    left: "15.47%",
  },
  movementsToHereChild10: {
    left: 208,
    width: 135,
    height: 96,
    top: 167,
  },
  invitationAddParticularContainer: {
    left: 221,
    width: 122,
    letterSpacing: "-2%",
    height: 42,
    position: "absolute",
    top: 209,
  },
  container: {
    right: "35.72%",
    left: "59.73%",
  },
  movementsToHereChild11: {
    left: 42,
  },
  celebrityAddParticularContainer: {
    width: 116,
    left: 55,
  },
  frame: {
    right: "79.46%",
    left: "16%",
  },
  movementsToHereChild12: {
    left: 202,
  },
  themesAddParticularContainer: {
    left: 215,
    width: 122,
  },
  wrapper1: {
    right: "37.32%",
    left: "58.13%",
  },
  movementsToHereChild13: {
    top: 400,
    width: 135,
  },
  settingAddParticularContainer: {
    left: 46,
  },
  movementsToHereChild14: {
    top: 527,
    width: 302,
  },
  mediaCompileAllContainer: {
    top: 569,
    left: 65,
    width: 269,
    letterSpacing: "-2%",
    height: 42,
    position: "absolute",
  },
  wrapper2: {
    height: "3.2%",
    width: "7.73%",
    top: "66.87%",
    right: "79.47%",
    bottom: "29.93%",
  },
  movementsToHereChild15: {
    left: 199,
    height: 96,
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
  musicAddParticularContainer: {
    left: 212,
  },
  wrapper3: {
    top: "51.23%",
    right: "38.12%",
    bottom: "45.63%",
    left: "57.33%",
    width: "4.54%",
    height: "3.14%",
    position: "absolute",
  },
  goToHome: {
    color: Color.grey,
    width: 122,
    height: 42,
    lineHeight: 21,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  buttonRent: {
    top: 700,
    right: 40,
    borderRadius: Border.br_15xl,
    backgroundColor: Color.snow,
    borderStyle: "solid",
    borderColor: "#aca9a9",
    borderWidth: 1,
    width: 300,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 34,
    position: "absolute",
  },
  april1985: {
    left: 268,
    color: Color.purple,
    width: 75,
    height: 19,
    fontSize: FontSize.regular12_size,
    top: 141,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  frame1: {
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
  lightThemeiconarrowsolidL: {
    height: "2.96%",
    width: "6.4%",
    top: "51.11%",
    right: "80.8%",
    bottom: "45.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  movementsToHere: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default MovementsToHere;
