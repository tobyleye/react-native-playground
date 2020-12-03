import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.cardImg} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>Hello world! This is my title</Text>
        <Text style={styles.subtitle}>And this is my subtitle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 3,
  },
  cardImg: {
    height: 50,
    width: 50,
    backgroundColor: "rgb(116, 116, 250)",
    marginRight: 20,
    borderRadius: 3,
  },
  cardBody: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
  },
});
