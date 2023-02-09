import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/home";
import Status from "./src/status";
import { StatusBar, TouchableOpacity, Text } from "react-native";
import ButtonRight from "./src/components/statusBtn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#020659" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Olá, bem-vindo",
            headerStyle: {
              backgroundColor: "#1F248C",
            },
            headerRight: () => <ButtonRight />,
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{
            title: "Status",
            headerStyle: {
              backgroundColor: "#1F248C",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
