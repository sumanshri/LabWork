import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SubmitSaveBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Save & Submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: "#184e37",
    paddingVertical: 16,   // ✅ more vertical space
    paddingHorizontal: 24, // ✅ side breathing room
    borderRadius: 14,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,          // ✅ readable size
    fontWeight: "700",
    letterSpacing: 0.5,    // ✅ clean look
  },
});
