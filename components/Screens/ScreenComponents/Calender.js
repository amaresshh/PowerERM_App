import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const Calender = ({ month, day }) => {
  return (
    <View>
      <View style={styles.calender}>
        <View style={styles.topPart}>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            {month}
          </Text>
        </View>
        <View style={styles.bottomPart}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{day}</Text>
        </View>
      </View>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  calender: {
    // width: Platform.OS === "ios" ? 80 : 90,
    // height: Platform.OS === "ios" ? 80 : 90,
    width: width * 0.2,
    height: width * 0.2,
    marginRight: 10,
  },
  topPart: {
    backgroundColor: "#3e7bdd",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // elevation: 5, // for Android
    shadowColor: "black", // for iOS
  },
  bottomPart: {
    backgroundColor: "white",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // elevation: 5, // for Android
    shadowColor: "black", // for iOS
  },
});
