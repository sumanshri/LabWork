import { View, TextInput, Text } from "react-native";

export default function EmailPhone({
  value,
  onChangeText,
  error,
}: {
  value?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
}) {
  return (
    <View className="mb-2">
      <TextInput
        placeholder="Email or Phone Number"
        keyboardType="email-address"
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        className={`border rounded-xl px-4 py-4 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <Text className="text-red-500 text-xs mt-1">
          Email or phone is required
        </Text>
      )}
    </View>
  );
}
