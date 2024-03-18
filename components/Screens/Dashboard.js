import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import { TouchableOpacity } from "react-native-web";
// import { ScrollView } from "react-native-web";

// const screenWidth = Dimensions.get("window").width;
const { width } = Dimensions.get("window");

const Dashboard = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "Attendance",
      image: require("../../assets/powererm-imgs/attendence_1.png"),
      screen: "AttendancePage",
    },
    {
      id: 2,
      title: "Leave",
      image: require("../../assets/powererm-imgs/leave_1.png"),
      screen: "LeavePage",
    },
    {
      id: 3,
      title: "Timesheet",
      image: require("../../assets/powererm-imgs/timesheet_2.png"),
      screen: "TimesheetPage",
    },
    {
      id: 4,
      title: "Travel",
      image: require("../../assets/powererm-imgs/travel_2.png"),
      screen: "TravelPage",
    },
    {
      id: 5,
      title: "Project Task",
      image: require("../../assets/powererm-imgs/project_task_2.png"),
      screen: "ProjectTaskPage",
    },
    {
      id: 6,
      title: "Employees",
      image: require("../../assets/powererm-imgs/employees_1.png"),
      screen: "EmployeesPage",
    },
  ];

  const handleCardPress = (screen) => {
    console.log("Opening: " + screen);
    navigation.navigate(screen);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCardPress(item.screen)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
    </TouchableOpacity>
  );

  const numColumns = width < 600 ? 2 : 3;
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 25,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // for Android
    shadowColor: "#000", // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    marginBottom: 10,
    resizeMode: "cover",
  },
});
