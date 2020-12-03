import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ children, style = {} }) {
  return <View style={StyleSheet.compose(style.card, style)}>{children}</View>;
}

const style = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowRadius: 10,
    padding: 20,
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
});
