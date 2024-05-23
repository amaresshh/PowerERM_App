import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LeaveStatus from "./ScreenComponents/LeaveStatus";

const { width } = Dimensions.get("window");

const Attendance = {
  presentDays: 2,
  absentDays: 3,
  lateDays: 4,
};

const leaveStatus = [
  {
    month: "Jan",
    day: 10,
    reason: "Not Feeling Well Today.",
    type: "Sick Leave",
    status: "pending",
  },
  {
    month: "Feb",
    day: 20,
    reason: "Not Feeling Well Today.",
    type: "Sick Leave",
    status: "approved",
  },
  {
    month: "Mar",
    day: 8,
    reason: "Not Feeling Well Today.",
    type: "Sick Leave",
    status: "pending",
  },
  {
    month: "Jul",
    day: 10,
    reason: "Not Feeling Well Today.",
    type: "Sick Leave",
    status: "approved",
  },
  {
    month: "Jun",
    day: 26,
    reason: "Not Feeling Well Today.",
    type: "Sick Leave",
    status: "rejected",
  },
  {
    month: "Oct",
    day: 15,
    reason: "Not Feeling Well Today.",
    type: "Sick Leave",
    status: "pending",
  },
];

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPM = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  let hours12 = hours % 12;
  hours12 = hours12 ? hours12 : 12; // Handle midnight (0 hours)

  // Add leading zero to minutes if necessary
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours12}:${formattedMinutes} ${amPM}`;
};

const Home = () => {
  const [checkStatus, setCheckStatus] = useState(false);
  const [checkInTime, setCheckInTime] = useState({
    str: "-- : --",
    flag: false,
  });
  const [checkOutTime, setCheckOutTime] = useState({
    str: "-- : --",
    flag: false,
  });

  const handleCheckInCheckOut = () => {
    // setCheckStatus(!checkStatus);
    // if (checkStatus) {
    //   checkOutTime.flag === "-- : --"
    //     ? setCheckOutTime(getCurrentTime())
    //     : null;
    // } else {
    //   checkInTime.flag === "-- : --" ? setCheckInTime(getCurrentTime()) : null;
    // }
    if (checkInTime.flag === false || checkOutTime.flag === false) {
      setCheckStatus(!checkStatus);
      if (checkStatus) {
        setCheckOutTime({ str: getCurrentTime(), flag: true });
      } else {
        setCheckInTime({ str: getCurrentTime(), flag: true });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Attendance Card */}
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
            Attendance
          </Text>
          <View style={styles.card}>
            <View style={styles.leftSide}>
              <View style={styles.checkin_checkout}>
                <View style={{ alignItems: "center" }}>
                  <Text>Check In</Text>
                  <Text style={styles.time}>{checkInTime.str}</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text>Check Out</Text>
                  <Text style={styles.time}>{checkOutTime.str}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="location" size={20} color="#000" />
                <Text style={{ fontSize: 15, marginLeft: 5 }}>In office</Text>
              </View>
            </View>
            {/* Image */}
            <TouchableOpacity
              delayPressIn={150}
              activeOpacity={1}
              onPress={handleCheckInCheckOut}
            >
              {checkStatus ? (
                <View
                  style={[styles.cardImage, { backgroundColor: "#ed3d31" }]}
                >
                  <Image
                    style={{ width: 75, height: 75 }}
                    source={require("../../assets/powererm-imgs/check-out.png")}
                  />
                </View>
              ) : (
                <View
                  style={[styles.cardImage, { backgroundColor: "#44b678" }]}
                >
                  <Image
                    style={{ width: 75, height: 75 }}
                    source={require("../../assets/powererm-imgs/check-in.png")}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Analysis */}
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Attendance Analysis
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={[styles.circleCard, { backgroundColor: "#387ADF" }]}>
                <Text style={styles.circleText}>{Attendance.presentDays}</Text>
              </View>
              <Text style={styles.text}>Present</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={[styles.circleCard, { backgroundColor: "#FF9843" }]}>
                <Text style={styles.circleText}>{Attendance.lateDays}</Text>
              </View>
              <Text style={styles.text}>Late</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={[styles.circleCard, { backgroundColor: "#FF7676" }]}>
                <Text style={styles.circleText}>{Attendance.absentDays}</Text>
              </View>
              <Text style={styles.text}>Absent</Text>
            </View>
          </View>
        </View>

        {/* Leave Status */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>
            Leave Status
          </Text>

          {leaveStatus.map((leave, index) => {
            return (
              <LeaveStatus
                styleProp={{ width: "90%", backgroundColor: "red" }}
                key={index}
                leaveStatus={leave}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    // paddingTop: 20,
  },
  card: {
    backgroundColor: "#BFEA7C",
    flexDirection: "row",
    borderRadius: 10,
    padding: 25,
    marginVertical: 20,
    justifyContent: "space-between",
    elevation: 2, // for Android
    shadowColor: "black", // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBE98",
    elevation: 4, // for Android
    shadowColor: "black", // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
  },
  checkin_checkout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    width: "55%",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 15,
    fontWeight: "bold",
  },
  circleCard: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
    textAlign: "center",
    // fontWeight: "bold",
  },
});
