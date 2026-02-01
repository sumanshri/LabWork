import { TouchableOpacity, Text, View, Image } from "react-native";

export default function GoogleBtn() {
  return (
    <TouchableOpacity className="border border-gray-300 rounded-xl px-6 py-3 flex-1 mr-2">
      <View className="flex-row items-center justify-center">
        {/* Google Icon */}
        <Image
          source={require("C:/Users/kisho/OneDrive/Desktop/smartlab/sk/assets/images/google.png")} // adjust path if needed
          style={{ width: 20, height: 20, marginRight: 8 }}
        />

        {/* Button Text */}
        <Text className="text-center font-semibold">Google</Text>
      </View>
    </TouchableOpacity>
  );
}
