import { View, TextInput } from "react-native";

export default function EmailPhone({
  value,
  onChangeText,
}: {
  value?: string;
  onChangeText?: (text: string) => void;
}) {
  return (
    <View className="mb-2">
      <TextInput
        placeholder="Email or Phone Number"
        keyboardType="email-address"
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        className="border border-gray-300 rounded-xl px-4 py-4"
      />
    </View>
  );
}
