import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-xl font-semibold text-black mb-8">
          Welcome to Identity Verification
        </Text>

        {/* Ensure navigation works */}
        <TouchableOpacity
          onPress={() => router.push('/email')} // Ensure the route exists
          className="px-6 py-3 bg-blue-500 rounded-lg"
        >
          <Text className="text-white font-bold">Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

