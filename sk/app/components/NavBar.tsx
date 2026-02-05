import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openSettings, setOpenSettings] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("/Routes/Homepage")}>
          <Ionicons
            name={isActive("/Routes/Homepage") ? "home" : "home-outline"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Routes/Surveillance")}>
          <Ionicons
            name={isActive("/Routes/Surveillance") ? "videocam" : "videocam-outline"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOpenSettings(true)}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <SettingsSidebar visible={openSettings} onClose={() => setOpenSettings(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0f3424",
  },
});
