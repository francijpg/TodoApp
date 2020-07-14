import React, { useState } from "react";
import TodoCreator from "./components/TodoCreator";
import { TodoList } from "./components/TodoList";

const todosMockUp: Array<Todo> = [{ name: "hola", done: false }];

function App() {
  const [todos, setTodos] = useState<Array<Todo>>(todosMockUp);

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { name: newTodo, done: false }]);
  };

  // const toggleDone: ToggleDone = (i:number): void => {
  //   const newsTasks: Todo[] = [...todos];
  //   newsTasks[i].done = !newsTasks[i].done;
  //   setTodos(newsTasks);
  // };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">TODO LIST</h2>
            </div>
            <div className="card-body">
              <TodoCreator addTodo={addTodo} />
              <TodoList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
