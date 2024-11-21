import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { RootStackParamList } from "./types/RootStackParamList";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/favorites-context";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

export default function App() {
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e5a27b",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favorites",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <View style={styles.root}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          style="light"
          backgroundColor="transparent"
          translucent={true}
        />
        <FavoritesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: {
                  backgroundColor: "#3f2f25",
                },
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
                // options={({ route, navigation }) => {
                //   if (!route.params) {
                //     return {
                //       title: "Meals Overview",
                //     };
                //   }
                //   const catId = route.params.categoryId;
                //   return {
                //     title: catId,
                //   };
                // }}
              />
              <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={{
                  title: "About the Meal",
                }}
                // options={{
                //   headerRight: () => {
                //     return (
                //       <Button title='Tap me!' />
                //     )
                //   }
                // }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#351401",
  },
});
