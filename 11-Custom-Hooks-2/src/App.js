import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/use-fetch';

const DB_URL =
  'https://tasks-2fbc5-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

function App() {
  console.log('Loop test');
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useFetch();

  useEffect(() => {
    const transformTasks = (tasksData) => {
      const loadedTasks = [];

      for (const taskKey in tasksData) {
        loadedTasks.push({ id: taskKey, text: tasksData[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks({url: DB_URL}, transformTasks);

  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
