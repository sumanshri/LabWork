import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  on: boolean;
  toggle: () => void;
};

export default function MainCircleSwitch({ on, toggle }: Props) {
  return (
    <TouchableOpacity
      onPress={toggle}
      style={[
        styles.switch,
        { backgroundColor: on ? "#275337df" : "#CBD5E1" },
      ]}
    >
      <Text style={styles.text}>{on ? "ON" : "OFF"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  switch: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#fffbfb",
    fontWeight: "700",
  },
});
