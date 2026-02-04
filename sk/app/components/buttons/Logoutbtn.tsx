import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LogoutBtn() {
  const router = useRouter();

  const logout = () => {
    // later: clear token / storage
    router.replace("/Routes/Loginpage");
  };

  return (
    <TouchableOpacity
      onPress={logout}
      className="flex-row items-center px-4 py-3"
    >
      <Ionicons name="log-out-outline" size={20} color="#ef4444" />
      <Text className="ml-3 text-red-400">Logout</Text>
    </TouchableOpacity>
  );
}
