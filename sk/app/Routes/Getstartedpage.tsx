import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react"; // ✅ added

import UserId from "../components/userid";
import EmailPhone from "../components/emailphone";
import Password from "../components/password";
import ConfirmPassword from "../components/confirmpassword";

import CreateBtn from "../components/buttons/createbtn";
import GoogleBtn from "../components/buttons/google";
import FacebookBtn from "../components/buttons/facebook";
import BackToSignIn from "../components/buttons/backtosignin";

export default function Getstartedpage() {
  const [userId, setUserId] = useState(""); // ✅ added

  return (
    <SafeAreaView className="flex-1 bg-indigo-600">
      
      {/* Header */}
      <View className="flex-row items-center px-5 pt-4">
        <BackToSignIn />
        <Text className="text-white text-lg ml-4">
          Create your new account
        </Text>
      </View>

      {/* Title */}
      <View className="items-center mt-6">
        <Text className="text-white text-3xl font-bold">
          SkyKnights
        </Text>
      </View>

      {/* Scrollable card */}
      <ScrollView
        className="mt-8 bg-white rounded-t-3xl px-6 pt-8"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-2xl font-bold text-center">
          Get Started
        </Text>
        <Text className="text-gray-400 text-center mt-1">
          Enter your details below
        </Text>

        <View className="mt-6">
          {/* ✅ FIXED */}
          <UserId value={userId} onChangeText={setUserId} />
          <Password />
          <ConfirmPassword />
          <EmailPhone />
        </View>

        <CreateBtn />

        <Text className="text-center text-gray-400 mt-6">
          Or sign up with
        </Text>

        <View className="flex-row justify-between mt-4">
          <GoogleBtn />
          <FacebookBtn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
