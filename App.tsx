import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "./src/telas/Home";
import Servicos from "./src/telas/Servicos";
import Perfil from "./src/telas/Perfil";

// Mock data
import listaServicos from "./src/mocks/servicos";

import Texto from "./src/componentes/Texto";

// ── Services screen receives mock data as props (same pattern as app25TA) ──
function MenuServicos() {
  return <Servicos {...listaServicos} />;
}

// ── Bottom Tab navigator ──
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Serviços") {
            iconName = focused ? "ice-cream-outline" : "ice-cream-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#E2C7A0",
        tabBarInactiveTintColor: "#1C2826",
        tabBarStyle: {
          backgroundColor: "#d64550",
          borderTopColor: "#E2C7A0",
          borderTopWidth: 1,
          height: 62,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontFamily: "FonteRegular",
          fontSize: 12,
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

// ── Root App component ──
export default function App() {
  // Load Montserrat fonts as per project spec
  const [fonteCarregada] = useFonts({
    FonteRegular: Montserrat_400Regular,
    FonteBold: Montserrat_700Bold,
  });

  // Wait for fonts to load before rendering
  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
