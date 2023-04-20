import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CelebrityPage2 = () => {
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
        source={require("../assets/rectangle-7646.png")}
      />
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom, styles.textPosition]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg1, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom1, styles.textPosition]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg2, styles.bgPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo1]}>········</Text>
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
      <Text style={[styles.text1, styles.textTypo1]}>········</Text>
      <Image
        style={[styles.iconChevronDown, styles.iconsbasichideLayout]}
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
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom2, styles.textPosition]}>
        johndoe@example.com
      </Text>
      <View style={[styles.bg5, styles.bg3Position]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
      </View>
      <Text style={[styles.cooperexamplecom3, styles.textPosition]}>
        johndoe@example.com
      </Text>
      <View style={styles.product}>
        <Image
          style={styles.productImageIcon}
          resizeMode="cover"
          source={require("../assets/product-image.png")}
        />
        <Image
          style={styles.slideShowImage}
          resizeMode="cover"
          source={require("../assets/slide-show-image.png")}
        />
        <Text style={[styles.title, styles.titleTypo]}>Allu Arjun</Text>
        <Text style={[styles.movieStarPushpa, styles.startsFromLayout]}>
          #Movie Star, #Pushpa
        </Text>
        <Text style={[styles.startsFrom, styles.pricePosition]}>
          Starts from
        </Text>
        <Text style={[styles.price, styles.pricePosition]}>₹24000</Text>
      </View>
      <Image
        style={[styles.celebrityPageInner, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-34422.png")}
      />
      <Text style={styles.description}>Description</Text>
      <Text style={[styles.selectAFeature, styles.thisMessageIsTypo]}>
        Select a Feature
      </Text>
      <Text
        style={[styles.thisMessageIs, styles.thisMessageIsTypo]}
      >{`This message is for `}</Text>
      <Text style={[styles.contactInformation, styles.thisMessageIsTypo]}>
        Contact Information
      </Text>
      <Text style={styles.alluArjunIsContainer}>
        <Text
          style={styles.alluArjunIs}
        >{`Allu Arjun is an Indian actor who works in Telugu films. One of the highest paid actors in India, Arjun is also known for his extraordinary dancing skills. He is a recipient of several awards including six Filmfare Awards and three Nandi Awards. `}</Text>
        <Text style={styles.moreDetails}>More Details</Text>
      </Text>
      <View style={[styles.lineView, styles.celebrityChildLayout4]} />
      <View
        style={[styles.celebrityPageChild1, styles.celebrityChildLayout4]}
      />
      <View
        style={[styles.celebrityPageChild2, styles.celebrityChildLayout4]}
      />
      <View
        style={[styles.celebrityPageChild3, styles.celebrityChildLayout4]}
      />
      <Image
        style={[styles.rectangleIcon, styles.celebrityChildLayout3]}
        resizeMode="cover"
        source={require("../assets/rectangle-86.png")}
      />
      <Image
        style={[styles.celebrityPageChild4, styles.celebrityChildLayout3]}
        resizeMode="cover"
        source={require("../assets/rectangle-86.png")}
      />
      <Image
        style={[styles.celebrityPageChild5, styles.celebrityChildLayout3]}
        resizeMode="cover"
        source={require("../assets/rectangle-86.png")}
      />
      <Image
        style={[styles.celebrityPageChild6, styles.celebrityChildLayout3]}
        resizeMode="cover"
        source={require("../assets/rectangle-86.png")}
      />
      <Text style={[styles.videoWishes, styles.singASongTypo]}>
        Video Wishes
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-34425.png")}
      />
      <Text style={[styles.singASong, styles.singASongTypo]}>Sing a song</Text>
      <Text style={[styles.corporate, styles.singASongTypo]}>Corporate</Text>
      <Text style={[styles.voiceRecordings, styles.singASongTypo]}>
        Voice Recordings
      </Text>
      <Text style={[styles.myself, styles.myselfTypo]}>Myself</Text>
      <Text style={[styles.someoneElse, styles.myselfTypo]}>Someone else</Text>
      <Text style={[styles.text2, styles.textTypo]}>₹32000</Text>
      <Text style={[styles.text3, styles.textTypo]}>₹45000</Text>
      <Text style={[styles.text4, styles.textTypo]}>₹36000</Text>
      <Text style={[styles.text5, styles.textTypo]}>₹22000</Text>
      <Image
        style={[styles.g1773Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/g1773.png")}
      />
      <Text style={[styles.price1, styles.priceTypo]}>₹24000</Text>
      <Text style={[styles.price2, styles.priceTypo]}>₹32000</Text>
      <Text style={[styles.price3, styles.priceTypo]}>₹28000</Text>
      <Text style={[styles.price4, styles.priceTypo]}>₹16000</Text>
      <Image
        style={[styles.celebrityPageChild7, styles.celebrityChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.celebrityPageChild8, styles.layer2IconPosition]}
        resizeMode="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.celebrityPageChild9, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.celebrityPageChild10, styles.celebrityChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.celebrityPageChild11, styles.celebrityChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <Image
        style={[styles.celebrityPageChild12, styles.celebrityChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <Image
        style={[styles.g585Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/g585.png")}
      />
      <Image
        style={[styles.layer2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/layer-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <View
        style={[styles.formsinputsbasicParent, styles.formsinputsbasicPosition]}
      >
        <View style={styles.formsinputsbasicLayout}>
          <View style={[styles.bg6, styles.rectanglePosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={styles.rectanglePosition}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle7, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.cooperexamplecom4, styles.text6Position]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.enterFullName, styles.enterTypo]}>
            Enter Full Name
          </Text>
        </View>
        <View style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}>
          <View style={[styles.bg6, styles.rectanglePosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={styles.rectanglePosition}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle7, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.cooperexamplecom4, styles.text6Position]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.enterFullName, styles.enterTypo]}>
            Select an Occation
          </Text>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Pressable
          style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}
          onPress={() => navigation.navigate("Register")}
        >
          <View style={[styles.bg6, styles.rectanglePosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={styles.rectanglePosition}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle7, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.text6, styles.text6Position]}>········</Text>
          <Image
            style={[styles.iconsbasichide1, styles.iconsbasichideLayout]}
            resizeMode="cover"
            source={require("../assets/iconsbasichide.png")}
          />
          <Text style={[styles.enterDate, styles.enterTypo]}>Enter Date</Text>
          <Image
            style={[styles.formsinputsbasicIconRChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/group-344143.png")}
          />
        </Pressable>
      </View>
      <View
        style={[styles.formsinputsbasicGroup, styles.formsinputsbasicPosition]}
      >
        <View style={styles.formsinputsbasicLayout}>
          <View style={[styles.bg6, styles.rectanglePosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={styles.rectanglePosition}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle7, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.cooperexamplecom4, styles.text6Position]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.enterFullName, styles.enterTypo]}>
            your email Id
          </Text>
        </View>
        <View style={[styles.formsinputsbasic1, styles.formsinputsbasicLayout]}>
          <View style={[styles.bg6, styles.rectanglePosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={styles.rectanglePosition}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangle7, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.cooperexamplecom4, styles.text6Position]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.enterFullName, styles.enterTypo]}>
            Contact Number
          </Text>
        </View>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonChildBg]} />
        <Text style={[styles.bookNow, styles.faqLayout]}>Book Now</Text>
      </View>
      <View style={[styles.rectangleView, styles.buttonChildBg]} />
      <Text style={[styles.faq, styles.faqLayout]}>FAQ</Text>
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
          <View style={[styles.rectangle16, styles.navigationPosition]} />
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
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("LandingPage")}
        >
          <Text style={styles.home1}>Home</Text>
        </Pressable>
        <Text style={[styles.services, styles.referTypo]}>Services</Text>
        <Image
          style={[styles.groupIcon1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
        <Text style={[styles.share, styles.referTypo]}>Share</Text>
        <Image
          style={styles.groupInner}
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
        style={[styles.celebrityPageChild13, styles.celebrityPosition]}
        resizeMode="cover"
        source={require("../assets/group-344011.png")}
      />
      <Text style={[styles.alluArjun, styles.signUpOrPosition]}>
        Allu Arjun
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CelebrityPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
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
  textPosition: {
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    letterSpacing: 1.2,
    fontSize: FontSize.size_21xl,
  },
  iconsbasichideLayout: {
    height: 20,
    width: 20,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  bg3Position: {
    height: "3.1%",
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
    color: Color.pureWhite,
    left: "50%",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
  },
  startsFromLayout: {
    height: 13,
    width: 123,
    alignItems: "center",
    display: "flex",
    color: Color.secondary300,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.regular12,
  },
  pricePosition: {
    left: 260,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  thisMessageIsTypo: {
    width: 120,
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    color: Color.color1,
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  celebrityChildLayout4: {
    height: 1,
    width: 340,
    borderTopWidth: 1,
    borderColor: "#c9c9c9",
    borderStyle: "solid",
    left: 18,
    position: "absolute",
  },
  celebrityChildLayout3: {
    borderRadius: Border.br_3xs,
    left: "10.13%",
    width: "89.87%",
    height: "6.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  singASongTypo: {
    color: Color.grey,
    left: "29.07%",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  myselfTypo: {
    top: "63.93%",
    color: Color.grey,
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 14,
    textDecoration: "line-through",
    fontSize: FontSize.size_4xs,
    left: "76.53%",
    width: "9.33%",
    color: Color.grey,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  iconPosition: {
    right: "74.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  priceTypo: {
    lineHeight: 24,
    left: 287,
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  celebrityChildPosition: {
    left: "6.4%",
    right: "88.27%",
  },
  layer2IconPosition: {
    bottom: "46.05%",
    top: "52.4%",
  },
  vectorIconPosition: {
    bottom: "41.95%",
    top: "56.5%",
  },
  celebrityChildLayout: {
    bottom: "34.91%",
    top: "63.54%",
    width: "5.33%",
    height: "1.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    left: "19.47%",
    right: "75.2%",
    width: "5.33%",
    height: "1.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formsinputsbasicPosition: {
    left: 45,
    position: "absolute",
  },
  text6Position: {
    left: 16,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  enterTypo: {
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
  buttonLayout: {
    height: 44,
    width: 270,
  },
  buttonChildBg: {
    backgroundColor: Color.color2,
    position: "absolute",
  },
  faqLayout: {
    height: 22,
    color: Color.pureWhite,
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
    bottom: 48,
    fontSize: FontSize.size_4xs,
    letterSpacing: -0.1,
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
    height: 1453,
    top: 0,
  },
  rectangle: {
    backgroundColor: Color.pureWhite,
  },
  bg: {
    top: "12.54%",
    bottom: "84.29%",
    display: "none",
    height: "3.17%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -475,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  bg1: {
    top: "16.95%",
    bottom: "79.88%",
    display: "none",
    height: "3.17%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -418,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  bg2: {
    height: "3.25%",
    top: "21.36%",
    bottom: "75.39%",
    display: "none",
  },
  text: {
    marginTop: -379,
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  iconsbasichide: {
    marginTop: -359,
    right: 57,
    height: 20,
    width: 20,
  },
  bg3: {
    top: "26.39%",
    bottom: "70.51%",
  },
  text1: {
    marginTop: -315,
    textAlign: "left",
    color: Color.primaryColor,
    left: 62,
    top: "50%",
    display: "none",
    position: "absolute",
  },
  iconChevronDown: {
    marginTop: -295,
    right: 57,
    height: 20,
    width: 20,
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
  },
  signUpOr: {
    marginLeft: -579.5,
    top: 55,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.semibold20,
    width: 231,
    height: 31,
    textAlign: "center",
  },
  bg4: {
    top: "16.8%",
    bottom: "80.11%",
  },
  cooperexamplecom2: {
    marginTop: -421,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  bg5: {
    top: "21.44%",
    bottom: "75.46%",
  },
  cooperexamplecom3: {
    marginTop: -361,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  productImageIcon: {
    borderRadius: Border.br_base,
    height: 224,
    width: 339,
    left: 0,
    top: 0,
    position: "absolute",
  },
  slideShowImage: {
    top: 205,
    left: 133,
    height: 8,
    width: 72,
    position: "absolute",
  },
  title: {
    top: 234,
    color: Color.neutralDark,
    width: 108,
    lineHeight: 30,
    letterSpacing: 1,
    fontSize: FontSize.semibold20_size,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  movieStarPushpa: {
    top: 261,
    left: 1,
    textAlign: "left",
    position: "absolute",
  },
  startsFrom: {
    top: 239,
    height: 13,
    width: 123,
    alignItems: "center",
    display: "flex",
    color: Color.secondary300,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.regular12,
  },
  price: {
    top: 249,
    color: Color.color1,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 1,
    fontSize: FontSize.semibold20_size,
  },
  product: {
    top: 109,
    width: 383,
    height: 279,
    left: 18,
    position: "absolute",
  },
  celebrityPageInner: {
    height: "1.09%",
    width: "36.89%",
    top: "30.53%",
    right: "58.04%",
    bottom: "68.38%",
    left: "5.07%",
    position: "absolute",
  },
  description: {
    top: 429,
    lineHeight: 12,
    fontSize: FontSize.regular12_size,
    letterSpacing: -0.1,
    color: Color.color1,
    width: 72,
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  selectAFeature: {
    top: 534,
  },
  thisMessageIs: {
    top: 794,
  },
  contactInformation: {
    top: 1015,
  },
  alluArjunIs: {
    color: Color.darkslategray_100,
  },
  moreDetails: {
    textDecoration: "underline",
    color: Color.color1,
  },
  alluArjunIsContainer: {
    top: 449,
    lineHeight: 15,
    height: 70,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    width: 339,
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  lineView: {
    top: 420,
  },
  celebrityPageChild1: {
    top: 779,
  },
  celebrityPageChild2: {
    top: 1149,
  },
  celebrityPageChild3: {
    top: 519,
  },
  rectangleIcon: {
    top: "41.95%",
    bottom: "51.39%",
  },
  celebrityPageChild4: {
    top: "46.05%",
    bottom: "47.29%",
  },
  celebrityPageChild5: {
    top: "50.15%",
    bottom: "43.19%",
  },
  celebrityPageChild6: {
    top: "54.26%",
    bottom: "39.09%",
  },
  videoWishes: {
    top: "44.66%",
    width: "25.6%",
    left: "29.07%",
  },
  groupIcon: {
    height: "0.85%",
    width: "2.93%",
    top: "41.37%",
    right: "66.53%",
    bottom: "57.78%",
    left: "30.53%",
    position: "absolute",
  },
  singASong: {
    top: "48.76%",
    width: "25.6%",
    left: "29.07%",
  },
  corporate: {
    top: "52.86%",
    width: "25.6%",
    left: "29.07%",
  },
  voiceRecordings: {
    width: "28.27%",
    top: "56.97%",
  },
  myself: {
    width: "13.87%",
    left: "14.67%",
  },
  someoneElse: {
    width: "22.67%",
    left: "43.47%",
  },
  text2: {
    top: "43.81%",
  },
  text3: {
    top: "47.91%",
  },
  text4: {
    top: "52.01%",
  },
  text5: {
    top: "56.11%",
  },
  g1773Icon: {
    height: "1.78%",
    width: "6.13%",
    top: "44.2%",
    bottom: "54.02%",
    left: "19.2%",
  },
  price1: {
    top: 573,
  },
  price2: {
    top: 626,
  },
  price3: {
    top: 679,
  },
  price4: {
    top: 732,
  },
  celebrityPageChild7: {
    top: "48.3%",
    bottom: "50.15%",
    width: "5.33%",
    height: "1.55%",
    left: "6.4%",
    right: "88.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  celebrityPageChild8: {
    left: "6.4%",
    right: "88.27%",
    width: "5.33%",
    height: "1.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  celebrityPageChild9: {
    left: "6.4%",
    right: "88.27%",
    width: "5.33%",
    height: "1.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  celebrityPageChild10: {
    right: "58.13%",
    left: "36.53%",
  },
  celebrityPageChild11: {
    top: "44.12%",
    bottom: "54.33%",
    width: "5.33%",
    height: "1.55%",
    left: "6.4%",
    right: "88.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  celebrityPageChild12: {
    left: "6.4%",
    right: "88.27%",
  },
  g585Icon: {
    height: "1.65%",
    width: "5.69%",
    top: "48.27%",
    bottom: "50.08%",
    left: "19.64%",
  },
  layer2Icon: {
    bottom: "46.05%",
    top: "52.4%",
  },
  vectorIcon: {
    bottom: "41.95%",
    top: "56.5%",
  },
  bg6: {
    display: "none",
  },
  rectangle7: {
    backgroundColor: Color.slategray_100,
  },
  cooperexamplecom4: {
    marginTop: -12,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  enterFullName: {
    left: 12,
  },
  vectorIcon1: {
    height: "12.5%",
    width: "3.15%",
    top: "46.25%",
    right: "4.02%",
    bottom: "41.25%",
    left: "92.83%",
    position: "absolute",
  },
  formsinputsbasic1: {
    marginTop: 10,
  },
  text6: {
    marginTop: -30,
    fontFamily: FontFamily.medium12,
    fontWeight: "500",
    letterSpacing: 1.2,
    fontSize: FontSize.size_21xl,
  },
  iconsbasichide1: {
    marginTop: -10,
    right: 14,
  },
  enterDate: {
    left: 13,
  },
  formsinputsbasicIconRChild: {
    height: "32.5%",
    width: "4.13%",
    top: "33.75%",
    right: "3.46%",
    bottom: "33.75%",
    left: "92.41%",
    position: "absolute",
  },
  formsinputsbasicParent: {
    top: 855,
  },
  formsinputsbasicGroup: {
    top: 1041,
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    height: 44,
    width: 270,
    left: 0,
    top: 0,
  },
  bookNow: {
    top: 9,
    left: 84,
    width: 101,
    fontFamily: FontFamily.headingH3,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 1169,
    left: 53,
    position: "absolute",
  },
  rectangleView: {
    top: 129,
    left: 348,
    borderRadius: 14,
    width: 42,
    height: 56,
  },
  faq: {
    top: 172,
    left: 350,
    fontSize: 15,
    width: 30,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    textAlign: "left",
    fontFamily: FontFamily.regular12,
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
  rectangle16: {
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
  home1: {
    lineHeight: 11,
    fontSize: FontSize.size_4xs,
    letterSpacing: -0.1,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.regular12,
  },
  home: {
    left: 35,
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
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon2: {
    width: "5.61%",
    right: "8.79%",
    left: "85.6%",
    height: 21,
  },
  homeIndicatorParent: {
    bottom: -31,
    height: 96,
    width: 375,
    left: 0,
    position: "absolute",
  },
  celebrityPageChild13: {
    height: 95,
    top: 0,
  },
  alluArjun: {
    marginLeft: -139.5,
    top: 45,
    width: 116,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  vector: {
    left: "5.44%",
    top: "3.82%",
    right: "92.11%",
    bottom: "95%",
    width: "2.45%",
    height: "1.18%",
    position: "absolute",
  },
  celebrityPage: {
    flex: 1,
    height: 1292,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default CelebrityPage2;
