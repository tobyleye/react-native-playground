import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

export default function GoalForm({ isVisible, onSubmit, onHide }) {
  const [newGoal, setNewGoal] = useState("");
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      submitAndClear();
    }
  };
  const submitAndClear = () => {
    if (!newGoal) return;
    onSubmit(newGoal);
    setNewGoal("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Course Goal..."
          onChangeText={(text) => setNewGoal(text)}
          value={newGoal}
          onKeyPress={onKeyPress}
          style={styles.textInput}
        />
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "45%" }}>
            <Button title="Add goal" onPress={submitAndClear} />
          </View>

          <View style={{ width: "45%" }}>
            <Button color="red" title="Cancel" onPress={onHide} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    width: "100%",
    marginRight: 15,
    borderRadius: 3,
    marginBottom: 8,
  },
});
