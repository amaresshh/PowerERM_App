import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TravelPage from "./TravelPage";
import AddTravelApplication from "./AddTravelApplication";

const Stack = createNativeStackNavigator();

const TravelStack = () => {
  return (
    <Stack.Navigator initialRouteName="TravelPage">
      <Stack.Screen
        name="TravelPage"
        options={{
          headerShown: true,
          title: "Travel Page",
          headerTitleAlign: "center",
        }}
        component={TravelPage}
      />
      <Stack.Screen
        name="AddTravelApplication"
        options={{
          headerShown: true,
          title: "Travel Application",
          headerTitleAlign: "center",
        }}
        component={AddTravelApplication}
      />
    </Stack.Navigator>
  );
};

export default TravelStack;
