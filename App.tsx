import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

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
          <Stack.Navigator>
            <Stack.Screen name="MealCategories" component={CategoriesScreen} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
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
