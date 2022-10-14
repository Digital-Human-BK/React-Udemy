import useInput from '../hooks/use-input';

const SimpleInput = () => {

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (ev) => {
    ev.preventDefault();

    if (!nameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameInputHasError && <p className='error-text'>Name required!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInputHasError && <p className='error-text'>E-mail required!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
