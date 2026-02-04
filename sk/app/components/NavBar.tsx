import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openSettings, setOpenSettings] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <View style={styles.container}>
        {/* Home */}
        <TouchableOpacity onPress={() => router.push("/Routes/Homepage")}>
          <Ionicons
            name={isActive("/Routes/Homepage") ? "home" : "home-outline"}
            size={24}
            color={isActive("/Routes/Homepage") ? "#fff" : "#aaa"}
          />
        </TouchableOpacity>

        {/* Surveillance */}
        <TouchableOpacity
          onPress={() => router.push("/Routes/Surveillancepage")}
        >
          <Ionicons
            name={
              isActive("/Routes/Surveillancepage")
                ? "videocam"
                : "videocam-outline"
            }
            size={24}
            color={isActive("/Routes/Surveillancepage") ? "#fff" : "#aaa"}
          />
        </TouchableOpacity>

        {/* Settings (SIDEBAR, NOT ROUTE) */}
        <TouchableOpacity onPress={() => setOpenSettings(true)}>
          <Ionicons
            name="settings-outline"
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* Settings Sidebar */}
      <SettingsSidebar
        visible={openSettings}
        onClose={() => setOpenSettings(false)}
      />
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
    backgroundColor: "#111",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
});
