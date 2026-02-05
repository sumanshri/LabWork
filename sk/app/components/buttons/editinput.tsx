import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  onClose?: () => void;
};

export default function EditInputBtn({ onClose }: Props) {
  const router = useRouter();

  const handlePress = () => {
    onClose?.();
    setTimeout(() => {
      router.push("/Routes/Inputpage"); // ✅ absolute path
    }, 200);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center px-4 py-3"
    >
      <Ionicons name="create-outline" size={20} color="#e5e7eb" />
      <Text className="ml-3 text-gray-200">Edit Input</Text>
    </TouchableOpacity>
  );
}
