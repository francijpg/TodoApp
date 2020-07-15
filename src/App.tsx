import React, { useState, useEffect } from "react";
import TodoCreator from "./components/TodoCreator";
import { TodoList } from "./components/TodoList";
import { initialTodos } from "./components/initialTodos";
import { TodoHeader } from "./components/TodoHeader";

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

  const removeTodo: ToggleDone = (indexTodo) => {
    const newTodos: Todo[] = [...todos];
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    let data: string = localStorage.getItem("todos") as string;
    if (data !== "[]") {
      setTodos(JSON.parse(data));
    } else {
      setTodos(initialTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <TodoHeader todos={todos}/>
            </div>
            <div className="card-body">
              <TodoCreator addTodo={addTodo} />
              <TodoList
                todos={todos}
                toggleDone={toggleDone}
                removeTodo={removeTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
