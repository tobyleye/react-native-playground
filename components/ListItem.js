import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ListItem({ text, onDelete }) {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
