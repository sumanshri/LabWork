import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import UserId from "../components/userid";
import Password from "../components/password";
import ForgetPwd from "../components/forgetpwd";

import SignInBtn from "../components/buttons/signinbtn";
import GoogleBtn from "../components/buttons/google";
import FacebookBtn from "../components/buttons/facebook";
import GetStartedBtn from "../components/buttons/getstarted";

export default function Loginpage() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    userId: false,
    password: false,
  });

  const handleSignIn = () => {
    const newErrors = {
      userId: userId.trim() === "",
      password: password.trim() === "",
    };

    setErrors(newErrors);

    // ✅ ALWAYS go to Homepage after successful login
    if (!newErrors.userId && !newErrors.password) {
      router.replace("/Routes/Homepage");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-indigo-600">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 pt-4">
        <Text className="text-white text-sm">
          Not having an account →
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/Routes/Getstartedpage")}
        >
          <GetStartedBtn />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View className="items-center mt-6 mb-6">
        <Text className="text-white text-3xl font-bold">
          SkyKnights
        </Text>
      </View>

      {/* Card */}
      <View className="flex-1 bg-white rounded-t-3xl">
        <ScrollView
          className="px-6 pt-8"
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-2xl font-bold text-center">
            Welcome
          </Text>
          <Text className="text-gray-400 text-center mt-1">
            Enter your details below
          </Text>

          <View className="mt-6">
            <UserId
              value={userId}
              onChangeText={setUserId}
              error={errors.userId}
            />

            <Password
              value={password}
              onChangeText={setPassword}
              error={errors.password}
            />

            <ForgetPwd />
          </View>

          <SignInBtn onPress={handleSignIn} />

          <Text className="text-center text-gray-400 mt-6">
            Or sign in with
          </Text>

          <View className="flex-row justify-between mt-4">
            <GoogleBtn />
            <FacebookBtn />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
