import { FC, useContext } from 'react';
import { TodosCtx } from '../store/todos-ctx';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: FC = () => {
  const {items, removeTodo} = useContext(TodosCtx);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
