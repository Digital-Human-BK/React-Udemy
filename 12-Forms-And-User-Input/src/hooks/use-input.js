import { useState, useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialState;
};

const useInput = (validateValue) => {
  const [state, dispatchState] = useReducer(inputStateReducer, initialState);
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  // const isValid = validateValue(enteredValue);
  // const hasError = !isValid && isTouched;

  const isValid = validateValue(state.value);
  const hasError = !isValid && state.isTouched;

  const valueChangeHandler = (ev) => {
    dispatchState({ type: 'INPUT', value: ev.target.value });
    // setEnteredValue(ev.target.value);
  };

  const inputBlurHandler = () => {
    dispatchState({ type: 'BLUR' });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatchState({ type: 'RESET' });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    // value: enteredValue,
    value: state.value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

// const useInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isTouched, setIsTouched] = useState(false);

//   const isValid = validateValue(enteredValue);
//   const hasError = !isValid && isTouched;

//   const valueChangeHandler = (ev) => {
//     setEnteredValue(ev.target.value);
//   };

//   const inputBlurHandler = () => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue('');
//     setIsTouched(false);
//   };
//   return {
//     enteredValue,
//     isValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset
//   };
// };

// export default useInput;
