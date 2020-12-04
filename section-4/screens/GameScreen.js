import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

function generateRandomNumberBetween(min, max, ignore) {
  const randomNo = min + Math.floor(Math.random() * (max - min));
  return randomNo === ignore
    ? generateRandomNumberBetween(min, max, ignore)
    : randomNo;
}

export default function GameScreen({ userChoice, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumberBetween(1, 99)
  );
  const [rounds, setRounds] = useState(0);

  const min = useRef(1);
  const max = useRef(99);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice]);

  const hint = (direction) => {
    if (
      (direction === "lower" && userChoice > currentGuess) ||
      (direction === "higher" && userChoice < currentGuess)
    ) {
      console.log("You are a liar");
      Alert.alert("Don't Lie", "Doesn't cost you anything to tell the truth", [
        { text: "cancel", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      max.current = currentGuess;
    } else if (direction === "higher") {
      min.current = currentGuess;
    }
    const newGuess = generateRandomNumberBetween(
      min.current,
      max.current,
      currentGuess
    );
    // replace current guess with new guess
    setCurrentGuess(newGuess);
    setRounds((curRound) => curRound + 1);
  };

  return (
    <View style={styles.root}>
      <View style={styles.guessContainer}>
        <Text style={styles.mt10}>Oponent's Guess</Text>
        <NumberContainer style={styles.mt10}>{currentGuess}</NumberContainer>
      </View>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={hint.bind(this, "lower")} />
        <Button title="GREATER" onPress={hint.bind(this, "higher")} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  guessContainer: {
    textAlign: "center",
  },
  mt10: {
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "auto",
    width: 200,
    marginTop: 10,
  },
});
