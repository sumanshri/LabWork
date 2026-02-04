import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BackToDeviceLogged() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace("/Routes/Devicelogged")}
      className="p-2"
    >
      <Ionicons name="arrow-back" size={24} color="#111827" />
    </TouchableOpacity>
  );
}
