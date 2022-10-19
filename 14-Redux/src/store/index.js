import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.value;
    },
    decrease(state, action) {
      state.counter -= action.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === 'INC5') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'DEC') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'DEC5') {
    return {
      counter: state.counter - action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'TOGGLE') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
