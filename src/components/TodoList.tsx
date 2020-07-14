import React from "react";

interface TodoListProps {
  todos: Array<Todo>;
  toggleDone: ToggleDone;
  removeTodo: ToggleDone;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleDone, removeTodo }) => {

  return (
    <div>
      {todos.map((t: Todo, i: number) => (
        
        <div key={i}>
          <h3 style={{ textDecoration: t.done ? "line-through" : "" }}>
            {t.name}
          </h3>
          <button
            onClick={() => toggleDone(i) }
            className="btn btn-outline-success"
          >
            {t.done ? "TODO" : "DONE"}
          </button>
          <button
            onClick={() => removeTodo(i)}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
