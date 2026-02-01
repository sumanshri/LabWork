import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function GetStartedBtn() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("../Routes/Getstartedpage")}>
      <Text className="text-white font-semibold">Get Started</Text>
    </TouchableOpacity>
  );
}
