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
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "lato-bold",
  },
});
