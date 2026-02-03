import { View, Text } from "react-native";

type Props = {
  devices: string[];
};

export default function OtherDevice({ devices }: Props) {
  return (
    <>
      {devices.map((device, index) => (
        <View
          key={index}
          className="border border-gray-300 rounded-xl px-4 py-4 bg-gray-100 mb-3"
        >
          <Text className="text-gray-800 text-base">
            {device}
          </Text>
        </View>
      ))}
    </>
  );
}
