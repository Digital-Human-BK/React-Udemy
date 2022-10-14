import useInput from '../hooks/use-input';

const BasicForm = () => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((val) => val.trim() !== '');

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((val) => val.trim() !== '');

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((val) => val.includes('@'));

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (ev) => {
    ev.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('Submitted!', name, lastName, email);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className='error-text'>Please enter valid Name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className='error-text'>Please enter valid Last Name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter valid Email</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
