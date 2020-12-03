import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

const imageSource =
  "https://images.unsplash.com/photo-1606822350112-b9e3caea2461?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";

export default function GameOverScreen({ gameRounds, userChoice, onRestart }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          //   source={require("../assets/success.png")}
          source={{ uri: imageSource }}
        />
      </View>
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultText}>
          Your guessed user's choice{" "}
          <Text style={styles.highlight}>{userChoice}</Text> in{" "}
          <Text style={styles.highlight}>{gameRounds}</Text> rounds
        </Text>
      </View>

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
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 150,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultTextContainer: {
    margin: "auto",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  resultText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "lato-bold",
    fontWeight: "bold",
  },
  highlight: {
    color: "orange",
  },
});
