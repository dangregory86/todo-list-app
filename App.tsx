import { useState } from "react";
import Task from "./components/Task";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TaskModel } from "./models/Task";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.key !== id);
    setTasks(newTasks);
  }

  function setComplete(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.key === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTaskHandler(taskText: string) {
    const randNum = Math.floor(Math.random() * 1000);
    const newTask: TaskModel = {
      key: randNum,
      taskString: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput addTaskHandler={addTaskHandler} />
      <View>
        <FlatList
          data={tasks}
          renderItem={(taskData) => {
            return (
              <Task
                task={taskData.item}
                deleteTask={deleteTask}
                setComplete={setComplete}
              />
            );
          }}
        />
        {tasks.length < 1 ? <Text>List of tasks</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },
});
