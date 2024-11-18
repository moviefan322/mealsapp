import { View, Text, Image, StyleSheet } from "react-native";
// import { useRoute, RouteProp } from "@react-navigation/native";
// import { RootStackParamList } from "../types/RootStackParamList";
import { MEALS } from "../data/dummyData";

// type MealDetailRouteProp = RouteProp<RootStackParamList, "MealDetail">;

interface MealDetailScreenProps {
  route: any;
}

const MealDetailScreen = ({ route }: MealDetailScreenProps) => {
  // const route = useRoute<MealDetailRouteProp>();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found</Text>
      </View>
    );
  }
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View></View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;
