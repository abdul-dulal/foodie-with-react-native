import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import Favorite from "../screens/Favorite";
import Cart from "../screens/Cart";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import CustomDrawer from "./CustomDrawer";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

const drawerScreens = [
  {
    name: "Home",
    component: BottomTabNavigator,
    icon: "home",
    color: "white",
    focusedColor: "#E60023",
  },
  {
    name: "Favorite",
    component: Favorite,
    icon: "heart",
    color: "white",
    focusedColor: "#E60023",
  },
  {
    name: "Cart",
    component: Cart,
    icon: "cart",
    color: "white",
    focusedColor: "#E60023",
  },
  {
    name: "Notification",
    component: Notification,
    icon: "notifications",
    color: "white",
    focusedColor: "#E60023",
  },
  {
    name: "Profile",
    component: Profile,
    icon: "person",
    color: "white",
    focusedColor: "#E60023",
  },
  {
    name: "About",
    component: About,
    icon: "person",
    color: "white",
    focusedColor: "#E60023",
  },
];

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      {drawerScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            drawerActiveBackgroundColor: "white",
            drawerActiveTintColor: "#E60023",
            drawerInactiveTintColor: "white",
            drawerItemStyle: {
              borderRadius: 50,
              paddingLeft: 10,
            },
            drawerLabelStyle: { fontSize: 19 },
            drawerStyle: { width: "70%" },
            drawerIcon: ({ focused }) =>
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
