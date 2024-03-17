import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
// import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding");
      console.log("SplashScreen Navigated to Onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="zoomIn"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ width: width * 0.4, height: width * 0.4 }}
          source={require("../assets/powererm-imgs/octaware_logo_design.png")}
        />
        <Image
          style={{ marginTop: 20, height: 75, width: 240 }}
          source={require("../assets/powererm-imgs/octaware_logo_text.png")}
        />
        {/* <Button
          title="Get Started"
          onPress={() => navigation.navigate("Onboarding")}
        /> */}
        <LottieView
          style={styles.image}
          source={require("../assets/Lottie_Icons/loader.json")}
          autoPlay
          loop
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    // backgroundColor: "gray",
    marginTop: -50,
    zIndex: -1,
  },
});
