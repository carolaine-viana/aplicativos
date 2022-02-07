import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feed } from "../screens/Feed";
import { FilterClothes } from "../screens/FilterClothes";
import { useWindowDimensions } from "react-native";
import { BuyNow } from "../screens/BuyNow";
import { DetailProduct } from "../screens/DetailProduct";
const { Navigator, Screen } = createDrawerNavigator();

export function MyDrawer() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{
        swipeEnabled: true,
        drawerType: isLargeScreen ? "slide" : "front",
        drawerStyle: isLargeScreen ? null : { width: "30%" },
        overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: "white",
        },
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "red",
        drawerLabelStyle: {
          fontSize: 20,
          color: "black",
        },
      }}
    >
      <Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="FilterClothes"
        component={FilterClothes}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="BuyNow"
        component={BuyNow}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
