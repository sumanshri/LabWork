import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function BackToSignIn() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.replace("../Routes/Loginpage")}>
      <Text className="text-white text-xl">←</Text>
    </TouchableOpacity>
  );
}
