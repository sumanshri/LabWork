import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";

type Props = {
  name: string;
  videoUri: string;
  alert: boolean;
  onPress: () => void;
};

export default function CameraCard({
  name,
  videoUri,
  alert,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles.card,
      alert && styles.alertBorder
    ]}>
      <Text style={styles.title}>{name}</Text>

      <Video
        source={{ uri: videoUri }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
      />

      {alert && <Text style={styles.alertText}>⚠ Disturbance Detected</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
  },
  alertBorder: {
    borderWidth: 3,
    borderColor: "red",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  alertText: {
    marginTop: 6,
    color: "red",
    fontWeight: "600",
  },
});
