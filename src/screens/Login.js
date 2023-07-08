import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Formik } from "formik";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { loginSchema } from "../lib/Validation";
import { auth } from "../../firebaseConfig";

const Login = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const initialValues = { email: "", password: "" };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sign in",
      headerTitleStyle: {
        fontSize: 20,
        color: "black",
      },
      headerTitleAlign: "center",
      headerTintColor: "red",
      headerTransparent: true,
    });
  }, []);

  const [fontsLoaded] = useFonts({
    poppin_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) return undefined;
  const onSubmit = (values) => {
    signInWithEmailAndPassword(values.email, values.password);
  };
  if (user) {
    navigation.replace("Home");
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
        Welcome Back
      </Text>
      <Text
        style={{
          color: "#676767",
          fontSize: 19,
        }}
      >
        Login to your account
      </Text>
      <View style={{ width: "90%", marginHorizontal: 15, marginTop: 50 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                onChangeText={handleChange("email")}
                value={values.email}
                style={styles.inputStyle}
                placeholder="Email"
              />
              {errors.email && (
                <Text style={{ marginTop: 5, fontSize: 18, color: "red" }}>
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
                <Text style={{ fontSize: 18, marginTop: 5, color: "red" }}>
                  {errors.password}
                </Text>
              )}
              <Text style={{ marginTop: 5, fontSize: 18, color: "red" }}>
                {error?.message?.slice(22, -2)}
              </Text>
              <Pressable>
                <Text
                  style={{
                    fontSize: 18,
                    color: "red",
                    textAlign: "right",
                    marginTop: 16,
                  }}
                >
                  Forget Password?
                </Text>
              </Pressable>
              <Pressable
                onPress={handleSubmit}
                style={{
                  height: 65,
                  width: "100%",
                  backgroundColor: "#E60023",
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 40,
                }}
              >
                <Text style={{ color: "white", fontSize: 23 }}>Login</Text>
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
            Dont have an account,
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#E60023", fontSize: 18 }}>Signup</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => navigation.replace("Main")}>
          <Text>goto home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
