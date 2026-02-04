import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CameraCard from "../components/CameraCard";
import { useRouter } from "expo-router";

export default function Surveillance() {
  const router = useRouter();

  const cameras = [
    {
      name: "Camera 2",
      uri: "https://www.w3schools.com/html/mov_bbb.mp4",
      alert: true,
    },
    {
      name: "Camera 1",
      uri: "https://www.w3schools.com/html/movie.mp4",
      alert: false,
    },
    {
      name: "Camera 3",
      uri: "https://www.w3schools.com/html/mov_bbb.mp4",
      alert: false,
    },
    {
      name: "Camera 4",
      uri: "https://www.w3schools.com/html/movie.mp4",
      alert: false,
    },
  ];

  // Alert videos first
  const sortedCameras = [...cameras].sort(
    (a, b) => Number(b.alert) - Number(a.alert)
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {sortedCameras.map((cam, index) => (
          <CameraCard
            key={index}
            name={cam.name}
            videoUri={cam.uri}
            alert={cam.alert}
            onPress={() =>
              router.push({
                pathname: "/Routes/CameraAlertDetail",
                params: { name: cam.name, uri: cam.uri },
              })
            }
          />
        ))}
      </ScrollView>
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
