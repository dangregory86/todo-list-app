import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TaskModel } from "../models/Task";

export default function Task(props: {
  task: TaskModel;
  deleteTask: Function;
  setComplete: Function;
}) {
  const { task, deleteTask, setComplete } = props;
  return (
    <View style={styles.outerContainer}>
      <Text
        style={
          task.completed ? styles.taskTextComplete : styles.taskTextIncomplete
        }>
        {task.taskString}
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.green]}
        onPress={() => setComplete(task.key)}>
        <Text style={styles.buttonText}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.red]}
        onPress={() => deleteTask(task.key)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    height: 40,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 5,
    marginHorizontal: 5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
  taskTextIncomplete: {
    flex: 3,
    height: "100%",
    textAlignVertical: "center",
  },
  taskTextComplete: {
    flex: 3,
    height: "100%",
    textAlignVertical: "center",
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    color: "#cccccc",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
});
