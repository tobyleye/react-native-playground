import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import MainButton from "../components/Button";
import RoundButton from "../components/RoundButton";

const Backdrop = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.backdrop}></View>
    </TouchableWithoutFeedback>
  );
};

export default function Confirmation({ chosenNumber, onContinue, onHide }) {
  return (
    <View style={styles.container}>
      <Backdrop onPress={onHide} />
      <View style={styles.content}>
        <Text style={styles.text}>Choosen Number: {chosenNumber}</Text>
        {/* <Button title="Press to continue" color="blue" onPress={onContinue} /> */}
        <MainButton onPress={onContinue}>Press to continue</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "#fff",
    zIndex: 100,
    padding: 20,
    textAlign: "center",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,.56)",
  },
});
