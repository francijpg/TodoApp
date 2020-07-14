import React, { useState } from "react";
import TodoCreator from "./components/TodoCreator";
import { TodoList } from "./components/TodoList";
import { initialTodos } from "./components/initialTodos";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { name: newTodo, done: false }]);
  };

  const toggleDone: ToggleDone = (indexTodo) => {
    const newsTodos: Todo[] = [...todos];
    newsTodos[indexTodo].done = !newsTodos[indexTodo].done;
    setTodos(newsTodos);
  };

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
              <TodoList todos={todos} toggleDone={toggleDone}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
