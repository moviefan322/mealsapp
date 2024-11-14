// GeneralStatusBarColor.js
import React from "react";
import { View, StatusBar, StyleSheet, Platform } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

interface GeneralStatusBarColorProps {
  backgroundColor: string;
}

const GeneralStatusBarColor = ({
  backgroundColor,
}: GeneralStatusBarColorProps) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} barStyle='light-content' />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default GeneralStatusBarColor;
