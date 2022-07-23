import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { useState } from "react";

export default function TaskInput(props: {
  taskInputHandler: Function;
  currentText: any;
  addTaskHandler: Function;
}) {
  const [currentText, setCurrentText] = useState("");
  const { addTaskHandler } = props;

  function taskInputHandler(enteredText: string) {
    setCurrentText(enteredText);
  }

  const addGoal = () => {
    if (currentText === "") {
      return;
    }
    addTaskHandler(currentText);
    setCurrentText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.newTaskRow}>
      <TextInput
        placeholder='Your todo item'
        style={styles.textInput}
        onChangeText={(text: string) => taskInputHandler(text)}
        value={currentText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={(e: GestureResponderEvent) => addGoal()}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  newTaskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 50,
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    borderRadius: 5,
    height: "100%",
  },
  button: {
    flex: 1,
    padding: 5,
    backgroundColor: "cornflowerblue",
    marginHorizontal: 5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});
