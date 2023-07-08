import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

import Favorite from "../screens/Favorite";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";

const tabScreens = [
  {
    name: "Home",
    component: Home,
    icon: "home",
    color: "gray",
    focusedColor: "red",
  },
  {
    name: "Favorite",
    component: Favorite,
    icon: "heart",
    color: "gray",
    focusedColor: "red",
  },
  {
    name: "Cart",
    component: Cart,
    icon: "cart",
    color: "gray",
    focusedColor: "red",
  },
  {
    name: "Notification",
    component: Notification,
    icon: "notifications",
    color: "gray",
    focusedColor: "red",
  },
  {
    name: "Profile",
    component: Profile,
    icon: "person",
    color: "gray",
    focusedColor: "red",
  },
];

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      {tabScreens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name={screen.icon}
                  size={24}
                  color={screen.focusedColor}
                />
              ) : (
                <Ionicons name={screen.icon} size={24} color={screen.color} />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
