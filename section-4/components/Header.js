import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "rolling-candy",
  },
});
