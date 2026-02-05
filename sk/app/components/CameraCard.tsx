import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";

type Props = {
  name: string;
  videoUri: string;
  alert: boolean;
  onPress: () => void;
};

export default function CameraCard({ name, videoUri, alert, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, alert && styles.alertBorder]}
      activeOpacity={0.85}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        {alert && <Text style={styles.alertBadge}>ALERT</Text>}
      </View>

      <Video
        source={{ uri: videoUri }}
        style={styles.video}
        
        resizeMode={ResizeMode.COVER}
        shouldPlay={false}
        isLooping
      />

      {alert && (
        <Text style={styles.alertText}>⚠ Unauthorized movement detected</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
  },
  alertBorder: {
    borderWidth: 2,
    borderColor: "#DC2626",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  alertBadge: {
    backgroundColor: "#DC2626",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "700",
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  alertText: {
    marginTop: 6,
    color: "#DC2626",
    fontWeight: "600",
  },
});
