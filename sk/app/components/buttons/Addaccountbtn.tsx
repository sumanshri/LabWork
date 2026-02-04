import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AddAccountBtn({
  onClose,
}: {
  onClose?: () => void;
}) {
  const router = useRouter();

  const handlePress = () => {
    onClose?.(); // ✅ close sidebar first
    setTimeout(() => {
      router.push("/Routes/Addaccount");
    }, 200); // ✅ wait for sidebar animation
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center px-4 py-3"
    >
      <Ionicons name="add-circle-outline" size={20} color="#e5e7eb" />
      <Text className="ml-3 text-gray-200">Add Account</Text>
    </TouchableOpacity>
  );
}
