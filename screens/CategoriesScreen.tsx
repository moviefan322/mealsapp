import { View, Text, FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/category";

const CategoriesScreen = () => {
  const renderCategory = (item: Category) => {
    return <CategoryGridTile title={item.title} color={item.color} />;
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
