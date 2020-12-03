import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ children, style = {} }) {
  return <View style={StyleSheet.compose(styles.card, style)}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowRadius: 10,
    padding: 20,
    width: "100%",
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
});
