import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  CheckBox,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Formik } from "formik";
import Checkbox from "expo-checkbox";
import { signupSchema } from "../lib/Validation";
import { auth } from "../../firebaseConfig";

const Signup = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const initialValues = { name: "", email: "", password: "", cPassword: "" };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sign up",
      headerTitleStyle: {
        fontSize: 20,
        color: "black",
      },
      headerTitleAlign: "center",
      headerTintColor: "red",
      headerTransparent: true,
    });
  }, []);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [fontsLoaded] = useFonts({
    poppin_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) return undefined;

  const onSubmit = (values) => {
    if (values.password === values.cPassword) {
      return createUserWithEmailAndPassword(values.email, values.password);
    } else {
      return Alert.alert("Alert Title", "Password doesn't match", [
        { text: "OK" },
      ]);
    }
  };

  if (user) {
    navigation.replace("Home");
  }
  if (error) {
    return Alert.alert("Alert Title", "User alreay exist", [{ text: "OK" }]);
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "poppin_regular",
          color: "#E60023",
        }}
      >
        Register
      </Text>
      <Text
        style={{
          color: "#676767",
          fontSize: 19,
        }}
      >
        Create your new account
      </Text>
      <View style={{ width: "90%", marginHorizontal: 15, marginTop: 50 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                onChangeText={handleChange("name")}
                value={values.name}
                style={styles.inputStyle}
                placeholder="Full name"
              />
              {errors.name && (
                <Text style={{ marginTop: 5, fontSize: 18 }}>
                  {errors.name}
                </Text>
              )}
              <TextInput
                onChangeText={handleChange("email")}
                value={values.email}
                style={styles.inputStyle}
                placeholder="Email"
              />
              {errors.email && (
                <Text style={{ marginTop: 5, fontSize: 18 }}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                onChangeText={handleChange("password")}
                value={values.password}
                style={styles.inputStyle}
                placeholder="Pasword"
                secureTextEntry
              />
              {errors.password && (
                <Text style={{ fontSize: 18, marginTop: 5 }}>
                  {errors.password}
                </Text>
              )}
              <TextInput
                onChangeText={handleChange("cPassword")}
                value={values.cPassword}
                style={styles.inputStyle}
                placeholder="Confirm Pasword"
                secureTextEntry
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 14,
                }}
              >
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#E60023" : undefined}
                />
                <View
                  style={{
                    flexDirection: "row",
                    gap: 7,
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#676767" }}>
                    I agree to your
                  </Text>
                  <Pressable>
                    <Text style={{ fontSize: 18, color: "#E60023" }}>
                      privacy policy
                    </Text>
                  </Pressable>
                  <Text style={{ fontSize: 18, color: "#676767" }}>and</Text>
                  <Pressable>
                    <Text style={{ fontSize: 18, color: "#E60023" }}>
                      terms & condition
                    </Text>
                  </Pressable>
                </View>
              </View>
              <Pressable
                onPress={handleSubmit}
                style={{
                  height: 65,
                  width: "100%",
                  backgroundColor: "#E60023",
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
              >
                <Text style={{ color: "white", fontSize: 23 }}>Signup</Text>
              </Pressable>
            </View>
          )}
        </Formik>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, color: "#676767" }}>
            Already an acoount
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#E60023", fontSize: 18 }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 20,
    width: "100%",
    height: 65,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#E1E1E1",
  },
});
