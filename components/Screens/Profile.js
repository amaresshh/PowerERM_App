import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Profile = () => {
  const Person = {
    name: "Sydney Johnsan",
    designation: "Software Developer",
    email: "sydney.johnsan@octaware.com",
    code: 10302,
    profile_details: {
      age: 25,
      dob: "25/12/1996",
      bloog_group: "A+",
      marital_status: "single",
    },
    contact_details: {
      mobile: "+91-9984737328",
      official_email: "sydneyj212@gmail.com",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    professional_details: {
      department: "Software Development",
      designation: "Software Developer",
      joining_date: "25/12/2019",
      current_location: "SEEPZ-MUM",
      branch: "SEEPZ-MUM",
      supervisor_level_1: "Mr. Aslam Khan",
      supervisor_level_2: "Mr. Shahnawaz Khan",
      supervisor: "Mr. Sakib Shaikh",
      project: "PowerERM",
      status: "Active",
      access_role: "Employee",
    },
    financial_details: {
      bank_name: "HDFC",
      mode_of_payment: "Direct Deposit - UBI",
      salary_account_number: "1234567890",
      pan_number: "ABCD1234E",
      pf_number: "1234567890",
      bank_address: "SEEPZ-MUMBAI-400096",
    },
  };

  return (
    <LinearGradient
      // colors={["purple", "white"]}
      colors={["#8EB6F9", "white"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Profile Header */}
          <View style={styles.profile_header}>
            <View style={styles.border}>
              <Image
                style={styles.img}
                source={require("../../assets/powererm-imgs/user_img.png")}
              />
            </View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {Person.name}
            </Text>
            <Text style={styles.text}>{Person.designation}</Text>
            <Text style={styles.text}>{Person.email}</Text>
            <Text style={styles.text}>Code: {Person.code}</Text>
          </View>

          {/* Profile Details */}
          <View style={styles.details}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Profile Details
            </Text>

            {Object.keys(Person.profile_details).map((key, index) => {
              return (
                <View key={index} style={{ flexDirection: "row", margin: 5 }}>
                  <Text
                    style={{
                      width: "50%",
                      textTransform: "capitalize",
                    }}
                  >
                    {key.replaceAll("_", " ")}:
                  </Text>
                  <Text style={{ width: "50%", textTransform: "capitalize" }}>
                    {Person.profile_details[key]}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* Contact Details */}
          <View style={styles.details}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Contact Details
            </Text>

            {Object.keys(Person.contact_details).map((key, index) => {
              return (
                <View key={index} style={{ flexDirection: "row", margin: 5 }}>
                  <Text
                    style={{
                      width: "50%",
                      textTransform: "capitalize",
                    }}
                  >
                    {key.replaceAll("_", " ")}:
                  </Text>
                  <Text style={{ width: "50%", textTransform: "capitalize" }}>
                    {Person.contact_details[key]}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* Professional Details */}
          <View style={styles.details}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Professional Details
            </Text>

            {Object.keys(Person.professional_details).map((key, index) => {
              return (
                <View key={index} style={{ flexDirection: "row", margin: 5 }}>
                  <Text
                    style={{
                      width: "50%",
                      textTransform: "capitalize",
                    }}
                  >
                    {key.replaceAll("_", " ")}:
                  </Text>
                  <Text style={{ width: "50%", textTransform: "capitalize" }}>
                    {Person.professional_details[key]}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* Financial Details */}
          <View style={[styles.details, { marginBottom: 20 }]}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Financial Details
            </Text>

            {Object.keys(Person.financial_details).map((key, index) => {
              return (
                <View key={index} style={{ flexDirection: "row", margin: 5 }}>
                  <Text
                    style={{
                      width: "50%",
                      textTransform: "capitalize",
                    }}
                  >
                    {key.replaceAll("_", " ")}:
                  </Text>
                  <Text style={{ width: "50%", textTransform: "capitalize" }}>
                    {Person.financial_details[key]}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  img: {
    height: width * 0.4,
    width: width * 0.4,
    borderRadius: width * 0.4,
  },
  border: {
    borderWidth: 2,
    borderColor: "#008DDA",
    borderRadius: width * 0.4,
    margin: 10,
    marginBottom: 15,
  },
  profile_header: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: "black",
  },
  details: {
    marginTop: 20,
    // marginBottom: 20,
  },
});
