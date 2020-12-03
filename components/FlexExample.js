import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Box = ({ color, label }) => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        border: `1px solid ${color}`,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Text>{label}</Text>
    </View>
  );
};

export default function FlexExample() {
  const colors = ["blue", "green", "red"];
  const [direction, setDirection] = useState(0);
  const directions = ["row", "column", "row-reverse", "column-reverse"];

  const boxesContainerStyle = {
    flexDirection: directions[direction],
  };

  return (
    <View style={styles.container}>
      <Text>Flexbox Example</Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        {directions.map((direction, index) => (
          <View style={{ marginRight: 5, marginBottom: 5, flex: 1 }}>
            <Button title={direction} onPress={() => setDirection(index)} />
          </View>
        ))}
      </View>
      <View style={boxesContainerStyle}>
        {colors.map((color, index) => (
          <Box key={color} color={color} label={index + 1} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  boxesContainer: {
    flexDirection: "row",
  },
  box: {
    width: 80,
    height: 80,
  },
});

console.log(styles.box);
