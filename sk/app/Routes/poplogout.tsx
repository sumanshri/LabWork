import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function PopLogout() {
  const router = useRouter();
  const { device } = useLocalSearchParams<{ device: string }>();

  return (
    <View className="flex-1 bg-black/50 justify-center items-center px-6">

      {/* Popup Card */}
      <View className="bg-white w-full rounded-2xl p-6">
        <Text className="text-lg font-semibold text-center text-gray-900">
          Confirm Logout
        </Text>

        <Text className="text-gray-600 text-center mt-3">
          Are you sure you want to log out from
        </Text>

        <Text className="text-gray-900 font-medium text-center mt-1">
          {device}
        </Text>

        <View className="flex-row justify-between mt-6">
          {/* NO */}
          <TouchableOpacity
            className="flex-1 mr-2 border border-gray-300 rounded-xl py-3"
            onPress={() => router.back()}
          >
            <Text className="text-center text-gray-700 font-medium">
              No
            </Text>
          </TouchableOpacity>

          {/* YES */}
          <TouchableOpacity
            className="flex-1 ml-2 bg-red-500 rounded-xl py-3"
            onPress={() =>
              router.replace({
                pathname: "/Routes/Devicelogged",
                params: { loggedOutDevice: device },
              })
            }
          >
            <Text className="text-center text-white font-medium">
              Yes, Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
