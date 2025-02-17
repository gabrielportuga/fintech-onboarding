import { View, Text, Image } from 'react-native';

export default function VerificationScreen() {
  return (
    <View className="flex-1 justify-center items-center p-6 bg-white">
      <Text className="text-xl font-semibold mb-4">ID Verification in Progress...</Text>
      <Image source={{ uri: 'https://via.placeholder.com/200' }} style={{ width: 200, height: 200 }} />
    </View>
  );
}
