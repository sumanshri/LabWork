import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DeleteAccountBtn({
  onClose,
}: {
  onClose?: () => void;
}) {
  const router = useRouter();

  const handlePress = () => {
    onClose?.(); // close sidebar first
    setTimeout(() => {
      router.push("/Routes/Deleteaccount");
    }, 200);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center px-4 py-3"
    >
      <Ionicons name="trash-outline" size={20} color="#ef4444" />
      <Text className="ml-3 text-red-400">Delete Account</Text>
    </TouchableOpacity>
  );
}
