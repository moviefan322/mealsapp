import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.root}>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "#24180f" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Meal Categories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});

