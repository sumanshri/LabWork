import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import CounterInput from "../components/CounterInput";
import SubmitSaveBtn from "../components/buttons/SubmitSaveBtn";
import { saveDevices } from "../utils/deviceStore";

export default function Inputpage() {
  const router = useRouter();

  const [lights, setLights] = useState(0);
  const [fans, setFans] = useState(0);
  const [cameras, setCameras] = useState(0);

  const userId = "USER_1023";

  const handleSubmit = () => {
    saveDevices({ lights, fans, cameras });
    router.replace("/Routes/Homepage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userId}>{userId}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.inputBox}>
          <CounterInput label="Count of Cameras" value={cameras} onChange={setCameras} />
          <CounterInput label="Count of Lights" value={lights} onChange={setLights} />
          <CounterInput label="Count of Fans" value={fans} onChange={setFans} />
        </View>

        <SubmitSaveBtn onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  userId: { fontSize: 14, fontWeight: "500" },
  body: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  inputBox: {
    width: "100%",
    maxWidth: 260,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 4,
  },
});
