import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ViewEdit from "./screens/ViewEdit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name="Edit"
          component={ViewEdit}
          options={{
            title: "Edit something",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
