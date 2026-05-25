import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
// Screens
import Home from "./src/telas/Home";
import Servicos from "./src/telas/Servicos";
import Perfil from "./src/telas/Perfil";
// Mock data
import listaServicos from "./src/mocks/servicos";
import Texto from "./src/componentes/Texto";

function MenuServicos() {
  return <Servicos {...listaServicos} />;
}

const Tab = createBottomTabNavigator();

function Menu() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      id="MainTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Serviços") {
            iconName = focused ? "ice-cream" : "ice-cream-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <View
              style={
                focused
                  ? {
                      backgroundColor: "#B8313A",
                      borderRadius: 14,
                      padding: 6,
                      marginBottom: 2,
                    }
                  : { padding: 6, marginBottom: 2 }
              }
            >
              <Ionicons name={iconName} size={15} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "#E2C7A0",
        tabBarInactiveTintColor: "#9A8878",
        tabBarStyle: {
          backgroundColor: "#1C1A18",
          borderTopColor: "#E2C7A0",
          borderTopWidth: 1,
          height: 62 + insets.bottom,
          paddingBottom: insets.bottom + 6,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontFamily: "inter_400Regular",
          fontSize: 11,
          letterSpacing: 0.5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Início" }}
      />
      <Tab.Screen
        name="Serviços"
        component={MenuServicos}
        options={{ tabBarLabel: "Serviços" }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarLabel: "Meu Perfil" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    FonteRegular: Montserrat_400Regular,
    FonteBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Menu />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
