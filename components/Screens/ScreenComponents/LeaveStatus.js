import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import Calender from "./Calender";
import React from "react";
import { Image } from "react-native";

const { width } = Dimensions.get("window");

const LeaveStatus = ({ leaveStatus, styleProp }) => {
  return (
    <View>
      <View style={styles.container}>
        <Calender month={leaveStatus.month} day={leaveStatus.day} />
        <View style={{ width: "58%", marginRight: 10 }}>
          <Text numberOfLines={2} style={{ fontWeight: "700", fontSize: 15 }}>
            {leaveStatus.reason}
          </Text>
          <Text>{leaveStatus.type}</Text>
        </View>
        {leaveStatus.status === "approved" ? (
          <Image
            style={styles.icons}
            source={require("../../../assets/powererm-imgs/approved_1.png")}
          />
        ) : leaveStatus.status === "pending" ? (
          <Image
            style={styles.icons}
            source={require("../../../assets/powererm-imgs/pending_1.png")}
          />
        ) : (
          <Image
            style={styles.icons}
            source={require("../../../assets/powererm-imgs/rejected_1.png")}
          />
        )}
      </View>
    </View>
  );
};

export default LeaveStatus;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "skyblue",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4, // for Android
    shadowColor: "black", // for iOS
    marginVertical: 10,
    width: "100%",
  },
  icons: {
    width: width * 0.1,
    height: width * 0.1,
  },
});
