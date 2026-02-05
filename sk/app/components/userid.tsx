import { View, TextInput, Text } from "react-native";

type UserIdProps = {
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
};

export default function UserId({ value, onChangeText, error }: UserIdProps) {
  return (
    <View className="mb-4">
      <TextInput
        placeholder="User ID"
        value={value}
        onChangeText={onChangeText}
        className={`border rounded-xl px-4 py-4 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <Text className="text-red-500 text-xs mt-1">
          User ID is required
        </Text>
      )}
    </View>
  );
}
