import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function CreateBtn() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-black py-4 rounded-xl mt-4"
      onPress={() => router.push("/Routes/InputPage")}
    >
      <Text className="text-white text-center text-lg font-semibold">
        Create Account
      </Text>
    </TouchableOpacity>
  );
}
