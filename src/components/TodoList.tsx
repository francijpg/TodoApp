import React from "react";

interface TodoListProps {
  todos: Array<Todo>;
  toggleDone: ToggleDone;
  removeTodo: ToggleDone;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleDone,
  removeTodo,
}) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col" className="float-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          { todos.map((todo: Todo, index: number) => (
            <tr className="table-default" key={index}>
              <td style={{ textDecoration: todo.done ? "line-through" : "" }}>
                <p className="text-capitalize text-justify">{todo.name}</p>
              </td>
              <td className="float-right">
                <button
                  onClick={() => toggleDone(index)}
                  className="btn btn-outline-success badge-pill"
                >
                  {todo.done ? "☻" : "✔"}
                </button>
                <button
                  onClick={() => removeTodo(index)}
                  className="btn btn-outline-danger badge-pill"
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
