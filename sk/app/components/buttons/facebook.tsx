import { TouchableOpacity, Text, View, Image } from "react-native";

export default function FacebookBtn() {
  return (
    <TouchableOpacity className="border border-gray-300 rounded-xl px-6 py-3 flex-1 ml-2">
      <View className="flex-row items-center justify-center">
        {/* Facebook Icon */}
        <Image
          source={require("C:/Users/kisho/OneDrive/Desktop/smartlab/sk/assets/images/facebook.png")} // relative path
          style={{ width: 20, height: 20, marginRight: 8 }}
        />

        {/* Button Text */}
        <Text className="text-center font-semibold text-blue-600">
          Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );
}
