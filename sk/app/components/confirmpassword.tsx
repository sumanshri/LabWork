import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

export default function Password() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="mb-2 relative">
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={!passwordVisible} // hide password when false
        className="border border-gray-300 rounded-xl px-4 py-4 pr-10"
      />
      <TouchableOpacity
        className="absolute right-4 top-4"
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Image
          source={
            passwordVisible
              ? require("C:/Users/kisho/OneDrive/Desktop/smartlab/sk/assets/images/open_eye.png")   // open eye when visible
              : require("C:/Users/kisho/OneDrive/Desktop/smartlab/sk/assets/images/close_eye.png") // closed eye when hidden
          }
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}
