import { createContext, FC, ReactNode, useState } from 'react';
import Todo from '../models/todo';

type Props = {
  children?: ReactNode;
};

type TodosCtxObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosCtx = createContext<TodosCtxObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosCtxProvider: FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const ctxValue: TodosCtxObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosCtx.Provider value={ctxValue}>{props.children}</TodosCtx.Provider>
  );
};

export default TodosCtxProvider;
