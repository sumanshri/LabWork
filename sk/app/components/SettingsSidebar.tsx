import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import ProfileBtn from "./buttons/profilebtn";
import EditInputBtn from "./buttons/editinput";
import AddaccountBtn from "./buttons/Addaccountbtn";
import DeleteaccountBtn from "./buttons/Deleteaccountbtn";
import LogoutBtn from "./buttons/Logoutbtn";
import HelpBtn from "./buttons/Help";
import Deviceloggedbtn from "./buttons/Deviceloggedbtn";

const { width } = Dimensions.get("window");
const W = width * 0.45;
const NAVBAR_HEIGHT = 60;

export default function SettingsSidebar({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const slide = useRef(new Animated.Value(W)).current;
  const [shouldRender, setShouldRender] = useState(visible);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      Animated.timing(slide, {
        toValue: 0,
        duration: 260,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slide, {
        toValue: W,
        duration: 260,
        useNativeDriver: true,
      }).start(() => {
        setShouldRender(false); // ✅ unmount AFTER animation
      });
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Overlay */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: NAVBAR_HEIGHT,
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: 40,
        }}
      />

      {/* Sidebar */}
      <Animated.View
        style={{
          width: W,
          transform: [{ translateX: slide }],
          position: "absolute",
          right: 0,
          top: 0,
          bottom: NAVBAR_HEIGHT,
          zIndex: 50,
        }}
        className="bg-zinc-900"
      >
        {/* Header */}
        <View className="bg-zinc-800 px-4 pt-12 pb-5 border-b border-zinc-700">
          <View className="flex-row justify-between items-center mb-3">
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              className="w-14 h-14 rounded-full border border-white/20"
            />

            <TouchableOpacity
              onPress={() => setDark(!dark)}
              className="bg-zinc-700 p-2 rounded-full"
            >
              <Ionicons
                name={dark ? "moon" : "sunny"}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <Text className="text-white font-semibold text-base">
            Username
          </Text>
          <Text className="text-gray-400 text-xs">
            Logged in
          </Text>
        </View>

        {/* Menu */}
        <View className="mt-2 px-1">
          <ProfileBtn onClose={onClose} />
          <Deviceloggedbtn onClose={onClose} />
          <EditInputBtn onClose={onClose} />
          <AddaccountBtn onClose={onClose} />

          <DeleteaccountBtn onClose={onClose} />
          <LogoutBtn onClose={onClose} />

          <View className="h-px bg-zinc-700 mx-3 my-3" />

          <HelpBtn onClose={onClose} />
        </View>
      </Animated.View>
    </>
  );
}
