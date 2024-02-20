import React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, Image, Text } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      {/*Top Large Image */}
      <Image
        source={require("../assets/ftwlogo.png")}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "10%",
        }}
      >
        Proudly developed by Kenny.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CustomSidebarMenu;
