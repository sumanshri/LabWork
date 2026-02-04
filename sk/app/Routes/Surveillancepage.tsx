import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { NavBar } from "../components/NavBar";

export default function Surveillancepage() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-6">
          <Text className="text-white text-2xl font-bold mb-2">
            Surveillance
          </Text>
          <Text className="text-gray-400 mb-6">
            Live monitoring and activity overview
          </Text>

          {/* Camera Cards */}
          <View className="bg-zinc-900 rounded-2xl p-4 mb-4">
            <Text className="text-white font-semibold">
              Camera 1
            </Text>
            <Text className="text-gray-400 text-sm">
              Status: Online
            </Text>
          </View>

          <View className="bg-zinc-900 rounded-2xl p-4 mb-4">
            <Text className="text-white font-semibold">
              Camera 2
            </Text>
            <Text className="text-gray-400 text-sm">
              Status: Offline
            </Text>
          </View>

          <View className="bg-zinc-900 rounded-2xl p-4">
            <Text className="text-white font-semibold">
              Motion Detection
            </Text>
            <Text className="text-gray-400 text-sm">
              Last activity: 5 mins ago
            </Text>
          </View>
        </View>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
}
