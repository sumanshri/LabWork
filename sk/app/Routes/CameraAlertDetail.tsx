import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

export default function CameraAlertDetail() {
  const router = useRouter();
  const { name, uri } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 🔙 Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>{name}</Text>
      </View>

      {/* 🎥 Video aligned to LEFT */}
      <View style={styles.videoWrapper}>
        <Video
          source={{ uri: String(uri) }}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
        />
      </View>

      {/* ⚠ Alert Details */}
      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>⚠ Alert Details</Text>
        <Text>• Motion detected</Text>
        <Text>• Unauthorized entry</Text>
        <Text>• ML confidence: 87%</Text>
        <Text>• Timestamp: 14:32:10</Text>
      </View>

      {/* 🚫 Navbar should be hidden until homepage
          If this page is AFTER homepage, keep it.
          Otherwise remove NavBar here */}
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
  },

  videoWrapper: {
    alignItems: "flex-start", // LEFT alignment
    paddingLeft: 16,
    marginTop: 8,
  },

  video: {
    width: "90%",
    height: 260,
    backgroundColor: "#000",
    borderRadius: 12,
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
