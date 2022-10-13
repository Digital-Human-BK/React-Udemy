import { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;
  if (nameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (ev) => {
    setName(ev.target.value);
  };

  const nameInputBlurHandler = (ev) => {
    setNameIsTouched(true);
  };

  const formSubmissionHandler = (ev) => {
    ev.preventDefault();
    setNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }
    setName('');
    setNameIsTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameInputIsInvalid && <p className='error-text'>Name required!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
