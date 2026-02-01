// app/components/buttons/sendemailbtn.tsx
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SendEmailBtn({ email }: { email: string }) {
  const router = useRouter();

  const handleSendEmail = () => {
    // TODO: send 'email' to backend here
    console.log("Sending email:", email);

    // Navigate to ReturnPage
    router.push("../Routes/ReturnPage");
  };

  return (
    <TouchableOpacity
      className="bg-indigo-600 py-4 rounded-xl mt-4"
      onPress={handleSendEmail}
    >
      <Text className="text-white text-center font-bold text-lg">
        Send Email
      </Text>
    </TouchableOpacity>
  );
}
