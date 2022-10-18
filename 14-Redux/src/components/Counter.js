import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);

  const incHandler = () => {
    dispatch({ type: 'INC' });
  };

  const incFiveHandler = () => {
    dispatch({ type: 'INC5', value: 5 });
  };

  const decHandler = () => {
    dispatch({ type: 'DEC' });
  };

  const decFiveHandler = () => {
    dispatch({ type: 'DEC5', value: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>INCREMENT</button>
        <button onClick={incFiveHandler}>INCREMENT BY 5</button>
        <button onClick={decHandler}>DECREMENT</button>
        <button onClick={decFiveHandler}>DECREMENT BY 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
