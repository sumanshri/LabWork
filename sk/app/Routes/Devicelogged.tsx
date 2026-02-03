import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import UserDevice from "../components/userdevice";
import OtherDevice from "../components/otherdevice";
import SelectLogout from "../components/buttons/selectlogout";
import BackToHome from "../components/buttons/backtohome";

export default function Devicelogged() {
  const { loggedOutDevice } = useLocalSearchParams();

  const username = "USER_12345";
  const currentDevice = "Redmi Note 12 • Android";

  const [otherDevices, setOtherDevices] = useState<string[]>([
    "Windows • Chrome",
    "iPhone 13 • iOS",
  ]);

  // ✅ REMOVE LOGGED-OUT DEVICE FROM OTHER DEVICES
  useEffect(() => {
    if (loggedOutDevice) {
      setOtherDevices((prev) =>
        prev.filter((device) => device !== loggedOutDevice)
      );
    }
  }, [loggedOutDevice]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5">

        {/* Header */}
        <View className="flex-row items-center mt-6">
          <BackToHome />
          <Text className="text-lg font-semibold ml-4 text-gray-900">
            Devices Logged In
          </Text>
        </View>

        {/* Username */}
        <View className="mt-8 items-center">
          <Text className="text-xl font-semibold text-gray-900">
            {username}
          </Text>
        </View>

        {/* Current Device */}
        <View className="mt-8">
          <Text className="text-sm text-gray-500 mb-2">
            Current device
          </Text>

          <UserDevice deviceName={currentDevice} />
        </View>

        {/* Other Devices */}
        <View className="mt-8">
          <Text className="text-sm text-gray-500 mb-2">
            Logins on other devices
          </Text>

          {otherDevices.length === 0 ? (
            <Text className="text-gray-400 text-center mt-4">
              No other devices logged in
            </Text>
          ) : (
            <OtherDevice devices={otherDevices} />
          )}
        </View>

        {/* Logout */}
        <SelectLogout />

      </ScrollView>
    </SafeAreaView>
  );
}
