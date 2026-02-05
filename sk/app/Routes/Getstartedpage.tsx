import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import UserId from "../components/userid";
import EmailPhone from "../components/emailphone";
import Password from "../components/password";
import ConfirmPassword from "../components/confirmpassword";
import CreateBtn from "../components/buttons/createbtn";
import BackToSignIn from "../components/buttons/backtosignin";

import { saveAccount } from "../utils/authStore";

export default function Getstartedpage() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    userId: false,
    email: false,
    password: false,
    confirmPassword: false,
    passwordMismatch: false,
  });

  const handleCreateAccount = () => {
    const newErrors = {
      userId: userId.trim() === "",
      email: email.trim() === "",
      password: password.trim() === "",
      confirmPassword: confirmPassword.trim() === "",
      passwordMismatch:
        password !== "" &&
        confirmPassword !== "" &&
        password !== confirmPassword,
    };

    setErrors(newErrors);

    if (
      !newErrors.userId &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword &&
      !newErrors.passwordMismatch
    ) {
      saveAccount({ userId, password, email });
      router.replace("/Routes/Inputpage");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-indigo-600">
      <View className="flex-row items-center px-5 pt-4">
        <BackToSignIn />
        <Text className="text-white text-lg ml-4">
          Create your new account
        </Text>
      </View>

      <View className="items-center mt-6">
        <Text className="text-white text-3xl font-bold">SkyKnights</Text>
      </View>

      <ScrollView className="mt-8 bg-white rounded-t-3xl px-6 pt-8">
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

        <ConfirmPassword
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          error={errors.confirmPassword || errors.passwordMismatch}
          mismatch={errors.passwordMismatch}
        />

        <EmailPhone
          value={email}
          onChangeText={setEmail}
          error={errors.email}
        />

        <CreateBtn onPress={handleCreateAccount} />
      </ScrollView>
    </SafeAreaView>
  );
}
