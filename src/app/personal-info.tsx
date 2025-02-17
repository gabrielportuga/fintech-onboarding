import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { email, address, city, postcode } = useLocalSearchParams(); // Preserve previous data

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");

  const handleContinue = () => {
    const userData = { email, address, city, postcode, fullName, username, dob };
    console.log("Final User Data:", userData);
    router.push({
      pathname: "/selfie",
      params: userData,
    });
    // Here, you can navigate to the next step or submit the data
  };

  return (
    <View className="flex-1 bg-white px-4 pt-12">
      <Text className="text-lg font-semibold text-black">Add your personal info</Text>
      <Text className="text-sm text-gray-500 mt-1">
        This info needs to be accurate with your ID document.
      </Text>

      {/* Full Name Input */}
      <View className="mt-6">
        <Text className="text-gray-700 mb-2">Full Name</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="Mr. Jhon Doe"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
      </View>

      {/* Username Input */}
      <View className="mt-4">
        <Text className="text-gray-700 mb-2">Username</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="@username"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </View>

      {/* Date of Birth Input */}
      <View className="mt-4">
        <Text className="text-gray-700 mb-2">Date of Birth</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="MM/DD/YYYY"
            keyboardType="numeric"
            value={dob}
            onChangeText={setDob}
          />
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`mt-10 py-4 rounded-xl ${
          fullName && username && dob ? "bg-gray-800" : "bg-gray-300"
        }`}
        disabled={!fullName || !username || !dob}
        onPress={handleContinue}
      >
        <Text className="text-center text-white font-semibold text-base">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
