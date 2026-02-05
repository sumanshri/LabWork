// app/Routes/Addaccount.tsx

import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import ExistingPage from "../components/buttons/existingpage";
import NewAccount from "../components/buttons/newaccount";
import Handle from "../components/Handle";
import BackToHome from "../components/buttons/backtohome";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const SHEET_HEIGHT = SCREEN_HEIGHT * 0.35;

export default function Addaccount() {
  // ✅ START VISIBLE
  const translateY = useSharedValue(SHEET_HEIGHT);
  const startY = useSharedValue(0);

  // ✅ smooth settle animation
  useEffect(() => {
    translateY.value = withSpring(0);
  }, []);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateY.value = Math.max(
        0,
        startY.value + event.translationY
      );
    })
    .onEnd(() => {
      translateY.value =
        translateY.value > SHEET_HEIGHT / 2
          ? withSpring(SHEET_HEIGHT)
          : withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 mt-6">
        <BackToHome />

        <Text className="flex-1 text-center text-lg font-semibold text-gray-900">
          Add account
        </Text>

        {/* Spacer for symmetry */}
        <View className="w-6" />
      </View>

      {/* Bottom Sheet */}
      <Animated.View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "#F3F3F3",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 20,
          },
          animatedStyle,
        ]}
      >
        <GestureDetector gesture={panGesture}>
          <View>
            <Handle />
          </View>
        </GestureDetector>

        <Text className="text-base font-semibold text-gray-900 mb-4">
          Add account +
        </Text>

        {/* ✅ ALWAYS VISIBLE */}
        <ExistingPage />
        <NewAccount />
      </Animated.View>
    </SafeAreaView>
  );
}
