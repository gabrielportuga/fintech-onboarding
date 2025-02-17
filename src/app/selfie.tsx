import { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Button, ActivityIndicator, StyleSheet } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Svg, { Ellipse } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [photo, setPhoto] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);

  // ✅ Debugging: Log permission status
  useEffect(() => {
    console.log("Camera Permission:", permission);
  }, [permission]);

  // ✅ Handle permission loading state
  if (permission === null) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-white mt-4">Loading camera permissions...</Text>
      </View>
    );
  }

  // ✅ Request permission if denied
  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-white mb-4">We need your permission to use the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  console.log("Permission granted, rendering camera..."); // ✅ Log before returning JSX

  return (
    <View style={styles.container}>
      {!photo ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.overlay}>
            <Svg height="100%" width="100%">
              <Ellipse
                cx="50%"
                cy="40%"
                rx="120"
                ry="170"
                stroke="white"
                strokeWidth="3"
                fill="transparent"
              />
            </Svg>
          </View>
          <View style={styles.instructions}>
            <Text style={styles.text}>
              Take your photo at arm's length. Make sure your whole face is visible.
            </Text>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity onPress={toggleCameraFacing} style={styles.flipButton}>
              <Ionicons name="camera-reverse" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.preview}>
          <Image source={{ uri: photo }} style={styles.image} resizeMode="cover" />
          <TouchableOpacity onPress={() => setPhoto(null)} style={styles.retakeButton}>
            <Text style={styles.retakeText}>Retake</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  instructions: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  controls: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  flipButton: {
    padding: 16,
    backgroundColor: "gray",
    borderRadius: 50,
  },
  preview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "75%",
  },
  retakeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "red",
    borderRadius: 10,
  },
  retakeText: {
    color: "white",
    fontSize: 18,
  },
});
