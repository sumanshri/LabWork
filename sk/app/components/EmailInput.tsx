
import { View, TextInput } from "react-native";


type EmailInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function EmailInput({ value, onChangeText }: EmailInputProps) {
  return (
    <View className="mb-2">
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        className="border border-gray-300 rounded-xl px-4 py-4"
      />
    </View>
  );
}
