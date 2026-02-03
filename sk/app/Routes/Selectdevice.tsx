import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import BackToDeviceLogged from "../components/buttons/backtodevicelogged";

export default function Selectdevice() {
  const router = useRouter();
  const { loggedOutDevice } = useLocalSearchParams();

  const [devices, setDevices] = useState<string[]>([
    "Redmi Note 12 • Android (Current)",
    "Windows • Chrome",
    "iPhone 13 • iOS",
  ]);

  // ✅ REMOVE LOGGED OUT DEVICE WHEN COMING BACK
  useEffect(() => {
    if (loggedOutDevice) {
      setDevices((prev) =>
        prev.filter((device) => device !== loggedOutDevice)
      );
    }
  }, [loggedOutDevice]);

  return (
    <SafeAreaView className="flex-1 bg-white px-5">

      {/* Top back button */}
      <View className="flex-row items-center mt-6">
        <BackToDeviceLogged />
        <Text className="text-lg font-semibold ml-4 text-gray-900">
          Select device
        </Text>
      </View>

      <View className="mt-6">
        <Text className="text-xl font-semibold text-gray-900">
          Select device to logout
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          Choose a device you want to log out from
        </Text>
      </View>

      <View className="mt-6">
        {devices.length === 0 ? (
          <Text className="text-center text-gray-400 mt-10">
            No devices logged in
          </Text>
        ) : (
          devices.map((device, index) => (
            <TouchableOpacity
              key={index}
              className="border border-gray-300 rounded-xl px-4 py-4 mb-3 bg-gray-100"
              onPress={() =>
                router.push({
                  pathname: "/Routes/poplogout",
                  params: { device },
                })
              }
            >
              <Text className="text-gray-800 text-base">
                {device}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </View>

    </SafeAreaView>
  );
}
