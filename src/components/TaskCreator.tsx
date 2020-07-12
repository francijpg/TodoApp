import React, { useState } from "react";

export default function TaskCreator() {
  type FormElemEvent = React.FormEvent<HTMLFormElement>;

  const [newTask, setNewTask] = useState<string>("");

  const handlerSubmit = (e: FormElemEvent): void => {
    e.preventDefault();
    console.log(newTask);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          autoFocus
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}
