import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import BackToHome from "../components/buttons/backtohome";
import AddEmail from "../components/buttons/AddEmail";

export default function Profile() {
  const router = useRouter();

  // TEMP values (later replace with real user data)
  const [userId] = useState("USER_12345");
  const [email] = useState("user@email.com");

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      
      {/* Back Arrow */}
      <View className="mt-4">
        <BackToHome />
      </View>

      {/* Profile Picture */}
      <View className="items-center mt-6">
        <Image
          source={{
            uri: "https://ik.imagekit.io/tnw9mtksh/my%20assets/profile.png",
          }}
          className="w-24 h-24 rounded-full"
        />
      </View>

      {/* User ID (DISPLAY ONLY) */}
      <View className="mt-4 items-center">
        <Text className="text-lg font-semibold text-gray-800">
          {userId}
        </Text>
      </View>

      {/* Email (DISPLAY ONLY) */}
      <View className="mt-6 border border-gray-300 rounded-xl px-4 py-4 bg-gray-100">
        <Text className="text-gray-600 text-base">
          {email}
        </Text>
      </View>

      {/* Add Email */}
      <View className="mt-4">
        <AddEmail />
      </View>

      {/* Change Password */}
      <TouchableOpacity
        className="mt-6 items-center"
        onPress={() => router.push("../Routes/ForgetPassword")}
      >
        <Text className="text-blue-600 text-base font-medium">
          Change password?
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
