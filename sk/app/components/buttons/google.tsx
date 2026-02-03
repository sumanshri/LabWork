import { TouchableOpacity, Text, View, Image } from "react-native";

export default function GoogleBtn() {
  return (
    <TouchableOpacity className="border border-gray-300 rounded-xl px-6 py-3 flex-1 mr-2">
      <View className="flex-row items-center justify-center">
        {/* Google Icon */}
        <Image
          source={{
            uri: "https://ik.imagekit.io/tnw9mtksh/my%20assets/google.png",
          }}
          style={{ width: 20, height: 20, marginRight: 8 }}
          resizeMode="contain"
        />

        {/* Button Text */}
        <Text className="text-center font-semibold">Google</Text>
      </View>
    </TouchableOpacity>
  );
}
