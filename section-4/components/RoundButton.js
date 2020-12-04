import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function RoundButton({ children, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View accessibilityRole="button" style={styles.roundButton}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const size = 100;
const styles = StyleSheet.create({
  roundButton: {
    width: size,
    height: size,
    margin: "auto",
    borderRadius: size / 2,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
