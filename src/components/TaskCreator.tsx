import React, { useState } from "react";

type FormElemEvent = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

export default function TaskCreator() {

  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handlerSubmit = (e: FormElemEvent): void => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
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
      {tasks.map((t: ITask, i: number) => (
        <h1 key={i}>{t.name}</h1>
      ))}
    </div>
  );
}
