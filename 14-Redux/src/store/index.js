import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

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

  if(action.type ==='TOGGLE'){
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
