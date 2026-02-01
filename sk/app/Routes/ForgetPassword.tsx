import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";

import BackToSignIn from "../components/buttons/backtosignin";
import EmailInput from "../components/EmailInput";
import SendEmailBtn from "../components/buttons/SendEmailBtn";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-indigo-600">
      
      {/* Header with back arrow */}
      <View className="flex-row items-center px-5 pt-4">
        <BackToSignIn />
        <Text className="text-white text-lg ml-4">Reset Password</Text>
      </View>

      {/* Title */}
      <View className="items-center mt-6">
        <Text className="text-white text-3xl font-bold">SkyKnights</Text>
      </View>

      {/* Scrollable card */}
      <ScrollView
        className="mt-8 bg-white rounded-t-3xl px-6 pt-8"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-2xl font-bold text-center">Reset Password</Text>
        <Text className="text-gray-400 text-center mt-1">
          Enter your user account’s verified email to get reset password link
        </Text>

        <View className="mt-6">
          <EmailInput value={email} onChangeText={setEmail} />
        </View>

        <SendEmailBtn email={email} />
      </ScrollView>
    </SafeAreaView>
  );
}
