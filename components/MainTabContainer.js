import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Dashboard from "./Screens/Dashboard";
import Calender from "./Screens/Calender";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MainTabContainer = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Dashboard") {
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Calender") {
            iconName = focused ? "calendar-clear" : "calendar-clear-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              style={{ fontSize: 30 }}
            />
          );
        },
        // headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "white",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#008DDA",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      })}
      // tabBarOp
    >
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: "PowerERM",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "#008DDA",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/powererm-imgs/user_img.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50 / 2,
                  marginRight: 15,
                }}
                onPress={() => navigation.navigate("Profile")}
              />
            </TouchableOpacity>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: "Dashboard Screen",
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          headerTitle: "Calender Screen",
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Your Profile",
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabContainer;

/* const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
}); */
