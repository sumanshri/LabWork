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
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, alert && styles.alertBorder]}
      activeOpacity={0.9}
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
        isMuted
      />

      {alert && (
        <Text style={styles.alertText}>⚠ Abnormal activity detected</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 18,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
  },
  alertBorder: {
    borderWidth: 2,
    borderColor: "#DC2626",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    height: 180,
    borderRadius: 12,
    backgroundColor: "#000",
  },
  alertText: {
    marginTop: 6,
    color: "#DC2626",
    fontWeight: "600",
  },
});
