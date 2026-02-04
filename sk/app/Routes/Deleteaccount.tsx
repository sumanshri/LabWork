import { View, Text, SafeAreaView, Modal } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import YesBtn from "../components/buttons/yes";
import NoBtn from "../components/buttons/no";

export default function Deleteaccount() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const handleYes = () => {
    // 🔴 delete account logic here
    setVisible(false);
    router.replace("/Routes/Loginpage");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Modal transparent visible={visible} animationType="fade">
        <View className="flex-1 bg-black/40 items-center justify-center">
          <View className="bg-white w-4/5 rounded-2xl p-6">
            <Text className="text-base font-semibold text-center text-gray-900 mb-6">
              Are you sure you want to delete the account?
            </Text>

            <View className="flex-row justify-between">
              <NoBtn />
              <YesBtn onPress={handleYes} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
