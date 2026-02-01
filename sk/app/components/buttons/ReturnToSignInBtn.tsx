// app/components/buttons/returntosignin.tsx
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function ReturnToSignInBtn() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-indigo-600 py-4 rounded-xl mt-4"
      onPress={() => router.replace("/Routes/Loginpage")}
    >
      <Text className="text-white text-center font-bold text-lg">
        Return to Sign In
      </Text>
    </TouchableOpacity>
  );
}
