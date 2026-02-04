import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export default function AddEmail() {
  const [email, setEmail] = useState("");

  return (
    <View className="mt-2">
      {/* Input */}
      <TextInput
        placeholder="Add email / phone"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 rounded-xl px-4 py-4"
      />

      {/* Add Button */}
      <TouchableOpacity
        className="mt-3 bg-black rounded-xl py-3 items-center"
        onPress={() => {
          // later: link email/phone to user account
          console.log("Added:", email);
        }}
      >
        <Text className="text-white text-base font-medium">
          Add email
        </Text>
      </TouchableOpacity>
    </View>
  );
}
