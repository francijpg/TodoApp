import React from "react";

interface TodoHeaderProps {
  todos: Array<Todo>;
}

export const TodoHeader: React.FC<TodoHeaderProps> = ({ todos }) => {
  return (
    <>
      <h2 className="text-center">TODO APP</h2>
      <p className="text-white text-center">
        {todos.filter((t) => !t.done).length} pending tasks to do
      </p>
    </>
  );
};
