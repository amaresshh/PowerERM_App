import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const AttendancePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>This is Attendance Page</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus
        earum et, esse omnis minima dolorem debitis sequi provident, sit cumque!
        Error omnis dicta a voluptatum placeat nulla commodi accusantium.
      </Text>
    </SafeAreaView>
  );
};

export default AttendancePage;

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
