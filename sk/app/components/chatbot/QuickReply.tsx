// app/components/chatbot/QuickReply.tsx

import { TouchableOpacity, Text } from "react-native";

export default function QuickReply({
  text,
  onPress,
}: {
  text: string;
  onPress: (text: string) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(text)}
      className="border border-blue-500 rounded-xl px-4 py-3 mb-2"
    >
      <Text className="text-blue-600 text-center font-medium">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
