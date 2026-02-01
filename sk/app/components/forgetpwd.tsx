import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ForgetPwd() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/Routes/ForgetPassword")}
      className="items-end mb-6"
    >
      <Text className="text-indigo-600 font-semibold">
        Forgot your password?
      </Text>
    </TouchableOpacity>
  );
}
