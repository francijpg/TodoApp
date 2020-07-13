import React, { useState } from "react";

type FormElemEvent = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

const TaskCreator: React.FC = () => {
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

  const toogleDoneTast = (i: number) => {
    const newsTasks: ITask[] = [...tasks];
    newsTasks[i].done = !newsTasks[i].done;
    setTasks(newsTasks);
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
        <div key={i}>
          <h1 style={{ textDecoration: t.done ? "line-through" : "" }}>
            {t.name}
          </h1>
          <button onClick={() => toogleDoneTast(i)}>
            {t.done ? "TODO" : "DONE"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskCreator;