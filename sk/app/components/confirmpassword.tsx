import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

export default function ConfirmPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="mb-2 relative">
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={!passwordVisible}
        className="border border-gray-300 rounded-xl px-4 py-4 pr-10"
      />

      <TouchableOpacity
        className="absolute right-4 top-4"
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Image
          source={{
            uri: passwordVisible
              ? "https://ik.imagekit.io/tnw9mtksh/my%20assets/open_eye.png?updatedAt=1770046305821"
              : "https://ik.imagekit.io/tnw9mtksh/my%20assets/close_eye.png?updatedAt=1770046261997",
          }}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}
