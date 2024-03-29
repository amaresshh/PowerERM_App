import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";

const Calender = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>This is Calender Page</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus
        earum et, esse omnis minima dolorem debitis sequi provident, sit cumque!
        Error omnis dicta a voluptatum placeat nulla commodi accusantium.
      </Text>
    </SafeAreaView>
  );
};

export default Calender;

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
