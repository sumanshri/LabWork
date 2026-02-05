import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { clearDevices } from "../../utils/deviceStore";

type Props = {
  onClose?: () => void;
};

export default function LogoutBtn({ onClose }: Props) {
  const router = useRouter();

  const logout = () => {
    onClose?.(); // ✅ close sidebar first
    setTimeout(() => {
      clearDevices();
      router.replace("/Routes/Loginpage");
    }, 200);
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
