import { View, Text, StyleSheet } from "react-native";

interface SubtitleProps {
    children: string;
}

const Subtitle = ({children}: SubtitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#f5d2bc",
    borderBottomWidth: 2,
  },
});
