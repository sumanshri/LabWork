// app/Routes/Helppage.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ChatBubble from "../components/chatbot/ChatBubble";
import QuickReply from "../components/chatbot/QuickReply";
import BackToHome from "../components/buttons/backtohome";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
};

export default function Helppage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there 👋\nWelcome to SmartLab support.\nHow can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
    };

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotReply(text),
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-blue-600">
        {/* Back arrow */}
        <View className="mr-3">
          <BackToHome />
        </View>

        {/* Title */}
        <Text className="text-white font-semibold text-lg">
          Virtual Assistant
        </Text>
      </View>

      {/* Chat */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble text={item.text} sender={item.sender} />
        )}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Quick replies */}
      <View className="px-4">
        <QuickReply
          text="I need invoice for an order"
          onPress={sendMessage}
        />
        <QuickReply
          text="How to add a new account?"
          onPress={sendMessage}
        />
        <QuickReply
          text="No, thanks! I’m good"
          onPress={sendMessage}
        />
      </View>

      {/* Input */}
      <View className="flex-row items-center px-3 py-2 border-t border-gray-200">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-2"
        />
        <TouchableOpacity
          onPress={() => sendMessage(input)}
          className="ml-2"
        >
          <Ionicons name="send" size={22} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function getBotReply(question: string) {
  const q = question.toLowerCase();

  if (q.includes("invoice")) {
    return "You can download your invoice from Orders → Order Details.";
  }

  if (q.includes("add account")) {
    return "Go to Settings → Add Account to create or login to another account.";
  }

  return "Thanks for your message 😊 Our team will assist you shortly.";
}
