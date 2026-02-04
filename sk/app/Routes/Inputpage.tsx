import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import CounterInput from "../components/CounterInput";
import SubmitSaveBtn from "../components/buttons/SubmitSaveBtn";

export default function Inputpage() {
  const router = useRouter();

  const [lights, setLights] = useState(0);
  const [fans, setFans] = useState(0);
  const [cameras, setCameras] = useState(0);

  const userId = "USER_1023";

  const handleSubmit = () => {
    const data = { lights, fans, cameras };
    console.log("Saved Data:", data);
    router.replace("/Routes/Homepage");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userId}>{userId}</Text>
        <View style={{ width: 60 }} />
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* White Box */}
        <View style={styles.inputBox}>
          <CounterInput
            label="Count of Cameras "
            value={cameras}
            onChange={setCameras}
          />

          <CounterInput
            label="Count of Lights "
            value={lights}
            onChange={setLights}
          />

          <CounterInput
            label="Count of Fans "
            value={fans}
            onChange={setFans}
          />
        </View>

        {/* Submit Button OUTSIDE the box */}
        <SubmitSaveBtn onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  userId: {
    fontSize: 14,
    fontWeight: "500",
  },

  body: {
    flex: 1,
    justifyContent: "center",   // ✅ center vertically
    alignItems: "center",       // ✅ center horizontally
    padding: 20,
  },

  inputBox: {
    width: "100%",
    maxWidth: 260,
    backgroundColor: "#FFFFFF", // ✅ white box
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
});
