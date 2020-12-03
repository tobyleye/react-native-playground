import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, Text, View, Alert } from "react-native";
import Card from "../components/Card";
import Confirmation from "../components/Confirmation";
import Input from "../components/Input";
import Colors from "../constants/colors";

export default function StartGameScreen({ onStartGame }) {
  const [guess, setGuess] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");

  const resetInput = () => {
    setGuess("");
  };

  const onConfirm = () => {
    const value = parseInt(guess);
    if (isNaN(value) || value <= 0 || value > 99) {
      console.log("invalid number");
      Alert.alert("Invalid number!", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    setSelectedNumber(value);
    Keyboard.dismiss();
    resetInput();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.startText}>Start a new game!</Text>
      <Card>
        <View style={styles.inputContainer}>
          <Text>Enter a number</Text>
          <Input
            value={guess}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onBlur={() => {
              Keyboard.dismiss();
            }}
            onChangeText={(text) => setGuess(text.replace(/[^0-9]/, ""))}
          />

          <View style={styles.btnContainer}>
            <View style={styles.btnwrap}>
              <Button
                title="cancel"
                color={Colors.secondary}
                onPress={() => setGuess("")}
              />
            </View>

            <View style={styles.btnwrap}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={onConfirm}
              />
            </View>
          </View>
        </View>
      </Card>
      {selectedNumber ? (
        <Confirmation
          onHide={() => setSelectedNumber(null)}
          chosenNumber={selectedNumber}
          onContinue={() => onStartGame(selectedNumber)}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    textAlign: "center",
    alignItems: "center",
  },
  startText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    marginVertical: 20,
    width: 50,
    textAlign: "center",
  },
  inputContainer: {
    alignItems: "center",
    textAlign: "center",
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginHorizontal: "auto",
  },
  btnwrap: {
    width: "45%",
    textTransform: "uppercase",
    fontSize: 5,
  },
});
