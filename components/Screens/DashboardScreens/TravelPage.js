import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import React from "react";

const TravelPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>This is Travel Page</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus
        earum et, esse omnis minima dolorem debitis sequi provident, sit cumque!
        Error omnis dicta a voluptatum placeat nulla commodi accusantium.
      </Text>
      <FloatingAction
        onPressMain={() => {
          navigation.navigate("Dashboard");
        }}
      />
    </SafeAreaView>
  );
};

export default TravelPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // textAlign: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
