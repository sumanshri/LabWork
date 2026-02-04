import React from "react";
import { View, StyleSheet } from "react-native";

export default function Handle() {
  return (
    <View style={styles.container}>
      {/* Bigger touch area */}
      <View style={styles.touchArea}>
        <View style={styles.handle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  touchArea: {
    paddingVertical: 10, // easier to drag
    paddingHorizontal: 20,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#C1C1C1",
  },
});
