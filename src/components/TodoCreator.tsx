import React, { useState } from "react";

interface TodoCreatorProps {
  addTodo: AddTodo;
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handlerSubmit = (e: ButtonElemEvent): void => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const handlerChange = (e: InputChangeElemEvent): void => {
    setNewTodo(e.target.value);
  };

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
          placeholder = "Something to do?"
        />
        <button
          type="submit"
          onClick={handlerSubmit}
          className="btn btn-success btn-block mt-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoCreator;
