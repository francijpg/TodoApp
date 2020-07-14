import React, { useState } from "react";
// import { TodoList } from "./TodoList";

// interface ITask {
//   name: string;
//   done: boolean;
// }

interface TodoCreatorProps {
  addTodo: AddTodo;
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  // const [newTask, setNewTask] = useState<string>("");
  // const [tasks, setTasks] = useState<ITask[]>([]);

  const handlerSubmit = (e: ButtonElemEvent): void => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const handlerChange = (e: InputChangeElemEvent): void => {
    setNewTodo(e.target.value);
  };

  // const addTask = (name: string): void => {
  //   const newTasks: ITask[] = [...tasks, { name, done: false }];
  //   setTasks(newTasks);
  // };

  // const toogleDoneTast = (i: number) => {
  //   const newsTasks: ITask[] = [...tasks];
  //   newsTasks[i].done = !newsTasks[i].done;
  //   setTasks(newsTasks);
  // };

  // const removeTask = (i: number): void => {
  //   const newTasks: ITask[] = [...tasks];
  //   newTasks.splice(i, 1);
  //   setTasks(newTasks);
  // };

  return (
    <div>
      <form>
        <input
          type="text"
          autoFocus
          required
          value={newTodo}
          onChange={handlerChange}
          className="form-control"
        />
        <button
          type="submit"
          onClick={handlerSubmit}
          className="btn btn-success btn-block mt-2"
        >
          Save
        </button>
      </form>
      {/* <TodoList todos={tasks} /> */}
      {/* {tasks.map((t: ITask, i: number) => (
                <div key={i}>
                  <h1 style={{ textDecoration: t.done ? "line-through" : "" }}>
                    {t.name}
                  </h1>
                  <button onClick={() => toogleDoneTast(i)} className="btn btn-outline-success">
                    {t.done ? "TODO" : "DONE"}
                  </button>
                  <button
                    onClick={() => removeTask(i)}
                    className="btn btn-outline-danger"
                  >Delete
                  </button>
                </div>
              ))} */}
    </div>
  );
};

export default TodoCreator;
