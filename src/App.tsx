import React from "react";
import TaskCreator from "./components/TaskCreator";
import { TodoList } from "./components/TodoList";

const todos: Array<Todo> = []

function App() {
  return (
    <div>
      <TaskCreator />
      <TodoList todo={todos[0]} />
    </div>
  );
}

export default App;
