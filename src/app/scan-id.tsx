import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ScanIDScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center p-6 bg-white">
      <Text className="text-xl font-semibold mb-4">Scan your ID</Text>
      <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded" onPress={() => router.push('/verification')}>
        <Text className="text-white text-lg">Scan ID</Text>
      </TouchableOpacity>
    </View>
  );
}
