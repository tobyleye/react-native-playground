import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

export default function Button({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View accessibilityRole="button" style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
  },
});
