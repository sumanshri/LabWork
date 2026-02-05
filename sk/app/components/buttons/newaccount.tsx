import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function NewAccount() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-white border border-gray-300 rounded-xl py-4"
      onPress={() => router.push("/Routes/Getstartedpage")}
    >
      <Text className="text-center text-gray-900 font-medium">
        Create new account
      </Text>
    </TouchableOpacity>
  );
}
