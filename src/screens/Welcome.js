import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { Pressable } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    poppin_thin: require("../../assets/fonts/Poppins-Thin.ttf"),
    poppin_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) return undefined;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/image/welcome.png")}
        style={{ height: height / 2.5, width: width, resizeMode: "cover" }}
      />
      <View
        style={{
          marginHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "poppin_regular",
            marginVertical: 20,
            color: "#E60023",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            color: "#676767",
            fontSize: 19,
            lineHeight: 35,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod impedit
          eius perferendis minus itaque quaerat dolore perspiciatis ea ut
          sapiente.
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={{
          height: 60,
          width: "92%",
          backgroundColor: "#E60023",
          borderRadius: 6,
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <Text style={{ color: "white", fontSize: 23 }}>Login</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Signup")}
        style={{
          height: 60,
          width: "92%",
          borderWidth: 1,
          borderRadius: 6,
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          borderColor: "#E60023",
        }}
      >
        <Text style={{ color: "#E60023", fontSize: 23 }}>Signup</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;
