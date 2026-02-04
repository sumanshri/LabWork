import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import MainCircleSwitch from "./MainCircleSwitch";
import SmallCircleSwitch from "./SmallCircleSwitch";

type Props = {
  count: number;
};

export default function LightsBox({ count }: Props) {
  const [mainOn, setMainOn] = useState(false);
  const [lights, setLights] = useState(Array(count).fill(false));

  const toggleMain = () => {
    const newState = !mainOn;
    setMainOn(newState);
    setLights(Array(count).fill(newState));
  };

  const toggleLight = (index: number) => {
    const updated = [...lights];
    updated[index] = !updated[index];
    setLights(updated);
    setMainOn(updated.every(Boolean));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Lights </Text>
      <center>
      <MainCircleSwitch on={mainOn} toggle={toggleMain} />
      </center>
      <ScrollView>
        {lights.map((on, i) => (
          <View key={i} style={styles.item}>
            <Text>Light {i + 1}</Text>
            <SmallCircleSwitch
              on={on}
              toggle={() => toggleLight(i)}
            />
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
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
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
