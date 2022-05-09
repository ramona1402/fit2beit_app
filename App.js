import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginPage from "./src/screens/LoginPage.js";
import HomePage from "./src/screens/HomePage.js";
import WorkoutsPage from "./src/screens/WorkoutsPage.js";

export default function App() {
  return (
    <View style={styles.container}>
      <WorkoutsPage></WorkoutsPage>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
