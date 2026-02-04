import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CounterInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function CounterInput({ label, value, onChange }: CounterInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.counterRow}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onChange(Math.max(0, value - 1))}
        >
          <Text style={styles.btnText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.value}>{value}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => onChange(value + 1)}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: "100%",        // ✅ fill page width
    alignItems: "center", // ✅ center everything
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // ✅ center buttons
    width: "100%",
  },
  btn: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#0f3424",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: "center",
  },
});
