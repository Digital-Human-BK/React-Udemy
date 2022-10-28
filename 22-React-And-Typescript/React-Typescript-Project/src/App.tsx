import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosCtxProvider from './store/todos-ctx';

function App() {
  return (
    <TodosCtxProvider>
      <NewTodo />
      <Todos />
    </TodosCtxProvider>
  );
}

export default App;
