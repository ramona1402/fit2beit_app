import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from "./src/screens/LoginPage.js";
import HomePage from "./src/screens/HomePage.js";
import WorkoutsPage from "./src/screens/WorkoutsPage.js";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator ();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name ="Home" component={HomePage}/>
          <Stack.Screen name ="Workouts" component={WorkoutsPage}/>
        </Stack.Navigator>
    </NavigationContainer>
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

export default App;