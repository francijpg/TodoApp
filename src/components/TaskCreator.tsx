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
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">TODO LIST</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handlerSubmit}>
                <input
                  type="text"
                  autoFocus
                  required
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="form-control"
                />
                <button className="btn btn-success btn-block mt-2">Save</button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCreator;
