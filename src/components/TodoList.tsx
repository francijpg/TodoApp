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
          {todos.map((t: Todo, i: number) => (
            <tr className="table-default" key={i}>
              <td style={{ textDecoration: t.done ? "line-through" : "" }}>
                <p className="text-capitalize text-justify">{t.name}</p>
              </td>
              <td className="float-right">
                <button
                  onClick={() => toggleDone(i)}
                  className="btn btn-outline-success badge-pill"
                >
                  {t.done ? "☻" : "✔"}
                </button>
                <button
                  onClick={() => removeTodo(i)}
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
