import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import FlexExample from "./components/FlexExample";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Section4 from "./section-4";

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [goals, setGoals] = useState([{ text: "Learn react native" }]);
  const [showLayoutExample, setShowLayoutExample] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

  function addNewGoal(newGoal) {
    setGoals((goals) => goals.concat({ text: newGoal }));
  }

  function deleteGoal(goalIndex) {
    setGoals((goals) => goals.filter((_, index) => index !== goalIndex));
  }

  return <Section4 />;

  // return (
  //   <View style={styles.root}>
  //     <Header title="Goaliee" />
  //     <View style={styles.container}>
  //       <GoalForm
  //         isVisible={isAddMode}
  //         onHide={() => setIsAddMode(false)}
  //         onSubmit={addNewGoal}
  //       />
  //       <GoalList count={goals.length}>
  //         <FlatList
  //           data={goals}
  //           keyExtractor={(_, index) => index.toString()}
  //           renderItem={(itemData) => (
  //             <ListItem
  //               {...itemData.item}
  //               onDelete={() => deleteGoal(itemData.index)}
  //             />
  //           )}
  //         />
  //       </GoalList>
  //     </View>
  //     <View style={{ position: "absolute", bottom: 10, right: 10 }}>
  //       <Button onPress={() => setIsAddMode(true)} title={`Add`} />
  //     </View>
  //     {showLayoutExample && (
  //       <>
  //         <FlexExample />
  //         <Card />
  //       </>
  //     )}
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f3f4f4",
    height: "100%",
  },
  container: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "#729ed6",
    color: "#fff",
    padding: 20,
    marginBottom: 40,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "yellow",
    color: "#222",
    height: "100%",
  },
});
