import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import MainCircleSwitch from "./MainCircleSwitch";
import SmallCircleSwitch from "./SmallCircleSwitch";

export default function LightsBox({ count }: { count: number }) {
  const [mainOn, setMainOn] = useState(false);
  const [lights, setLights] = useState<boolean[]>([]);

  useEffect(() => {
    setLights(Array(count).fill(false));
    setMainOn(false);
  }, [count]);

  const toggleMain = () => {
    const value = !mainOn;
    setMainOn(value);
    setLights(Array(count).fill(value));
  };

  const toggleLight = (i: number) => {
    const updated = [...lights];
    updated[i] = !updated[i];
    setLights(updated);
    setMainOn(updated.every(Boolean));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Lights</Text>

      <View style={{ alignItems: "center" }}>
        <MainCircleSwitch on={mainOn} toggle={toggleMain} />
      </View>

      <ScrollView>
        {lights.map((on, i) => (
          <View key={i} style={styles.item}>
            <Text>Light {i + 1}</Text>
            <SmallCircleSwitch on={on} toggle={() => toggleLight(i)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    marginRight: 8,
  },
  title: { fontSize: 16, fontWeight: "700" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    padding: 10,
    borderRadius: 10,
    marginVertical: 6,
  },
});
