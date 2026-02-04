import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Video, ResizeMode } from "expo-av";

export default function CameraAlertDetail() {
  const { name, uri } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Video
        source={{ uri: String(uri) }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />

      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>⚠ Alert Details</Text>
        <Text>• Motion detected</Text>
        <Text>• Unusual movement pattern</Text>
        <Text>• ML confidence: 87%</Text>
        <Text>• Timestamp: 14:32:10</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 260,
    borderRadius: 12,
  },
  alertBox: {
    marginTop: 20,
    backgroundColor: "#FEE2E2",
    padding: 14,
    borderRadius: 12,
  },
  alertTitle: {
    fontWeight: "700",
    color: "red",
    marginBottom: 6,
  },
});
