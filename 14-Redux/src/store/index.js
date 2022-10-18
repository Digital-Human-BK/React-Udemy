import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INC') {
    return { counter: state.counter + 1 };
  }

  if (action.type === 'INC5') {
    return { counter: state.counter + action.value };
  }

  if (action.type === 'DEC') {
    return { counter: state.counter - 1 };
  }

  if (action.type === 'DEC5') {
    return { counter: state.counter - action.value };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
