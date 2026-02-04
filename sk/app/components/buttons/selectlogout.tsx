import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SelectLogout() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="mt-10 bg-black rounded-xl py-4 items-center"
      onPress={() => router.push("../Routes/Selectdevice")}
    >
      <Text className="text-white text-base font-medium">
        Logout
      </Text>
    </TouchableOpacity>
  );
}
