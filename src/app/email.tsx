import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const EmailScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 bg-white px-4 pt-12">
      <StatusBar style="dark" />

      {/* Header */}
      <Text className="text-lg font-semibold text-black">Add your email</Text>
      <Text className="text-sm text-gray-500 mt-1">
        This info needs to be accurate with your ID document.
      </Text>

      {/* Email Input */}
      <View className="mt-6">
        <Text className="text-gray-700 mb-2">Email</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="name@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`mt-10 py-4 rounded-xl ${
          email ? "bg-gray-800" : "bg-gray-300"
        }`}
        disabled={!email}
        onPress={() => router.push({ pathname: "/address", params: { email } })}
      >
        <Text className="text-center text-white font-semibold text-base">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailScreen;
