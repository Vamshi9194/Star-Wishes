import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPage}>
      <Image
        style={styles.landingPageChild}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.landingPageItem, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7647.png")}
      />
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={styles.rectanglePosition2}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={styles.rectanglePosition2}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg2, styles.bgPosition]}>
        <View style={styles.rectanglePosition2}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>········</Text>
      <Image
        style={[styles.iconsbasichide, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconsbasichide.png")}
      />
      <View style={[styles.bg3, styles.bg3Position]}>
        <View style={styles.rectanglePosition2}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>········</Text>
      <Image
        style={[styles.iconChevronDown, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconchevrondown.png")}
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text style={[styles.signUpOr, styles.text4FlexBox]}>
        Sign Up or Register
      </Text>
      <View style={[styles.bg4, styles.bg3Position]}>
        <View style={styles.rectanglePosition2}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom2, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg5, styles.bg3Position]}>
        <View style={styles.rectanglePosition2}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom3, styles.cooperexamplecomTypo]}>
        johndoe@example.com
      </Text>
      <Text style={[styles.superPicks, styles.topTypo]}>Super Picks</Text>
      <View style={[styles.popular, styles.popularPosition]}>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={[styles.catalogPopularParent, styles.catalogShadowBox]}>
        <View style={styles.catalogPopular}>
          <View style={styles.card}>
            <View style={styles.carName}>
              <Text style={[styles.alluArjun, styles.alluArjunTypo]}>
                Allu Arjun
              </Text>
              <Text
                style={[styles.movieStarPushpa, styles.movieStarPushpaLayout]}
              >
                #Movie Star, #Pushpa
              </Text>
            </View>
            <Image
              style={[styles.likeIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/like.png")}
            />
            <View style={styles.car} />
            <Pressable
              style={[styles.buttonRent, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("CelebrityPage2")}
            >
              <Text style={[styles.bookNow, styles.buttonFlexBox]}>
                Book Now
              </Text>
            </Pressable>
            <View style={[styles.price, styles.pricePosition]}>
              <Text style={[styles.text2, styles.text2Common]}>₹ 22000</Text>
            </View>
            <View style={[styles.spesification, styles.gasolinePosition]} />
            <View style={[styles.gasoline, styles.gasolinePosition]}>
              <Image
                style={styles.gasolineChild}
                resizeMode="cover"
                source={require("../assets/group-34394.png")}
              />
              <Text style={[styles.kGreetings, styles.kGreetingsClr]}>
                224K Greetings
              </Text>
            </View>
            <Image
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle-7701.png")}
            />
          </View>
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangle6, styles.maskBorder]} />
          <Text style={[styles.facebook, styles.facebookTypo2]}>
            FLAT 15% OFF
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition1]}>
        <View style={styles.rectangle7} />
        <Text
          style={[styles.facebook1, styles.facebookTypo1]}
        >{`Popular Stars `}</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition1]}>
        <View style={[styles.rectangle8, styles.rectangleBorder]} />
        <View style={[styles.rectangle9, styles.rectangleBorder]} />
        <View style={[styles.rectangle10, styles.rectangleBorder]} />
        <Text style={[styles.facebook2, styles.facebookTypo1]}>NEW</Text>
        <Text style={[styles.facebook3, styles.facebookTypo]}>
          Trending Stars
        </Text>
        <Text style={[styles.facebook4, styles.facebookTypo]}>
          Top Heroines
        </Text>
      </View>
      <View style={[styles.catalogPopularGroup, styles.catalogShadowBox]}>
        <View style={styles.catalogPopular}>
          <View style={styles.catalog1}>
            <View style={styles.carName}>
              <Text style={[styles.maheshBabu, styles.alluArjunTypo]}>
                Mahesh babu
              </Text>
              <Text
                style={[styles.movieStarPushpa, styles.movieStarPushpaLayout]}
              >
                #Movie Star, #Actor
              </Text>
            </View>
            <Image
              style={[styles.likeIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/like.png")}
            />
            <View style={styles.car} />
            <View style={[styles.buttonRent1, styles.pricePosition]}>
              <Text style={[styles.bookNow, styles.buttonFlexBox]}>
                Book Now
              </Text>
            </View>
            <View style={[styles.price, styles.pricePosition]}>
              <Text style={[styles.text2, styles.text2Common]}>₹ 23000</Text>
            </View>
            <View style={[styles.spesification, styles.gasolinePosition]} />
            <View style={[styles.gasoline, styles.gasolinePosition]}>
              <Image
                style={styles.gasolineChild}
                resizeMode="cover"
                source={require("../assets/group-34394.png")}
              />
              <Text style={[styles.kGreetings, styles.kGreetingsClr]}>
                314K Greetings
              </Text>
            </View>
            <Image
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle-7702.png")}
            />
          </View>
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangle6, styles.maskBorder]} />
          <Text style={[styles.facebook5, styles.facebookTypo2]}>
            FLAT 10% OFF
          </Text>
        </View>
      </View>
      <View style={[styles.popular1, styles.popularPosition]}>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={[styles.topCategoriesParent, styles.topPosition]}>
        <Text style={[styles.topCategories, styles.topTypo]}>
          Top Categories
        </Text>
        <Pressable
          style={styles.popular2}
          onPress={() => navigation.navigate("CelebrityPage")}
        >
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
        <View style={styles.papyrusDarkPattern} />
        <Text style={[styles.actresses, styles.actorsTypo]}>Actresses</Text>
        <Text style={[styles.tvStars, styles.tvStarsTypo]}>Tv Stars</Text>
        <Text style={[styles.actors, styles.actorsTypo]}>Actors</Text>
        <Text style={[styles.anchors, styles.tvStarsTypo]}>Anchors</Text>
        <Text style={[styles.musicians, styles.actorsTypo]}>Musicians</Text>
        <Text style={[styles.directors, styles.tvStarsTypo]}>Directors</Text>
        <Text style={[styles.singers, styles.actorsTypo]}>Singers</Text>
        <Text style={[styles.comedians, styles.tvStarsTypo]}>Comedians</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-799.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-801.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-803.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-805.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-800.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-802.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-804.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-806.png")}
        />
      </View>
      <Text style={[styles.topFeatures, styles.topPosition]}>Top Features</Text>
      <View style={styles.companyParent}>
        <View style={[styles.company, styles.companyLayout]}>
          <View style={styles.childShadowBox} />
          <View style={styles.spotifyPosition} />
          <Text style={[styles.videoWishes, styles.voiceTypo]}>{`Video
Wishes`}</Text>
        </View>
        <View style={[styles.component21, styles.companyLayout]}>
          <View style={styles.childShadowBox} />
          <View style={styles.spotifyPosition} />
          <Text style={[styles.corporate, styles.voiceTypo]}>Corporate</Text>
          <Image
            style={[styles.layer2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/layer-21.png")}
          />
        </View>
        <View style={[styles.component22, styles.componentPosition]}>
          <View style={styles.childShadowBox} />
          <View style={styles.spotifyPosition} />
          <Text style={[styles.singASong, styles.voiceTypo]}>Sing a Song</Text>
        </View>
        <View style={[styles.component24, styles.componentPosition]}>
          <View style={styles.childShadowBox} />
          <Image
            style={[styles.spotifyIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/spotify.png")}
          />
          <Text style={[styles.voice, styles.voiceTypo]}>Voice</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
      </View>
      <View style={[styles.banner, styles.bannerLayout]}>
        <LinearGradient
          style={[styles.mask, styles.maskBg]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0)"]}
        />
        <Image
          style={[styles.maskIcon, styles.maskPosition]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Text style={styles.minAgo}>3 min ago</Text>
        <Image
          style={[styles.image9Icon, styles.bannerLayout]}
          resizeMode="cover"
          source={require("../assets/image-9.png")}
        />
        <Image
          style={[styles.materialSymbolsplayCircleOIcon, styles.ellipseLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolsplaycircleoutlinesharp.png")}
        />
        <LinearGradient
          style={[styles.bannerChild, styles.maskBg]}
          locations={[0, 0.51, 1]}
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(126, 126, 126, 0.3)",
            "rgba(0, 0, 0, 0.6)",
          ]}
        />
      </View>
      <Image
        style={[styles.g1773Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/g17731.png")}
      />
      <Image
        style={[styles.g585Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/g5851.png")}
      />
      <Text style={[styles.latestHappyBirthday, styles.movieStarPushpaLayout]}>
        Latest Happy Birthday Wishes to a Fan by Prabhas
      </Text>
      <View style={styles.homeIndicatorParent}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={[styles.navigation, styles.navigationPosition]}>
          <View style={[styles.rectangle12, styles.navigationPosition]} />
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group-34399.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        <Text style={[styles.refer, styles.homeTypo]}>Refer</Text>
        <Text style={[styles.offers, styles.homeTypo]}>Offers</Text>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.services, styles.homeTypo]}>Services</Text>
        <Image
          style={[styles.groupIcon1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group5.png")}
        />
        <Text style={[styles.share, styles.homeTypo]}>Share</Text>
        <Image
          style={styles.groupChild6}
          resizeMode="cover"
          source={require("../assets/group-34398.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
      </View>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
        <Image
          style={[styles.groupChild7, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-343932.png")}
        />
        <Pressable
          style={[styles.ellipse, styles.ellipseLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.iconLayout4}
            resizeMode="cover"
            source={require("../assets/ellipse1.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupChild8, styles.text4Position]}
          resizeMode="cover"
          source={require("../assets/ellipse-798.png")}
        />
        <Image
          style={styles.groupChild9}
          resizeMode="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Text style={[styles.text4, styles.text4Position]}>3</Text>
        <Image
          style={[styles.icon1, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/7.png")}
        />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("SplashScreen")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group-34403.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bgPosition: {
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    display: "none",
    position: "absolute",
  },
  rectanglePosition2: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cooperexamplecomTypo: {
    color: Color.primaryColor,
    textAlign: "left",
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
    height: "3.8%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
    position: "absolute",
  },
  text4FlexBox: {
    textAlign: "center",
    color: Color.pureWhite,
  },
  topTypo: {
    height: 29,
    fontSize: FontSize.size_lg,
    color: Color.color1,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
  },
  popularPosition: {
    left: 309,
    flexDirection: "row",
    position: "absolute",
  },
  catalogShadowBox: {
    height: 286,
    width: 240,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    top: 184,
    position: "absolute",
  },
  alluArjunTypo: {
    height: 13,
    lineHeight: 24,
    letterSpacing: -0.3,
    alignItems: "center",
    display: "flex",
    color: Color.color1,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  movieStarPushpaLayout: {
    width: 123,
    letterSpacing: -0.2,
    height: 13,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  iconLayout3: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  pricePosition: {
    top: 234,
    height: 36,
    position: "absolute",
  },
  text2Common: {
    letterSpacing: -0.2,
    display: "flex",
  },
  gasolinePosition: {
    left: 18,
    position: "absolute",
  },
  kGreetingsClr: {
    color: Color.secondary300,
    fontSize: FontSize.size_3xs,
  },
  maskBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  facebookTypo2: {
    width: 71,
    color: Color.grey,
    textTransform: "uppercase",
    letterSpacing: 0,
    fontSize: FontSize.size_4xs,
    left: 8,
    textAlign: "center",
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition1: {
    bottom: "84.05%",
    top: "13.87%",
    height: "2.09%",
    position: "absolute",
  },
  facebookTypo1: {
    height: 8,
    marginTop: -4,
    textTransform: "uppercase",
    letterSpacing: 0,
    fontSize: FontSize.size_4xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    top: "50%",
    position: "absolute",
  },
  rectangleBorder: {
    borderColor: "#191781",
    borderRadius: Border.br_30xl,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  facebookTypo: {
    width: 81,
    height: 8,
    marginTop: -4,
    textTransform: "uppercase",
    letterSpacing: 0,
    fontSize: FontSize.size_4xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color1,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    top: "50%",
    position: "absolute",
  },
  topPosition: {
    marginLeft: -169.5,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  actorsTypo: {
    lineHeight: 14,
    top: 113,
    color: Color.grey,
    letterSpacing: -0.2,
    fontSize: FontSize.regular12_size,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  tvStarsTypo: {
    top: 201,
    lineHeight: 14,
    color: Color.grey,
    letterSpacing: -0.2,
    fontSize: FontSize.regular12_size,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  groupLayout1: {
    width: 56,
    top: 50,
    height: 56,
    position: "absolute",
  },
  groupChildPosition: {
    top: 140,
    width: 56,
    height: 56,
    position: "absolute",
  },
  companyLayout: {
    height: 87,
    width: 81,
    top: 0,
    position: "absolute",
  },
  voiceTypo: {
    lineHeight: 10,
    letterSpacing: -0.1,
    color: Color.grey,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  componentPosition: {
    top: 89,
    height: 87,
    width: 81,
    position: "absolute",
  },
  bannerLayout: {
    width: 275,
    height: 176,
    position: "absolute",
  },
  maskBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  maskPosition: {
    borderRadius: Border.br_2xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  navigationPosition: {
    bottom: 0,
    height: 96,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupIconPosition: {
    bottom: 61,
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: 63,
    maxWidth: "100%",
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    lineHeight: 11,
    bottom: 48,
    letterSpacing: -0.1,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    position: "absolute",
  },
  rectanglePosition: {
    height: 95,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text4Position: {
    top: 41,
    position: "absolute",
  },
  landingPageChild: {
    width: 584,
    height: 971,
    left: 0,
    top: 0,
    position: "absolute",
  },
  landingPageItem: {
    top: 0,
    height: 1053,
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
    right: "0%",
  },
  bg: {
    top: "15.38%",
    bottom: "80.72%",
    display: "none",
    height: "3.89%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -355.5,
    textAlign: "left",
  },
  bg1: {
    top: "20.8%",
    bottom: "75.31%",
    display: "none",
    height: "3.89%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -298.5,
    textAlign: "left",
  },
  bg2: {
    height: "3.99%",
    top: "26.21%",
    bottom: "69.8%",
    display: "none",
  },
  text: {
    marginTop: -259.5,
  },
  iconsbasichide: {
    marginTop: -239.5,
  },
  bg3: {
    top: "32.38%",
    bottom: "63.82%",
  },
  text1: {
    marginTop: -195.5,
  },
  iconChevronDown: {
    marginTop: -175.5,
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
    width: 231,
    height: 31,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  bg4: {
    top: "20.61%",
    bottom: "75.59%",
  },
  cooperexamplecom2: {
    marginTop: -301.5,
    textAlign: "left",
  },
  bg5: {
    top: "26.31%",
    bottom: "69.9%",
  },
  cooperexamplecom3: {
    marginTop: -241.5,
    textAlign: "left",
  },
  superPicks: {
    marginLeft: -168.5,
    top: 111,
    width: 348,
    height: 29,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  viewAll: {
    fontFamily: FontFamily.plusJakartaSansSemibold,
    color: Color.color2,
    width: 48,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.regular12_size,
    fontWeight: "600",
    textAlign: "right",
    height: 20,
  },
  popular: {
    top: 116,
    flexDirection: "row",
  },
  alluArjun: {
    width: 96,
  },
  movieStarPushpa: {
    marginTop: 4,
    color: Color.secondary300,
    fontSize: FontSize.size_3xs,
  },
  carName: {
    left: 16,
    top: 16,
    position: "absolute",
  },
  likeIcon: {
    left: 200,
    top: 16,
  },
  car: {
    top: 92,
    left: 30,
    width: 180,
    height: 56,
    position: "absolute",
  },
  bookNow: {
    width: 68,
    height: 16,
    letterSpacing: -0.2,
    display: "flex",
    justifyContent: "center",
    fontSize: FontSize.regular12_size,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
  },
  buttonRent: {
    top: 237,
    height: 30,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    width: 100,
    backgroundColor: Color.color2,
    borderRadius: Border.br_15xl,
    right: 16,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text2: {
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 92,
    height: 36,
    alignItems: "center",
    color: Color.color1,
    textAlign: "left",
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
  },
  price: {
    height: 36,
    left: 16,
  },
  spesification: {
    top: 192,
  },
  gasolineChild: {
    height: 15,
    width: 12,
  },
  kGreetings: {
    width: 94,
    height: 14,
    marginLeft: 4,
    letterSpacing: -0.2,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  gasoline: {
    top: 206,
    flexDirection: "row",
  },
  cardChild: {
    top: 56,
    borderRadius: Border.br_7xs,
    width: 208,
    height: 136,
    left: 16,
    position: "absolute",
  },
  card: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    height: 286,
    width: 240,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    overflow: "hidden",
    backgroundColor: Color.pureWhite,
  },
  catalogPopular: {
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangle6: {
    height: "105.88%",
    top: "-2.94%",
    bottom: "-2.94%",
    borderRadius: Border.br_4xl,
    borderColor: "#5e7389",
    right: 0,
    left: 0,
    position: "absolute",
  },
  facebook: {
    marginTop: -6.5,
    height: 12,
    fontFamily: FontFamily.semibold20,
  },
  rectangleParent: {
    height: "5.94%",
    top: "71.68%",
    right: 19,
    bottom: "22.38%",
    left: 136,
    position: "absolute",
  },
  catalogPopularParent: {
    left: 19,
  },
  rectangle7: {
    borderRadius: 53,
    backgroundColor: Color.color1,
    right: 0,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: 0,
    position: "absolute",
  },
  facebook1: {
    left: 6,
    width: 92,
    color: Color.pureWhite,
  },
  rectangleGroup: {
    right: 253,
    left: 19,
  },
  rectangle8: {
    right: 204,
    left: 0,
  },
  rectangle9: {
    right: 102,
    left: 57,
  },
  rectangle10: {
    left: 159,
    right: 0,
  },
  facebook2: {
    left: 5,
    width: 37,
    color: Color.color1,
  },
  facebook3: {
    left: 62,
    width: 81,
  },
  facebook4: {
    left: 162,
  },
  rectangleContainer: {
    right: -7,
    left: 131,
  },
  maheshBabu: {
    width: 117,
  },
  buttonRent1: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    width: 100,
    backgroundColor: Color.color2,
    borderRadius: Border.br_15xl,
    right: 16,
    flexDirection: "row",
  },
  catalog1: {
    borderRadius: Border.br_3xs,
    height: 286,
    width: 240,
    overflow: "hidden",
    backgroundColor: Color.pureWhite,
  },
  facebook5: {
    marginTop: -5.5,
    fontFamily: FontFamily.montserratSemibold,
    height: 7,
  },
  catalogPopularGroup: {
    left: 280,
  },
  popular1: {
    top: 508,
    flexDirection: "row",
  },
  topCategories: {
    marginLeft: -174,
    width: 348,
    height: 29,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  popular2: {
    top: 6,
    left: 291,
    flexDirection: "row",
    position: "absolute",
  },
  papyrusDarkPattern: {
    top: 35,
    width: 339,
    height: 193,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: 0,
    position: "absolute",
    backgroundColor: Color.pureWhite,
  },
  actresses: {
    left: 20,
  },
  tvStars: {
    left: 25,
  },
  actors: {
    left: 107,
  },
  anchors: {
    left: 101,
  },
  musicians: {
    left: 175,
  },
  directors: {
    left: 178,
  },
  singers: {
    left: 261,
  },
  comedians: {
    left: 248,
  },
  groupChild: {
    left: 19,
  },
  groupItem: {
    left: 98,
  },
  groupInner: {
    left: 177,
  },
  ellipseIcon: {
    left: 256,
  },
  groupChild1: {
    left: 19,
  },
  groupChild2: {
    left: 98,
  },
  groupChild3: {
    left: 177,
  },
  groupChild4: {
    left: 256,
  },
  topCategoriesParent: {
    top: 748,
    height: 228,
  },
  topFeatures: {
    top: 503,
    height: 29,
    fontSize: FontSize.size_lg,
    color: Color.color1,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
    marginLeft: -169.5,
  },
  childShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(54, 54, 54, 0.02)",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
  spotifyPosition: {
    borderRadius: Border.br_xs,
    left: "28.28%",
    bottom: "43.93%",
    right: "27.27%",
    top: "14.95%",
    width: "44.44%",
    height: "41.12%",
    position: "absolute",
  },
  videoWishes: {
    top: "67.29%",
    left: "28.52%",
  },
  company: {
    left: 0,
  },
  corporate: {
    top: "74.71%",
    left: "18.58%",
  },
  layer2Icon: {
    top: "19.54%",
    right: "26.7%",
    bottom: "41.38%",
    left: "31.06%",
    width: "42.24%",
    height: "39.08%",
    maxHeight: "100%",
    position: "absolute",
  },
  component21: {
    left: 83,
  },
  singASong: {
    top: "72.41%",
    left: "13.61%",
  },
  component22: {
    left: 0,
  },
  spotifyIcon: {
    borderRadius: Border.br_xs,
    left: "28.28%",
    bottom: "43.93%",
    right: "27.27%",
    top: "14.95%",
    width: "44.44%",
    height: "41.12%",
    position: "absolute",
    display: "none",
  },
  voice: {
    top: "73.56%",
    left: "32.3%",
  },
  vectorIcon: {
    top: "24.14%",
    right: "29.19%",
    bottom: "36.78%",
    left: "28.57%",
    width: "42.24%",
    height: "39.08%",
    maxHeight: "100%",
    position: "absolute",
  },
  component24: {
    left: 83,
  },
  companyParent: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 164,
    height: 176,
    top: 542,
    left: 18,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  mask: {
    borderColor: "rgba(151, 151, 151, 0.19)",
    opacity: 0.39,
    borderRadius: Border.br_2xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
  },
  maskIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  minAgo: {
    marginTop: -67,
    width: "21.02%",
    left: "72.2%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.skModernistRegular,
    color: Color.pureWhite,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  image9Icon: {
    borderRadius: 18,
    left: 0,
    top: 0,
  },
  materialSymbolsplayCircleOIcon: {
    top: 62,
    left: 118,
    opacity: 0.5,
    overflow: "hidden",
  },
  bannerChild: {
    top: 124,
    left: -4,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    width: 249,
    height: 55,
  },
  banner: {
    left: 192,
    top: 542,
    width: 275,
    overflow: "hidden",
  },
  g1773Icon: {
    height: "3.42%",
    width: "9.6%",
    top: "53.18%",
    right: "79.47%",
    bottom: "43.4%",
    left: "10.93%",
    position: "absolute",
  },
  g585Icon: {
    height: "3.29%",
    width: "9.24%",
    top: "61.95%",
    right: "79.73%",
    bottom: "34.76%",
    left: "11.02%",
    position: "absolute",
  },
  latestHappyBirthday: {
    top: 690,
    left: 210,
    fontSize: FontSize.size_5xs,
    lineHeight: 9,
    color: Color.pureWhite,
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
    bottom: 37,
    height: 34,
  },
  rectangle12: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.color1,
  },
  navigation: {
    shadowRadius: 5,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  groupIcon: {
    width: "5.94%",
    right: "27.53%",
    left: "66.53%",
    height: 23,
    position: "absolute",
  },
  groupChild5: {
    width: "75.2%",
    right: "14.4%",
    left: "10.4%",
  },
  refer: {
    left: "66.13%",
    opacity: 0.5,
  },
  offers: {
    left: "84.8%",
    opacity: 0.5,
  },
  home: {
    left: 35,
  },
  services: {
    left: 99,
    opacity: 0.5,
  },
  groupIcon1: {
    width: "6.08%",
    right: "65.27%",
    left: "28.66%",
  },
  share: {
    left: "46.67%",
    opacity: 0.5,
  },
  groupChild6: {
    width: "4.8%",
    right: "47.6%",
    bottom: 64,
    left: "47.6%",
    height: 18,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon2: {
    width: "5.61%",
    right: "8.79%",
    left: "85.6%",
    bottom: 61,
    maxWidth: "100%",
    overflow: "hidden",
  },
  homeIndicatorParent: {
    bottom: -26,
    height: 96,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.color1,
  },
  groupChild7: {
    right: 3,
    width: 367,
    top: 0,
  },
  iconLayout4: {
    height: "100%",
    width: "100%",
  },
  ellipse: {
    top: 38,
    left: 19,
  },
  groupChild8: {
    left: 47,
    height: 12,
    width: 12,
  },
  groupChild9: {
    top: 42,
    left: 48,
    width: 10,
    height: 10,
    position: "absolute",
  },
  text4: {
    left: 51,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
  },
  icon1: {
    top: 47,
    left: 337,
    overflow: "hidden",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "37.07%",
    top: "36.84%",
    right: "28.53%",
    bottom: "28.35%",
    width: "34.4%",
    height: "34.81%",
    position: "absolute",
  },
  landingPage: {
    flex: 1,
    overflow: "hidden",
    height: 1053,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default LandingPage;
