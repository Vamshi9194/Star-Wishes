import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const AnniversaryForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.anniversaryForm}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.anniversaryFormChild, styles.anniversaryPosition]}
        resizeMode="cover"
        source={require("../assets/group-1717.png")}
      />
      <Image
        style={[styles.anniversaryFormItem, styles.anniversaryPosition]}
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
        style={[styles.anniversaryFormInner, styles.anniversaryPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.anniversaryDate, styles.signUpOrTypo]}>
        Anniversary Date?
      </Text>
      <View style={styles.homeIndicator}>
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
        style={[styles.groupIcon, styles.anniversaryPosition]}
        resizeMode="cover"
        source={require("../assets/group-34393.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={styles.buttonRent}
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
        style={styles.buttonRent1}
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
      <View style={styles.lineView} />
      <Text style={[styles.anniversaryDate1, styles.howDoYouTypo]}>
        Anniversary Date
      </Text>
      <Image
        style={[styles.anniversaryFormChild1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-34414.png")}
      />
      <View style={[styles.formsinputsbasic, styles.formsinputsbasicLayout]}>
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
        <Text style={[styles.cooperexamplecom4, styles.cooperexamplecomTypo]}>
          johndoe@example.com
        </Text>
        <Text style={[styles.firstName, styles.othersPosition]}>
          {" "}
          First Name
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
        <Text style={[styles.cooperexamplecom4, styles.cooperexamplecomTypo]}>
          johndoe@example.com
        </Text>
        <Text style={[styles.firstName, styles.othersPosition]}>
          Last Name (Optional)
        </Text>
      </View>
      <Text style={[styles.howDoYou, styles.genderClr]}>
        How do you Know them ?
      </Text>
      <Pressable
        style={[styles.buttonRent2, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <View style={styles.buttonRentInner}>
          <View style={styles.buttonRentInner}>
            <View style={styles.buttonRentInner}>
              <View style={styles.buttonRentInner}>
                <Text style={[styles.back, styles.nextTypo]}>Male</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonRent3, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("CelebrityPage2")}
      >
        <View style={styles.buttonRentInner}>
          <View style={styles.buttonRentInner}>
            <View style={styles.buttonRentInner}>
              <View style={styles.buttonRentInner}>
                <Text style={[styles.back, styles.nextTypo]}>Female</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Text style={[styles.gender, styles.genderClr]}>Gender</Text>
      <View style={styles.forms}>
        <View
          style={[
            styles.property1inputsProperty2,
            styles.property1inputsPosition,
          ]}
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
          <Text style={[styles.cooperexamplecom4, styles.cooperexamplecomTypo]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.others, styles.othersPosition]}> Others</Text>
        </View>
        <View
          style={[
            styles.property1inputsProperty21,
            styles.property1inputsPosition,
          ]}
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
          <Text style={[styles.cooperexamplecom4, styles.cooperexamplecomTypo]}>
            johndoe@example.com
          </Text>
          <Text style={[styles.others, styles.othersPosition]}> Others</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  anniversaryPosition: {
    top: 0,
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
  cooperexamplecomTypo: {
    textAlign: "left",
    color: Color.primaryColor,
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
    fontFamily: FontFamily.semibold20,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    top: 55,
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
  nextTypo: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.regular12,
  },
  april1985Position: {
    left: 12,
    textAlign: "left",
    position: "absolute",
  },
  howDoYouTypo: {
    letterSpacing: -0.1,
    fontFamily: FontFamily.regular12,
  },
  formsinputsbasicLayout: {
    height: 40,
    width: 286,
    left: 54,
    position: "absolute",
  },
  othersPosition: {
    top: 12,
    fontSize: FontSize.regular12_size,
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    position: "absolute",
  },
  genderClr: {
    color: Color.color1,
    textAlign: "left",
    position: "absolute",
  },
  buttonShadowBox: {
    top: 440,
    width: 117,
    borderWidth: 1,
    borderColor: "#aca9a9",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.snow,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_15xl,
    height: 34,
    position: "absolute",
  },
  property1inputsPosition: {
    left: 20,
    height: 40,
    width: 286,
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
    width: 375,
    left: 0,
  },
  anniversaryFormChild: {
    width: 584,
    height: 971,
    left: 0,
    top: 0,
  },
  anniversaryFormItem: {
    width: 375,
    top: 0,
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
    display: "none",
    height: "5.05%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom: {
    marginTop: -235,
    left: 62,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
  },
  bg1: {
    top: "26.97%",
    bottom: "67.98%",
    display: "none",
    height: "5.05%",
    left: "12.27%",
    right: "11.47%",
    width: "76.27%",
  },
  cooperexamplecom1: {
    marginTop: -178,
    left: 62,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
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
  anniversaryFormInner: {
    width: 623,
    height: 339,
    left: 0,
    top: 0,
  },
  anniversaryDate: {
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
    left: 62,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
  },
  bg5: {
    top: "34.11%",
    bottom: "60.96%",
  },
  cooperexamplecom3: {
    marginTop: -121,
    left: 62,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
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
    color: Color.pureWhite,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_15xl,
    flexDirection: "row",
    position: "absolute",
  },
  back: {
    color: Color.gray_100,
  },
  buttonRent1: {
    top: 755,
    right: 233,
    width: 117,
    borderColor: "#aca9a9",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.snow,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_15xl,
    height: 34,
    position: "absolute",
  },
  april1985: {
    top: 183,
    color: Color.purple,
    width: 75,
    height: 19,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.regular12,
  },
  lineView: {
    top: 205,
    left: 11,
    borderColor: "#aba9b5",
    borderTopWidth: 1,
    width: 341,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  anniversaryDate1: {
    top: 169,
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    color: Color.grey,
    width: 73,
    height: 8,
    left: 12,
    textAlign: "left",
    position: "absolute",
  },
  anniversaryFormChild1: {
    height: "2.21%",
    width: "4.12%",
    top: "22.19%",
    right: "8.03%",
    bottom: "75.6%",
    left: "87.85%",
  },
  bg6: {
    display: "none",
  },
  rectangle7: {
    backgroundColor: Color.slategray_100,
  },
  cooperexamplecom4: {
    marginTop: -12,
    left: 16,
    textAlign: "left",
    color: Color.primaryColor,
    top: "50%",
  },
  firstName: {
    color: Color.bodyLight,
  },
  formsinputsbasic: {
    top: 245,
  },
  formsinputsbasic1: {
    top: 305,
  },
  howDoYou: {
    top: 497,
    left: 56,
    lineHeight: 12,
    width: 168,
    letterSpacing: -0.1,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.regular12_size,
  },
  buttonRent2: {
    right: 204,
  },
  buttonRent3: {
    right: 63,
  },
  gender: {
    top: 400,
    left: 60,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.2,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    width: 181,
    height: 27,
  },
  others: {
    color: Color.black,
  },
  property1inputsProperty2: {
    top: 20,
  },
  property1inputsProperty21: {
    top: 80,
  },
  forms: {
    top: 507,
    left: 30,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    width: 326,
    height: 140,
    borderWidth: 1,
    position: "absolute",
    overflow: "hidden",
  },
  anniversaryForm: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.pureWhite,
  },
});

export default AnniversaryForm;
