import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Platform, StatusBar, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const handleDone = () => {
    navigation.navigate("Login");
  };

  const Done = ({ ...props }) => (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={{ color: "black", fontWeight: "bold" }}>Done</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        hidden={false}
      />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        bottomBarHeight={100}
        DoneButtonComponent={Done}
        titleStyles={{ color: "black", fontWeight: "bold" }}
        subTitleStyles={{ color: "black" }}
        containerStyles={{ paddingHorizontal: 30 }}
        pages={[
          {
            backgroundColor: "#86B6F6",
            image: (
              <LottieView
                style={styles.image}
                source={require("../assets/Lottie_Icons/HRM2.json")}
                autoPlay
                loop
              />
            ),
            title: "Welcome to PowerERM",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            backgroundColor: "#76ABAE",
            image: (
              <LottieView
                style={styles.image}
                source={require("../assets/Lottie_Icons/HRM1.json")}
                autoPlay
                loop
              />
            ),
            title: "Easy Attendance System",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            backgroundColor: "#D37676",
            image: (
              <LottieView
                style={styles.image}
                source={require("../assets/Lottie_Icons/easy_to_operate_1.json")}
                autoPlay
                loop
              />
            ),
            title: "Easy to use & Multi-Media Support",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
  },
  button: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    marginRight: 15,
    borderRadius: 50,
  },
});
