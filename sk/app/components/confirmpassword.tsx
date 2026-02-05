import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
  mismatch?: boolean;
};

export default function ConfirmPassword({
  value,
  onChangeText,
  error,
  mismatch,
}: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="mb-2 relative">
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={!passwordVisible}
        value={value}
        onChangeText={onChangeText}
        className={`border rounded-xl px-4 py-4 pr-10 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      <TouchableOpacity
        className="absolute right-4 top-4"
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Image
          source={{
            uri: passwordVisible
              ? "https://ik.imagekit.io/tnw9mtksh/my%20assets/open_eye.png"
              : "https://ik.imagekit.io/tnw9mtksh/my%20assets/close_eye.png",
          }}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      {error && !mismatch && (
        <Text className="text-red-500 text-xs mt-1">
          Confirm password is required
        </Text>
      )}

      {mismatch && (
        <Text className="text-red-500 text-xs mt-1">
          Passwords do not match
        </Text>
      )}
    </View>
  );
}
