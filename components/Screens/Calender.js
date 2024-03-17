import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";

const Calender = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>This is Calender Page</Text>
    </SafeAreaView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
