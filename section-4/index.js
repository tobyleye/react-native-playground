import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const loadFont = () => {
  return Font.loadAsync({
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-light": require("./assets/fonts/Lato-Thin.ttf"),
  });
};

export default function Root() {
  const [userChoice, setUserChoice] = useState(null);
  const [gameRounds, setGameRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading
      startAsync={loadFont}
      onFinish={() => {
        console.log("font loaded");
        setFontLoaded(true);
      }}
      onError={(error) => console.log("Error occured:", error)}
    />;
  }
  const restart = () => {
    setUserChoice(null);
    setGameRounds(0);
  };

  const renderScreen = () => {
    let content = (
      <StartGameScreen onStartGame={(choice) => setUserChoice(choice)} />
    );

    if (userChoice && gameRounds === 0) {
      content = (
        <GameScreen
          userChoice={userChoice}
          onGameOver={(rounds) => setGameRounds(rounds)}
        />
      );
    } else if (gameRounds > 0) {
      content = (
        <GameOverScreen
          userChoice={userChoice}
          gameRounds={gameRounds}
          onRestart={restart}
        />
      );
    }
    return content;
  };

  return (
    <View style={styles.root}>
      <Header title="Guess a Number!" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
