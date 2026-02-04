import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react"; // ✅ added

import UserId from "../components/userid";
import Password from "../components/password";
import ForgetPwd from "../components/forgetpwd";

import SignInBtn from "../components/buttons/signinbtn";
import GoogleBtn from "../components/buttons/google";
import FacebookBtn from "../components/buttons/facebook";
import GetStartedBtn from "../components/buttons/getstarted";

export default function Loginpage() {
  const router = useRouter();
  const [userId, setUserId] = useState(""); // ✅ added

  return (
    <SafeAreaView className="flex-1 bg-indigo-600">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 pt-4">
        <Text className="text-white text-l">Not having an account →</Text>

        <TouchableOpacity onPress={() => router.push("/Routes/Getstartedpage")}>
          <GetStartedBtn />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View className="items-center mt-6">
        <Text className="text-white text-3xl font-bold">SkyKnights</Text>
      </View>

      {/* Card */}
      <ScrollView className="mt-8 bg-white rounded-t-3xl px-6 pt-8">
        <Text className="text-2xl font-bold text-center">Welcome</Text>
        <Text className="text-gray-400 text-center mt-1">
          Enter your details below
        </Text>

        <View className="mt-6">
          {/* ✅ pass props */}
          <UserId value={userId} onChangeText={setUserId} />
          <Password />
          <ForgetPwd />
        </View>

        <SignInBtn />

        <Text className="text-center text-gray-400 mt-6">
          Or sign in with
        </Text>

        <View className="flex-row justify-between mt-4">
          <GoogleBtn />
          <FacebookBtn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
