import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function ExistingPage() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-white border border-gray-300 rounded-xl py-4 mb-3"
      onPress={() => router.replace("/Routes/Loginpage")}
    >
      <Text className="text-center text-gray-900 font-medium">
        Login into existing account
      </Text>
    </TouchableOpacity>
  );
}
