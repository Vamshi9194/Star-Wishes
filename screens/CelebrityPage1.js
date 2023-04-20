import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CelebrityPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.celebrityPage}>
      <Image
        style={[styles.celebrityPageChild, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.celebrityPageItem, styles.celebrityPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7645.png")}
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
      <Text style={[styles.text, styles.textTypo1]}>········</Text>
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
      <Text style={[styles.text1, styles.textTypo1]}>········</Text>
      <Image
        style={[styles.iconChevronDown, styles.iconsbasichidePosition]}
        resizeMode="cover"
        source={require("../assets/iconchevrondown.png")}
      />
      <Text style={[styles.forgotPassword, styles.forgotPasswordPosition]}>
        Forgot Password?
      </Text>
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
        style={[styles.vectorIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Text
        style={[
          styles.celebritiesToExploreContainer,
          styles.groupChild17Layout,
        ]}
      >
        <Text style={styles.textTypo}>156</Text>
        <Text
          style={styles.celebritiesToExplore}
        >{` Celebrities to explore `}</Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.filters, styles.sortTypo]}>Filters</Text>
      <Text style={[styles.sortBy, styles.sortTypo]}>Sort by</Text>
      <Text style={[styles.sortByCategory, styles.sortTypo]}>
        Sort by Category
      </Text>
      <Text style={[styles.new, styles.sortTypo]}>New</Text>
      <View style={[styles.rectangle6, styles.rectangleBorder]} />
      <View style={[styles.rectangle7, styles.rectangleBorder]} />
      <View style={[styles.rectangle8, styles.rectangleBorder]} />
      <Pressable
        style={[styles.celebrityPageInner, styles.groupViewLayout]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      />
      <View style={[styles.rectangle9, styles.rectangleBorder]} />
      <Image
        style={[styles.stroke169Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/stroke-169.png")}
      />
      <Image
        style={[styles.stroke170Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/stroke-169.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-770.png")}
      />
      <Text style={styles.alluArjun}>Allu Arjun</Text>
      <Text style={[styles.movieStarPushpa, styles.movieTypo]}>
        #Movie Star, #Pushpa
      </Text>
      <Image
        style={[styles.groupIcon, styles.vectorLayout]}
        resizeMode="cover"
        source={require("../assets/group-34394.png")}
      />
      <Text style={[styles.kGreetings, styles.greetingsTypo]}>
        224K Greetings
      </Text>
      <View style={[styles.price, styles.pricePosition]}>
        <Text style={[styles.text3, styles.textLayout]}>₹ 24000</Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.buttonRent, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <Text style={styles.bookNow}>Book Now</Text>
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupViewLayout]}>
        <View style={[styles.groupChild, styles.groupViewLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-7771.png")}
        />
        <Text style={[styles.ssThaman, styles.price1Position]}>SS Thaman</Text>
        <Text style={[styles.movieStarPushpa1, styles.price1Position]}>
          #Movie Star, #Pushpa
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/group-34394.png")}
        />
        <Text style={[styles.kGreetings1, styles.greetingsTypo]}>
          224K Greetings
        </Text>
        <View style={[styles.price1, styles.price1Position]}>
          <Text style={[styles.text3, styles.textLayout]}>₹ 18500</Text>
        </View>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.buttonRent1, styles.buttonFlexBox]}>
          <Text style={styles.bookNow}>Book Now</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-7772.png")}
        />
        <Text style={[styles.pVSindhu, styles.price1Position]}>P V Sindhu</Text>
        <Text style={[styles.movieStarPushpa1, styles.price1Position]}>
          #Sports, #Pushpa
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/group-34394.png")}
        />
        <Text style={[styles.kGreetings1, styles.greetingsTypo]}>
          224K Greetings
        </Text>
        <View style={[styles.price1, styles.price1Position]}>
          <Text style={[styles.text3, styles.textLayout]}>₹24000</Text>
        </View>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
        <View style={[styles.buttonRent1, styles.buttonFlexBox]}>
          <Text style={styles.bookNow}>Book Now</Text>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.groupChild3, styles.groupViewLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-7773.png")}
        />
        <Text style={[styles.pVSindhu, styles.price1Position]}>Rajamouli</Text>
        <Text style={[styles.movieStarPushpa1, styles.price1Position]}>
          #Movie Star, #Pushpa
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/group-34394.png")}
        />
        <Text style={[styles.kGreetings1, styles.greetingsTypo]}>
          224K Greetings
        </Text>
        <View style={[styles.price1, styles.price1Position]}>
          <Text style={[styles.text3, styles.textLayout]}>₹ 19000</Text>
        </View>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.buttonRent1, styles.buttonFlexBox]}>
          <Text style={styles.bookNow}>Book Now</Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild6, styles.groupViewLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-7774.png")}
        />
        <Text style={[styles.pVSindhu, styles.price1Position]}>Prabhas</Text>
        <Text style={[styles.movieStarPushpa1, styles.price1Position]}>
          #Movie Star, #Pushpa
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/group-34394.png")}
        />
        <Text style={[styles.kGreetings1, styles.greetingsTypo]}>
          224K Greetings
        </Text>
        <View style={[styles.price1, styles.price1Position]}>
          <Text style={[styles.text3, styles.textLayout]}>₹ 26000</Text>
        </View>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.buttonRent1, styles.buttonFlexBox]}>
          <Text style={styles.bookNow}>Book Now</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
        <View style={[styles.groupChild9, styles.groupViewLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-7775.png")}
        />
        <Text style={[styles.pVSindhu, styles.price1Position]}>Samantha</Text>
        <Text style={[styles.movieStarPushpa1, styles.price1Position]}>
          #Movie Star, #Pushpa
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/group-34394.png")}
        />
        <Text style={[styles.kGreetings1, styles.greetingsTypo]}>
          224K Greetings
        </Text>
        <View style={[styles.price1, styles.price1Position]}>
          <Text style={[styles.text3, styles.textLayout]}>₹ 21000</Text>
        </View>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.buttonRent1, styles.buttonFlexBox]}>
          <Text style={styles.bookNow}>Book Now</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupViewLayout]}>
        <View style={[styles.groupChild12, styles.groupViewLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-7776.png")}
        />
        <Text style={[styles.bramhanandam, styles.price1Position]}>
          Bramhanandam
        </Text>
        <Text style={[styles.movieStarPushpa1, styles.price1Position]}>
          #Movie Star, #Pushpa
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/group-34394.png")}
        />
        <Text style={[styles.kGreetings1, styles.greetingsTypo]}>
          224K Greetings
        </Text>
        <View style={[styles.price1, styles.price1Position]}>
          <Text style={[styles.text9, styles.textLayout]}>₹ 2000</Text>
        </View>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.buttonRent1, styles.buttonFlexBox]}>
          <Text style={styles.bookNow}>Book Now</Text>
        </View>
      </View>
      <View style={styles.homeIndicatorParent}>
        <View style={[styles.homeIndicator, styles.celebrityPosition]}>
          <View
            style={[styles.homeIndicator1, styles.forgotPasswordPosition]}
          />
        </View>
        <View style={[styles.homeIndicator, styles.celebrityPosition]}>
          <View
            style={[styles.homeIndicator1, styles.forgotPasswordPosition]}
          />
        </View>
        <View style={[styles.navigation, styles.navigationPosition]}>
          <View style={[styles.rectangle10, styles.navigationPosition]} />
        </View>
        <Image
          style={[styles.groupChild15, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group-34399.png")}
        />
        <Image
          style={[styles.groupChild16, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        <Text style={[styles.refer, styles.referTypo]}>Refer</Text>
        <Text style={[styles.offers, styles.referTypo]}>Offers</Text>
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.services, styles.referTypo]}>Services</Text>
        <Image
          style={[styles.groupIcon1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.share, styles.referTypo]}>Share</Text>
        <Image
          style={[styles.groupChild17, styles.groupChild17Layout]}
          resizeMode="cover"
          source={require("../assets/group-34398.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
      </View>
      <Image
        style={[styles.celebrityPageChild1, styles.celebrityPosition]}
        resizeMode="cover"
        source={require("../assets/group-344011.png")}
      />
      <Text style={styles.actors}>Actors</Text>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("CelebrityPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
  },
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
    left: 62,
    top: "50%",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    display: "none",
    position: "absolute",
  },
  textTypo1: {
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
  bg3Position: {
    height: "3.8%",
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
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild17Layout: {
    height: 18,
    position: "absolute",
  },
  iconLayout1: {
    width: "3.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sortTypo: {
    color: Color.grey,
    lineHeight: 8,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xs,
    top: 121,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderColor: "#aba9b5",
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    bottom: "87.04%",
    top: "10.68%",
    height: "2.28%",
    position: "absolute",
  },
  groupViewLayout: {
    height: 112,
    width: 339,
    position: "absolute",
  },
  iconLayout: {
    bottom: "87.87%",
    top: "11.8%",
    width: "1.44%",
    height: "0.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 92,
    width: 128,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  movieTypo: {
    color: Color.secondary300,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    width: 123,
    height: 13,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  vectorLayout: {
    height: "1.44%",
    position: "absolute",
  },
  greetingsTypo: {
    height: 14,
    width: 94,
    color: Color.secondary300,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  pricePosition: {
    alignItems: "center",
    left: 167,
    position: "absolute",
  },
  textLayout: {
    height: 36,
    width: 92,
    letterSpacing: -0.2,
    alignItems: "center",
    display: "flex",
    color: Color.color1,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  buttonFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    height: 22,
    width: 74,
    backgroundColor: Color.color2,
    borderRadius: Border.br_15xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  price1Position: {
    left: 149,
    alignItems: "center",
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
    fontSize: FontSize.size_4xs,
    bottom: 48,
    letterSpacing: -0.1,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  celebrityPageChild: {
    width: 584,
    height: 971,
    position: "absolute",
  },
  celebrityPageItem: {
    top: 0,
    width: 375,
    height: 1053,
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
  },
  bg: {
    top: "15.38%",
    bottom: "80.72%",
    height: "3.89%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -355.5,
  },
  bg1: {
    top: "20.8%",
    bottom: "75.31%",
    height: "3.89%",
    display: "none",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -298.5,
  },
  bg2: {
    height: "3.99%",
    top: "26.21%",
    bottom: "69.8%",
  },
  text: {
    marginTop: -259.5,
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
    marginTop: -239.5,
  },
  bg3: {
    top: "32.38%",
    bottom: "63.82%",
  },
  text1: {
    marginTop: -195.5,
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
    marginTop: -175.5,
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
    height: 31,
    textAlign: "center",
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    color: Color.pureWhite,
    left: "50%",
    position: "absolute",
  },
  bg4: {
    top: "20.61%",
    bottom: "75.59%",
  },
  cooperexamplecom2: {
    marginTop: -301.5,
  },
  bg5: {
    top: "26.31%",
    bottom: "69.9%",
  },
  cooperexamplecom3: {
    marginTop: -241.5,
  },
  vectorIcon: {
    height: "1.33%",
    width: "2.13%",
    top: "6.27%",
    right: "89.6%",
    bottom: "92.4%",
    left: "8.27%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
  },
  celebritiesToExplore: {
    fontFamily: FontFamily.regular12,
  },
  celebritiesToExploreContainer: {
    marginLeft: -168.5,
    top: 146,
    width: 177,
    color: Color.color1,
    fontSize: FontSize.size_sm,
    height: 18,
    left: "50%",
    textAlign: "left",
  },
  vectorIcon1: {
    height: "1.04%",
    top: "11.35%",
    right: "82%",
    bottom: "87.61%",
    left: "14.8%",
    position: "absolute",
  },
  filters: {
    left: 28,
    width: 23,
  },
  sortBy: {
    left: 93,
    width: 34,
  },
  sortByCategory: {
    left: 159,
    width: 69,
  },
  new: {
    left: 267,
    width: 21,
  },
  rectangle6: {
    right: 298,
    left: 19,
  },
  rectangle7: {
    right: 232,
    left: 85,
  },
  rectangle8: {
    right: 125,
    left: 151,
  },
  celebrityPageInner: {
    top: 177,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 18,
  },
  rectangle9: {
    right: 82,
    left: 258,
  },
  stroke169Icon: {
    right: "64.08%",
    left: "34.48%",
  },
  stroke170Icon: {
    right: "36.08%",
    left: "62.48%",
  },
  rectangleIcon: {
    top: 189,
    left: 27,
  },
  alluArjun: {
    top: 191,
    height: 13,
    lineHeight: 21,
    letterSpacing: -0.3,
    width: 96,
    alignItems: "center",
    display: "flex",
    left: 167,
    color: Color.color1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  movieStarPushpa: {
    top: 208,
    width: 123,
    alignItems: "center",
    left: 167,
    position: "absolute",
  },
  groupIcon: {
    top: "22.41%",
    right: "52.27%",
    bottom: "76.15%",
    left: "44.53%",
    width: "3.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  kGreetings: {
    top: 236,
    left: 183,
  },
  text3: {
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
  },
  price: {
    top: 257,
    justifyContent: "center",
    height: 26,
    alignItems: "center",
  },
  vectorIcon2: {
    height: "0.92%",
    width: "2.89%",
    top: "17.85%",
    right: "6.71%",
    bottom: "81.23%",
    left: "90.4%",
    position: "absolute",
  },
  bookNow: {
    fontSize: FontSize.size_6xs,
    width: 68,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: -0.1,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
  },
  buttonRent: {
    top: 259,
    right: 25,
  },
  groupChild: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 12,
    left: 9,
  },
  ssThaman: {
    width: 117,
    top: 14,
    left: 149,
    height: 13,
    display: "flex",
    lineHeight: 21,
    letterSpacing: -0.3,
    color: Color.color1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
  },
  movieStarPushpa1: {
    top: 31,
    width: 123,
    color: Color.secondary300,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    height: 13,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular12,
  },
  groupInner: {
    height: "13.55%",
    width: "3.54%",
    top: "52.68%",
    right: "52.51%",
    bottom: "33.77%",
    left: "43.95%",
    position: "absolute",
  },
  kGreetings1: {
    top: 59,
    left: 165,
  },
  price1: {
    top: 80,
    justifyContent: "center",
    height: 26,
  },
  vectorIcon3: {
    height: "8.61%",
    top: "9.82%",
    right: "2.11%",
    bottom: "81.57%",
    left: "94.69%",
    position: "absolute",
  },
  buttonRent1: {
    top: 82,
    right: 7,
  },
  rectangleParent: {
    top: 303,
    left: 18,
  },
  rectangleView: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 0,
    top: 0,
  },
  pVSindhu: {
    top: 14,
    left: 149,
    height: 13,
    display: "flex",
    lineHeight: 21,
    letterSpacing: -0.3,
    color: Color.color1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
    width: 96,
  },
  rectangleGroup: {
    top: 429,
    left: 18,
  },
  groupChild3: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    top: 555,
    left: 18,
  },
  groupChild6: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 0,
    top: 0,
  },
  groupView: {
    top: 681,
    left: 18,
  },
  groupChild9: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 0,
    top: 0,
  },
  rectangleParent1: {
    top: 807,
    left: 18,
  },
  groupChild12: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_3xs,
    width: 339,
    backgroundColor: Color.pureWhite,
    left: 0,
    top: 0,
  },
  bramhanandam: {
    top: 14,
    left: 149,
    height: 13,
    display: "flex",
    lineHeight: 21,
    letterSpacing: -0.3,
    color: Color.color1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    textAlign: "left",
    width: 123,
  },
  text9: {
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
  },
  rectangleParent2: {
    top: 933,
    left: 18,
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
  rectangle10: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.color1,
  },
  navigation: {
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: 0,
  },
  groupChild15: {
    width: "5.94%",
    right: "27.53%",
    left: "66.53%",
    height: 23,
  },
  groupChild16: {
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
    fontSize: FontSize.size_4xs,
    bottom: 48,
    letterSpacing: -0.1,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  services: {
    left: 99,
  },
  groupIcon1: {
    width: "6.08%",
    right: "65.27%",
    left: "28.66%",
  },
  share: {
    left: "46.67%",
  },
  groupChild17: {
    width: "4.8%",
    right: "47.6%",
    bottom: 64,
    left: "47.6%",
    height: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon2: {
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
  celebrityPageChild1: {
    height: 95,
    top: 0,
    width: 375,
  },
  actors: {
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
  icon: {
    height: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  vector: {
    left: "5.97%",
    top: "4.88%",
    right: "91.57%",
    bottom: "93.68%",
    width: "2.45%",
  },
  celebrityPage: {
    flex: 1,
    overflow: "hidden",
    height: 1053,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default CelebrityPage1;
