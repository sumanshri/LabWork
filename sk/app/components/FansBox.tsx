import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import MainCircleSwitch from "./MainCircleSwitch";
import SmallCircleSwitch from "./SmallCircleSwitch";

export default function FansBox({ count }: { count: number }) {
  const [mainOn, setMainOn] = useState(false);
  const [fans, setFans] = useState<boolean[]>([]);

  useEffect(() => {
    setFans(Array(count).fill(false));
    setMainOn(false);
  }, [count]);

  const toggleMain = () => {
    const value = !mainOn;
    setMainOn(value);
    setFans(Array(count).fill(value));
  };

  const toggleFan = (i: number) => {
    const updated = [...fans];
    updated[i] = !updated[i];
    setFans(updated);
    setMainOn(updated.every(Boolean));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Fans</Text>

      <View style={{ alignItems: "center" }}>
        <MainCircleSwitch on={mainOn} toggle={toggleMain} />
      </View>

      <ScrollView>
        {fans.map((on, i) => (
          <View key={i} style={styles.item}>
            <Text>Fan {i + 1}</Text>
            <SmallCircleSwitch on={on} toggle={() => toggleFan(i)} />
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
    marginLeft: 8,
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
