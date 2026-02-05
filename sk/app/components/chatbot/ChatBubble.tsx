// app/components/chatbot/ChatBubble.tsx

import { View, Text } from "react-native";

export default function ChatBubble({
  text,
  sender,
}: {
  text: string;
  sender: "bot" | "user";
}) {
  const isBot = sender === "bot";

  return (
    <View
      className={`mb-3 max-w-[80%] ${
        isBot ? "self-start" : "self-end"
      }`}
    >
      <View
        className={`px-4 py-3 rounded-xl ${
          isBot
            ? "bg-gray-100"
            : "bg-blue-600"
        }`}
      >
        <Text
          className={`text-sm ${
            isBot ? "text-gray-900" : "text-white"
          }`}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}
