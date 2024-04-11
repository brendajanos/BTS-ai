import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import LanguageDefinitionScreen from "./src/screens/LanguageDefinitionScreen";
import ChildDefinitionScreen from "./src/screens/ChildDefinitionScreen";
import TaleDetailsScreen from "./src/screens/TaleDetailsScreen";
import StoryScreen from "./src/screens/StoryScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="LanguageDefinitionScreen"
          component={LanguageDefinitionScreen}
        />
        <Stack.Screen
          name="ChildDetailsScreen"
          component={ChildDefinitionScreen}
        />
        <Stack.Screen
          name="ChildDefinitionScreen"
          component={ChildDefinitionScreen}
        />
        <Stack.Screen name="TaleDetailsScreen" component={TaleDetailsScreen} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
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
