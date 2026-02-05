import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import LightsBox from "../components/LightsBox";
import FansBox from "../components/FansBox";
import NavBar from "../components/NavBar";
import { getDevices } from "../utils/deviceStore";

export default function Homepage() {
  const { lights, fans } = getDevices();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userId}>USER_1023</Text>

      <ScrollView style={styles.bigBox}>
        <View style={styles.innerRow}>
          <LightsBox count={lights} />
          <FansBox count={fans} />
        </View>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  userId: { margin: 16, fontWeight: "600" },
  bigBox: {
    backgroundColor: "#f9fcfb",
    marginHorizontal: 12,
    borderRadius: 18,
    maxHeight: "75%",
    padding: 12,
  },
  innerRow: { flexDirection: "row" },
});
