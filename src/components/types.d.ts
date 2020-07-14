type Todo = {
  name: string;
  done: boolean;
};

type AddTodo = (newTodo: string) => void;

type ToggleDone = (indexTodo: number) => void;

type ButtonElemEvent = React.FormEvent<HTMLButtonElement>;
type InputChangeElemEvent = React.ChangeEvent<HTMLInputElement>