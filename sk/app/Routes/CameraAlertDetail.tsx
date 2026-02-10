import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

export default function CameraAlertDetail() {
  const router = useRouter();
  const { name, uri, alert, alertMsg } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>

      {/* Focus Video */}
      <Video
        source={{ uri: String(uri) }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />

      {/* Alert Section */}
      {alert === "true" && (
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>⚠ Alert Details</Text>
          <Text>• {alertMsg}</Text>
          <Text>• Motion classification: Human</Text>
          <Text>• Confidence: 87%</Text>
          <Text>• Timestamp: {new Date().toLocaleTimeString()}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
  },
  video: {
    width: "100%",
    height: 280,
    backgroundColor: "#000",
  },

  alertBox: {
    margin: 16,
    padding: 14,
    backgroundColor: "#FEE2E2",
    borderRadius: 12,
  },

  alertTitle: {
    fontWeight: "700",
    color: "#DC2626",
    marginBottom: 6,
  },
});
