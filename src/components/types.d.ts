type Todo = {
  name: string;
  done: boolean;
};

type AddTodo = (newTodo: string) => void;

type ToggleDone = (selectedTodo: Todo) => void;

type ButtonElemEvent = React.FormEvent<HTMLButtonElement>;
type InputChangeElemEvent = React.ChangeEvent<HTMLInputElement>