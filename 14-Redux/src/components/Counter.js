import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    // dispatch({ type: 'INC' });
    dispatch(counterActions.increment());
  };

  const incFiveHandler = () => {
    // dispatch({ type: 'INC5', value: 5 });
    dispatch(counterActions.increase(5));
  };

  const decHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decFiveHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
