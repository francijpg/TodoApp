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
      {todos.map((t: Todo, i: number) => (
        <div key={i}>
          {/* <h3 style={{ textDecoration: t.done ? "line-through" : "" }}>
            {t.name}
          </h3>
          <button
            onClick={() => toggleDone(i)}
            className="btn btn-outline-success"
          >
            {t.done ? "TODO" : "DONE"}
          </button>
          <button
            onClick={() => removeTodo(i)}
            className="btn btn-outline-danger"
          >
            Delete
          </button> */}
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Task</th>
                <th className="float-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-default">
                <td style={{ textDecoration: t.done ? "line-through" : "" }}>
                  <p className="text-break text-capitalize">{t.name}</p>
                </td>
                <td className="float-right">
                  <button
                    onClick={() => toggleDone(i)}
                    className="btn btn-outline-success badge-pill"
                  >
                    {t.done ? "TODO" : "DONE"}
                  </button>
                  <button
                    onClick={() => removeTodo(i)}
                    className="btn btn-outline-danger badge-pill ml-1"
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
