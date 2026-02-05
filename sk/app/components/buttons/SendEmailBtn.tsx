import { TouchableOpacity, Text, Alert } from "react-native";
import { getAccount } from "../../utils/authStore";

export default function SendEmailBtn({ email }: { email: string }) {
  const handleSendEmail = () => {
    const account = getAccount();

    if (!account || email !== account.email) {
      Alert.alert("Error", "Email not found");
      return;
    }

    Alert.alert("Success", "Password reset link sent to your email");
  };

  return (
    <TouchableOpacity className="bg-indigo-600 py-4 rounded-xl mt-4" onPress={handleSendEmail}>
      <Text className="text-white text-center font-bold text-lg">
        Send Email
      </Text>
    </TouchableOpacity>
  );
}
