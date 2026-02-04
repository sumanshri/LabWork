import { View, Text } from "react-native";

type Props = {
  deviceName: string;
};

export default function UserDevice({ deviceName }: Props) {
  return (
    <View className="border border-gray-300 rounded-xl px-4 py-4 bg-gray-100">
      <Text className="text-gray-800 text-base">
        {deviceName}
      </Text>
    </View>
  );
}
