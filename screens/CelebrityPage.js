import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CelebrityPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.celebrityPage}>
      <Image
        style={styles.celebrityPageChild}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.celebrityPageItem, styles.celebrityPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7644.png")}
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
      <Text style={styles.signUpOr}>Sign Up or Register</Text>
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
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.actors, styles.actorsLayout]}>Actors</Text>
      <Text style={[styles.actress, styles.actorsLayout]}>Actress</Text>
      <Text style={[styles.sportsCelebrities, styles.actorsLayout]}>
        Sports Celebrities
      </Text>
      <Text style={[styles.comedians, styles.actorsLayout]}>Comedians</Text>
      <Pressable
        style={[styles.popular, styles.popularPosition]}
        onPress={() => navigation.navigate("CelebrityPage1")}
      >
        <Text style={styles.viewAll}>View All</Text>
      </Pressable>
      <View style={[styles.popular1, styles.popularPosition]}>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={[styles.popular2, styles.popularPosition]}>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={[styles.popular3, styles.popularPosition]}>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <Pressable
        style={[styles.productPicture01, styles.productIconLayout3]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/product-picture01.png")}
        />
      </Pressable>
      <Image
        style={[styles.productPicture01Icon, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture011.png")}
      />
      <Image
        style={[styles.productPicture01Icon1, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture012.png")}
      />
      <Image
        style={[styles.productPicture01Icon2, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture013.png")}
      />
      <Image
        style={[styles.productPicture01Icon3, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture014.png")}
      />
      <Image
        style={[styles.productPicture01Icon4, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture015.png")}
      />
      <Image
        style={[styles.productPicture01Icon5, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture016.png")}
      />
      <Image
        style={[styles.productPicture01Icon6, styles.productIconLayout3]}
        resizeMode="cover"
        source={require("../assets/product-picture017.png")}
      />
      <Image
        style={[styles.productPicture01Icon7, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture018.png")}
      />
      <Image
        style={[styles.productPicture01Icon8, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture019.png")}
      />
      <Image
        style={[styles.productPicture01Icon9, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture0110.png")}
      />
      <Image
        style={[styles.productPicture01Icon10, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture0111.png")}
      />
      <Image
        style={[styles.productPicture01Icon11, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture0112.png")}
      />
      <Image
        style={[styles.productPicture01Icon12, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture0113.png")}
      />
      <Image
        style={[styles.productPicture01Icon13, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture0114.png")}
      />
      <Image
        style={[styles.productPicture01Icon14, styles.productIconLayout2]}
        resizeMode="cover"
        source={require("../assets/product-picture015.png")}
      />
      <Image
        style={[styles.productPicture02Icon, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture02.png")}
      />
      <Image
        style={[styles.productPicture02Icon1, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture021.png")}
      />
      <Image
        style={[styles.productPicture02Icon2, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture022.png")}
      />
      <Image
        style={[styles.productPicture02Icon3, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture023.png")}
      />
      <Image
        style={[styles.productPicture02Icon4, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture024.png")}
      />
      <Image
        style={[styles.productPicture02Icon5, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture025.png")}
      />
      <Image
        style={[styles.productPicture02Icon6, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture026.png")}
      />
      <Image
        style={[styles.productPicture02Icon7, styles.productIconLayout1]}
        resizeMode="cover"
        source={require("../assets/product-picture025.png")}
      />
      <Image
        style={[styles.productPicture03Icon, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture031.png")}
      />
      <Image
        style={[styles.productPicture03Icon1, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture032.png")}
      />
      <Image
        style={[styles.productPicture03Icon2, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture033.png")}
      />
      <Image
        style={[styles.productPicture03Icon3, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture034.png")}
      />
      <Image
        style={[styles.productPicture03Icon4, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture035.png")}
      />
      <Image
        style={[styles.productPicture03Icon5, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture036.png")}
      />
      <Image
        style={[styles.productPicture03Icon6, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture037.png")}
      />
      <Image
        style={[styles.productPicture03Icon7, styles.productIconLayout]}
        resizeMode="cover"
        source={require("../assets/product-picture024.png")}
      />
      <View style={styles.homeIndicatorParent}>
        <View style={[styles.homeIndicator, styles.celebrityPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={[styles.homeIndicator, styles.celebrityPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={[styles.navigation, styles.navigationPosition]}>
          <View style={[styles.rectangle6, styles.navigationPosition]} />
        </View>
        <Image
          style={[styles.groupChild, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group-34399.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        <Text style={[styles.refer, styles.referTypo]}>Refer</Text>
        <Text style={[styles.offers, styles.referTypo]}>Offers</Text>
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.services, styles.referTypo]}>Services</Text>
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.share, styles.referTypo]}>Share</Text>
        <Image
          style={[styles.groupInner, styles.actorsLayout]}
          resizeMode="cover"
          source={require("../assets/group-34398.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
      </View>
      <Image
        style={[styles.celebrityPageInner, styles.celebrityPosition]}
        resizeMode="cover"
        source={require("../assets/group-34401.png")}
      />
      <Text style={styles.allCategories}>All Categories</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("LandingPage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  celebrityPosition: {
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
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    left: 62,
    top: "50%",
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
    height: "4.03%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  actorsLayout: {
    height: 18,
    position: "absolute",
  },
  popularPosition: {
    flexDirection: "row",
    left: 309,
    position: "absolute",
  },
  productIconLayout3: {
    height: 75,
    width: 75,
    left: 194,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  productIconLayout2: {
    left: 281,
    borderRadius: Border.br_8xs,
    height: 75,
    width: 75,
    position: "absolute",
  },
  productIconLayout1: {
    borderRadius: Border.br_5xs,
    left: 19,
    height: 75,
    width: 75,
    position: "absolute",
  },
  productIconLayout: {
    left: 106,
    borderRadius: Border.br_5xs,
    height: 75,
    width: 75,
    position: "absolute",
  },
  navigationPosition: {
    bottom: 0,
    height: 96,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupPosition1: {
    bottom: 61,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: 63,
    maxWidth: "100%",
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  referTypo: {
    opacity: 0.5,
    lineHeight: 11,
    letterSpacing: -0.1,
    fontSize: FontSize.size_4xs,
    bottom: 48,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  celebrityPageChild: {
    width: 584,
    height: 971,
    left: 0,
    top: 0,
    position: "absolute",
  },
  celebrityPageItem: {
    height: 1053,
    top: 0,
    width: 375,
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  bg: {
    top: "16.33%",
    bottom: "79.54%",
    height: "4.13%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -325,
  },
  bg1: {
    top: "22.08%",
    bottom: "73.79%",
    height: "4.13%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -268,
  },
  bg2: {
    height: "4.23%",
    top: "27.82%",
    bottom: "67.94%",
  },
  text: {
    marginTop: -229,
  },
  iconsbasichide: {
    marginTop: -209,
  },
  bg3: {
    top: "34.38%",
    bottom: "61.59%",
  },
  text1: {
    marginTop: -165,
  },
  iconChevronDown: {
    marginTop: -145,
    overflow: "hidden",
  },
  forgotPassword: {
    marginLeft: 136.29,
    top: 412,
    color: Color.secondaryColor,
    width: 163,
    textAlign: "right",
    left: "50%",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
  },
  signUpOr: {
    marginLeft: -579.5,
    top: 55,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.semibold20,
    width: 231,
    height: 31,
    textAlign: "center",
    color: Color.pureWhite,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  bg4: {
    top: "21.88%",
    bottom: "74.09%",
  },
  cooperexamplecom2: {
    marginTop: -271,
  },
  bg5: {
    top: "27.92%",
    bottom: "68.04%",
  },
  cooperexamplecom3: {
    marginTop: -211,
  },
  vectorIcon: {
    height: "1.41%",
    width: "2.13%",
    top: "6.65%",
    right: "89.6%",
    bottom: "91.94%",
    left: "8.27%",
    position: "absolute",
  },
  actors: {
    width: 177,
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    marginLeft: -168.5,
    height: 18,
    left: "50%",
    textAlign: "left",
    top: 116,
  },
  actress: {
    top: 322,
    width: 177,
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    marginLeft: -168.5,
    height: 18,
    left: "50%",
    textAlign: "left",
  },
  sportsCelebrities: {
    top: 529,
    width: 177,
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    marginLeft: -168.5,
    height: 18,
    left: "50%",
    textAlign: "left",
  },
  comedians: {
    top: 733,
    width: 177,
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    marginLeft: -168.5,
    height: 18,
    left: "50%",
    textAlign: "left",
  },
  viewAll: {
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.plusJakartaSansSemibold,
    color: Color.color2,
    display: "flex",
    alignItems: "center",
    width: 48,
    fontWeight: "600",
    textAlign: "right",
    height: 20,
  },
  popular: {
    top: 116,
  },
  popular1: {
    top: 322,
  },
  popular2: {
    top: 529,
  },
  popular3: {
    top: 733,
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  productPicture01: {
    top: 140,
  },
  productPicture01Icon: {
    top: 348,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon1: {
    top: 555,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon2: {
    top: 759,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon3: {
    top: 223,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon4: {
    top: 431,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon5: {
    top: 638,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon6: {
    top: 842,
    borderRadius: Border.br_8xs,
  },
  productPicture01Icon7: {
    top: 140,
  },
  productPicture01Icon8: {
    top: 348,
  },
  productPicture01Icon9: {
    top: 555,
  },
  productPicture01Icon10: {
    top: 759,
  },
  productPicture01Icon11: {
    top: 223,
  },
  productPicture01Icon12: {
    top: 431,
  },
  productPicture01Icon13: {
    top: 638,
  },
  productPicture01Icon14: {
    top: 842,
  },
  productPicture02Icon: {
    top: 140,
  },
  productPicture02Icon1: {
    top: 348,
  },
  productPicture02Icon2: {
    top: 555,
  },
  productPicture02Icon3: {
    top: 759,
  },
  productPicture02Icon4: {
    top: 223,
  },
  productPicture02Icon5: {
    top: 431,
  },
  productPicture02Icon6: {
    top: 638,
  },
  productPicture02Icon7: {
    top: 842,
  },
  productPicture03Icon: {
    top: 140,
  },
  productPicture03Icon1: {
    top: 348,
  },
  productPicture03Icon2: {
    top: 555,
  },
  productPicture03Icon3: {
    top: 759,
  },
  productPicture03Icon4: {
    top: 223,
  },
  productPicture03Icon5: {
    top: 431,
  },
  productPicture03Icon6: {
    top: 638,
  },
  productPicture03Icon7: {
    top: 842,
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
    bottom: 37,
    height: 34,
  },
  rectangle6: {
    borderRadius: Border.br_9xl,
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
  },
  groupChild: {
    width: "5.94%",
    right: "27.53%",
    left: "66.53%",
    height: 23,
  },
  groupItem: {
    width: "75.2%",
    right: "14.4%",
    left: "10.4%",
  },
  refer: {
    left: "66.13%",
  },
  offers: {
    left: "84.8%",
  },
  home: {
    left: 35,
    lineHeight: 11,
    letterSpacing: -0.1,
    fontSize: FontSize.size_4xs,
    bottom: 48,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  services: {
    left: 99,
  },
  groupIcon: {
    width: "6.08%",
    right: "65.27%",
    left: "28.66%",
  },
  share: {
    left: "46.67%",
  },
  groupInner: {
    width: "4.8%",
    right: "47.6%",
    bottom: 64,
    left: "47.6%",
    height: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon1: {
    width: "5.61%",
    right: "8.79%",
    left: "85.6%",
    height: 21,
  },
  homeIndicatorParent: {
    bottom: -29,
    height: 96,
    width: 375,
    left: 0,
    position: "absolute",
  },
  celebrityPageInner: {
    height: 95,
    top: 0,
    width: 375,
  },
  allCategories: {
    marginLeft: -137.5,
    top: 47,
    width: 116,
    height: 26,
    color: Color.pureWhite,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.97%",
    top: "5.18%",
    right: "91.57%",
    bottom: "93.29%",
    width: "2.45%",
    height: "1.53%",
    position: "absolute",
  },
  celebrityPage: {
    flex: 1,
    height: 992,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default CelebrityPage;
