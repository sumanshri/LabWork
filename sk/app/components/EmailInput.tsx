// app/components/emailinput.tsx
import { View, TextInput } from "react-native";

export default function EmailInput({ value, onChangeText }: { value: string; onChangeText: (text: string) => void }) {
  return (
    <View className="mb-2">
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={value}
        onChangeText={onChangeText}
        className="border border-gray-300 rounded-xl px-4 py-4"
      />
    </View>
  );
}
