import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function GameOverScreen({ gameRounds, userChoice, onRestart }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game over</Text>
      <Text style={styles.text}>Rounds: {gameRounds}</Text>
      <Text style={styles.text}>User Choice: {userChoice}</Text>
      <Button title="Restart" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginHorizontal: 9,
  },
});
