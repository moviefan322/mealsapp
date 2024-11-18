import { View, Text, FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/category";

interface CategoriesScreenProps {
  navigation: any;
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderCategory = (itemData: Category) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.id,
      });
    };
    return (
      <View style={styles.container}>
        <CategoryGridTile
          title={itemData.title}
          color={itemData.color}
          onPress={pressHandler}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategory(item)}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#351401",
  },
});
