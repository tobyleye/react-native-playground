import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function GoalList({ children, count }) {
  if (!count) {
    return (
      <View style={styles.emptyRoot}>
        <Text style={styles.text}>Empty Goals</Text>
      </View>
    );
  }
  return children;
}

const styles = StyleSheet.create({
  emptyRoot: {
    paddingVertical: 50,
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 18,
    color: "#aaa",
  },
});
