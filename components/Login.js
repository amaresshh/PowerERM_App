import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  // const navigation = useNavigation();
  const handleLogin = () => {
    console.log("Login Pressed");
    navigation.navigate("MainTabContainer");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{
            width: width * 0.2,
            height: width * 0.2,
            marginBottom: 20,
            borderRadius: 10,
          }}
          source={require("../assets/powererm-imgs/octaware_logo_design.png")}
        />
        <Text style={styles.title}>Welcome Back to PowerERM</Text>
        <Text style={styles.subtitle}>Please Login to Continue</Text>
      </View>

      <View style={{ alignSelf: "stretch" }}>
        <View style={[styles.inputContainer, styles.shadowProp]}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Tenant ID"
            // placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //    onChangeText = {this.handleEmail}
          />
        </View>
        <View style={[styles.inputContainer, styles.shadowProp]}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Employee ID"
            // placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            //    onChangeText = {this.handleEmail}
          />
        </View>
        <View style={[styles.inputContainer, styles.shadowProp]}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <Text
          style={{
            color: "red",
            marginTop: 10,
            textAlign: "right",
            marginRight: 40,
          }}
        >
          Forgot Password?
        </Text>
        <Button
          mode="contained"
          onPress={handleLogin}
          style={{
            marginHorizontal: 40,
            marginTop: 20,
            backgroundColor: "#3887BE",
            padding: 5,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Log In
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    // backgroundColor: "red",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "#595E6B",
  },
  inputContainer: {
    backgroundColor: "#f9f9f9",
    marginHorizontal: 40,
    alignSelf: "stretch",
    marginTop: 20,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    margin: 10,
    height: 40,
  },
});
