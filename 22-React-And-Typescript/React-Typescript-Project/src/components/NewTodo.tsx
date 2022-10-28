import { FC, FormEvent, useContext, useRef } from 'react';
import { TodosCtx } from '../store/todos-ctx';
import classes from './NewTodo.module.css';

const NewTodo: FC = () => {

  const { addTodo } = useContext(TodosCtx);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (ev: FormEvent) => {
    ev.preventDefault();

    const enteredText = inputRef.current?.value || '';

    if (enteredText?.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='add-todo'>Todo text</label>
      <input type='text' id='add-todo' ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
