import { View, TextInput } from "react-native";

export default function UserId() {
  return (
    <View className="mb-4">
      <TextInput
        placeholder="User ID"
        keyboardType="default"
        className="border border-gray-300 rounded-xl px-4 py-4"
      />
    </View>
  );
}
