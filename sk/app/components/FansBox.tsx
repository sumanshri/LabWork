import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import MainCircleSwitch from "./MainCircleSwitch";
import SmallCircleSwitch from "./SmallCircleSwitch";

type Props = {
  count: number;
};

export default function FansBox({ count }: Props) {
  const [mainOn, setMainOn] = useState(false);
  const [fans, setFans] = useState(Array(count).fill(false));

  const toggleMain = () => {
    const newState = !mainOn;
    setMainOn(newState);
    setFans(Array(count).fill(newState));
  };

  const toggleFan = (index: number) => {
    const updated = [...fans];
    updated[index] = !updated[index];
    setFans(updated);
    setMainOn(updated.every(Boolean));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Fans </Text>
      <center>
      <MainCircleSwitch on={mainOn} toggle={toggleMain} />
      </center>
      <ScrollView>
        {fans.map((on, i) => (
          <View key={i} style={styles.item}>
            <Text>Fan {i + 1}</Text>
            <SmallCircleSwitch
              on={on}
              toggle={() => toggleFan(i)}
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
    marginLeft: 8,
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
