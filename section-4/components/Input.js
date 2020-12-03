import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ style, ...props }) {
  return (
    <TextInput
      showSoftInputOnFocus={true}
      style={StyleSheet.compose(styles.input, style)}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    height: 30,
  },
});
