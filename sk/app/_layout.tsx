import { Stack, usePathname } from "expo-router";
import "../global.css";
import { View } from "react-native";
import NavBar from "./components/NavBar";

export default function RootLayout() {
  const pathname = usePathname();

  // Pages where NavBar SHOULD be visible
  const showNavBarRoutes = [
    "/Routes/Homepage",
    "/Routes/Surveillance",
    "/Routes/Settings",
  ];

  const showNavBar = showNavBarRoutes.includes(pathname);

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />

      {showNavBar && <NavBar />}
    </View>
  );
}
