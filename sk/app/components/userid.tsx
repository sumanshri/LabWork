import { View, TextInput } from "react-native";

type UserIdProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function UserId({ value, onChangeText }: UserIdProps) {
  return (
    <View className="mb-4">
      <TextInput
        placeholder="User ID"
        value={value}
        onChangeText={onChangeText}
        className="border border-gray-300 rounded-xl px-4 py-4"
      />
    </View>
  );
}
