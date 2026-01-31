import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={[styles.item, isActive("/") && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/settings")}>
        <Text style={[styles.item, isActive("/settings") && styles.active]}>
          Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Text style={[styles.item, isActive("/profile") && styles.active]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
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
  item: {
    color: "#aaa",
    fontSize: 16,
  },
  active: {
    color: "#fff",
    fontWeight: "bold",
  },
});
