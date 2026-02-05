import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
};

export default function Password({ value, onChangeText, error }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="mb-2 relative">
      <TextInput
        placeholder="Password"
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

      {error && (
        <Text className="text-red-500 text-xs mt-1">
          Password is required
        </Text>
      )}
    </View>
  );
}
