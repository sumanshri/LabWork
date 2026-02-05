import { TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  on: boolean;
  toggle: () => void;
};

export default function SmallCircleSwitch({ on, toggle }: Props) {
  return (
    <TouchableOpacity
      onPress={toggle}
      style={[
        styles.switch,
        { backgroundColor: on ? "#275337" : "#CBD5E1" },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  switch: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
