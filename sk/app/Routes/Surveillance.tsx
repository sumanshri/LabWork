import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import CameraCard from "../components/CameraCard";
import NavBar from "../components/NavBar";
import { useRouter } from "expo-router";
import { getDevices } from "../utils/deviceStore";

type Camera = {
  id: number;
  name: string;
  streamUrl: string;
  alert: boolean;
  alertMsg: string;
};

export default function Surveillance() {
  const router = useRouter();
  const [cameras, setCameras] = useState<Camera[]>([]);

  useEffect(() => {
    const { cameras: cameraCount } = getDevices();

    const camList: Camera[] = Array.from({ length: cameraCount }).map(
      (_, i) => ({
        id: i + 1,
        name: `Camera ${i + 1}`,
        streamUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4", // replace with RTSP→HLS later
        alert: i % 2 === 0, // demo alert logic
        alertMsg: "Unauthorized movement detected",
      })
    );

    setCameras(camList);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cameras.map((cam) => (
          <CameraCard
            key={cam.id}
            name={cam.name}
            videoUri={cam.streamUrl}
            alert={cam.alert}
            onPress={() =>
              router.push({
                pathname: "/Routes/CameraAlertDetail",
                params: {
                  name: cam.name,
                  uri: cam.streamUrl,
                  alert: String(cam.alert),
                  alertMsg: cam.alertMsg,
                },
              })
            }
          />
        ))}
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 12,
  },
});
