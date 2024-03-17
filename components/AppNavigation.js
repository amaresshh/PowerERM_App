import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import SplashScreen from "./SplashScreen";
import MainTabContainer from "./MainTabContainer";
import OnboardingScreen from "./OnboardingScreen";
// import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="MainTabContainer"
          options={{ headerShown: false }}
          component={MainTabContainer}
          // navigation={navigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
