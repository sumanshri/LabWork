import { View, Text, SafeAreaView } from "react-native";

export default function InputPage() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Input Page</Text>
      <Text className="text-gray-500 mt-2">
        Here the user will enter their details after account creation
      </Text>
    </SafeAreaView>
  );
}
