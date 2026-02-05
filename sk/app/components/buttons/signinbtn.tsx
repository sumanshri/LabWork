import { TouchableOpacity, Text } from "react-native";








export default function SignInBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      className="bg-indigo-600 py-4 rounded-xl mt-4"
      onPress={onPress}
    >
      <Text className="text-white text-center font-bold text-lg">
        Sign in
      </Text>
    </TouchableOpacity>
  );
}
