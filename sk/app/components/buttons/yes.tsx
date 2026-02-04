import { TouchableOpacity, Text } from "react-native";

export default function YesBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-red-600 px-6 py-3 rounded-xl"
    >
      <Text className="text-white font-semibold">Yes</Text>
    </TouchableOpacity>
  );
}
