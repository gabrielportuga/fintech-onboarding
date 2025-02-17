import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function AddressScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams(); // Get email from previous screen

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleContinue = () => {
    const userData = { email, address, city, postcode };
    console.log("User Data:", userData);
    router.push({
      pathname: "/personal-info",
      params: { email, address, city, postcode },
    });
    // Navigate to next step or handle the data
  };

  return (
    <View className="flex-1 bg-white px-4 pt-12">
      <Text className="text-lg font-semibold text-black">Home address</Text>
      <Text className="text-sm text-gray-500 mt-1">
        This info needs to be accurate with your ID document.
      </Text>

      {/* Address Input */}
      <View className="mt-6">
        <Text className="text-gray-700 mb-2">Address Line</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="Mr. Jhon Doe"
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </View>

      {/* City Input */}
      <View className="mt-4">
        <Text className="text-gray-700 mb-2">City</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="City, State"
            value={city}
            onChangeText={setCity}
          />
        </View>
      </View>

      {/* Postcode Input */}
      <View className="mt-4">
        <Text className="text-gray-700 mb-2">Postcode</Text>
        <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
          <TextInput
            className="flex-1 text-base"
            placeholder="Ex: 00000"
            keyboardType="number-pad"
            value={postcode}
            onChangeText={setPostcode}
          />
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`mt-10 py-4 rounded-xl ${
          address && city && postcode ? "bg-gray-800" : "bg-gray-300"
        }`}
        disabled={!address || !city || !postcode}
        onPress={handleContinue}
      >
        <Text className="text-center text-white font-semibold text-base">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
