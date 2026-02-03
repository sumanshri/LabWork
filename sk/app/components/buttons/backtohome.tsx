import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function BackToHome() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.replace("../Routes/Homepage")}>
      <Text className="text-black text-xl">←</Text>
    </TouchableOpacity>
  );
}
