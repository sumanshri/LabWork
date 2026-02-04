import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.replace("../Routes/Homepage")}>
        <Text style={[styles.item, isActive("../Routes/Homepage") && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("../Routes/Surveillance")}>
        <Text
          style={[
            styles.item,
            isActive("../Routes/Surveillance") && styles.active,
          ]}
        >
          Surveillance
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("../Routes/Settings")}>
        <Text
          style={[
            styles.item,
            isActive("../Routes/Settings") && styles.active,
          ]}
        >
          Settings
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
    backgroundColor: "#0f3424", // dark green
    borderTopWidth: 1,
    borderTopColor: "#184e37",
  },
  item: {
    color: "#b7d6c5",
    fontSize: 14,
    fontWeight: "500",
  },
  active: {
    color: "#fafcfb",
    fontWeight: "700",
  },
});
