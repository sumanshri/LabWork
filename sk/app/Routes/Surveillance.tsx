import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CameraCard from "../components/CameraCard";
import NavBar from "../components/NavBar";
import { useRouter } from "expo-router";

export default function Surveillance() {
  const router = useRouter();

  const cameras = [
    { name: "Camera 1", uri: "https://www.w3schools.com/html/movie.mp4", alert: false },
    { name: "Camera 2", uri: "https://www.w3schools.com/html/mov_bbb.mp4", alert: true },
  ];
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cameras.map((cam, i) => (
          <CameraCard
            key={i}
            name={cam.name}
            videoUri={cam.uri}
            alert={cam.alert}
            onPress={() =>
              router.push({
                pathname: "/Routes/CameraAlertDetail",
                params: { ...cam, alert: cam.alert.toString() },
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
  container: { flex: 1, backgroundColor: "#F8FAFC", padding: 12 },
});
