import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import LightsBox from "../components/LightsBox";
import FansBox from "../components/FansBox";
import NavBar from "../components/NavBar";

export default function Homepage() {
  const userId = "USER_1023";

  const lightsCount = 10;
  const fansCount = 10;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.userId}>{userId}</Text>

      {/* Big Scrollable Green Box */}
      <ScrollView style={styles.bigBox}>
        <View style={styles.innerRow}>
          <LightsBox count={lightsCount} />
          <FansBox count={fansCount} />
        </View>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  userId: {
    margin: 16,
    fontWeight: "600",
  },
  bigBox: {
    backgroundColor: "#f9fcfb",
    marginHorizontal: 12,
    borderRadius: 18,
    maxHeight: "75%",
    padding: 12,
  },
  innerRow: {
    flexDirection: "row",
  },
});
