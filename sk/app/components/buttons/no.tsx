import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function NoBtn() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace("/Routes/Homepage")}
      className="bg-gray-200 px-6 py-3 rounded-xl"
    >
      <Text className="text-gray-900 font-semibold">No</Text>
    </TouchableOpacity>
  );
}
