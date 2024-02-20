import "./polyfills";
import "react-native-gesture-handler";
import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "./components/Drawer";
import Equipas from "./pages/Equipas";
import Noticias from "./pages/Noticias";
import Staff from "./pages/Staff";

const Drawer = createDrawerNavigator(); // Criar o Drawer

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer(); // Ativar ou desativar o Drawer
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image // Icon do drawer
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "black",
            width: 240,
            activeTintColor: "#e91e63",
            itemStyle: { marginVertical: 5 },
          },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen // separador Notícias no Drawer
          name="Notícias"
          options={{
            drawerLabel: "Notícias",
            headerTintColor: "darkred",
            drawerActiveTintColor: "red",
            drawerInactiveTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          component={Noticias}
        />
        <Drawer.Screen // separador Equipas no Drawer
          name="Equipas"
          options={{
            drawerLabel: "Equipas",
            headerTintColor: "darkred",
            drawerActiveTintColor: "red",
            drawerInactiveTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          component={Equipas}
        />
        <Drawer.Screen // separador Staff no Drawer
          name="Staff"
          options={{
            drawerLabel: "Staff",
            headerTintColor: "darkred",
            drawerActiveTintColor: "red",
            drawerInactiveTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          component={Staff}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
