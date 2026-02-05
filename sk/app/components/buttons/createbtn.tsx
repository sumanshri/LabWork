import { TouchableOpacity, Text } from "react-native";

export default function CreateBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity className="bg-black py-4 rounded-xl mt-4" onPress={onPress}>
      <Text className="text-white text-center text-lg font-semibold">
        Create Account
      </Text>
    </TouchableOpacity>
  );
}
