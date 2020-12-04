import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({ children, style }) {
  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  text: {
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 4,
    fontSize: 20,
    fontWeight: "500",
  },
});
