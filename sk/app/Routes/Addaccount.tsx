import React from "react";
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

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Addaccount() {
  // Bottom sheet visible less than half initially
  const translateY = useSharedValue(SCREEN_HEIGHT * 0.7);
  const startY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart((event) => {
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateY.value = Math.max(0, startY.value + event.translationY);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT / 2) {
        translateY.value = withSpring(SCREEN_HEIGHT * 0.7);
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Title */}
      <View className="mt-6 items-center">
        <Text className="text-lg font-semibold text-gray-900">
          Add account
        </Text>
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
        {/* Handle ONLY is draggable */}
        <GestureDetector gesture={panGesture}>
          <View>
            <Handle />
          </View>
        </GestureDetector>

        <Text className="text-base font-semibold text-gray-900 mb-4">
          Add account +
        </Text>

        <ExistingPage />
        <NewAccount />
      </Animated.View>
    </SafeAreaView>
  );
}
