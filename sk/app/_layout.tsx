// app/_layout.tsx
import { Stack } from "expo-router";
import "../global.css";
import { NavBar } from "./components/NavBar";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />

      {/* Absolute navbar */}
      <NavBar />
    </View>
  );
}
