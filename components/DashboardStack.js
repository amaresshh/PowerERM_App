import React from "react";
import Dashboard from "./Screens/Dashboard";
import Calender from "./Screens/Calender";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeavePage from "./Screens/DashboardScreens/LeavePage";
import AttendancePage from "./Screens/DashboardScreens/AttendancePage";
import TravelPage from "./Screens/DashboardScreens/TravelPage";

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: true,
          title: "Dashboard",
          headerTitleAlign: "center",
        }}
        component={Dashboard}
      />
      <Stack.Screen
        name="LeavePage"
        options={{
          headerShown: true,
          title: "Leave Page",
          headerTitleAlign: "center",
        }}
        component={LeavePage}
      />
      <Stack.Screen
        name="AttendancePage"
        options={{
          headerShown: true,
          title: "Attendance Page",
          headerTitleAlign: "center",
        }}
        component={AttendancePage}
      />
      <Stack.Screen
        name="TravelPage"
        options={{ headerShown: true, title: "Travel Page" }}
        component={TravelPage}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
