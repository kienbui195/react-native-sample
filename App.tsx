import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNote from "./screens/CreateNote";
import Notes from "./screens/ListNotes";
import ContextProvider from "./hook";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Notes} />
          <Stack.Screen name="Create" component={CreateNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
