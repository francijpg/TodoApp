import React, { useState, FormEvent } from "react";

interface TodoCreatorProps {
  addTodo: AddTodo;
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const handlerChange = (e: InputChangeElemEvent): void => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          autoFocus
          required
          value={newTodo}
          onChange={handlerChange}
          className="form-control"
          placeholder = "Something to do?"
        />
        <button
          type="submit"
          className="btn btn-success btn-block mt-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoCreator;
