import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (ev) => {
    setEnteredValue(ev.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
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
