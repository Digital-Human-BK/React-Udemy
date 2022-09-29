import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, cancelEditing }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (ev) => {
    setEnteredTitle(ev.target.value);
  };

  const amountChangeHandler = (ev) => {
    setEnteredAmount(ev.target.value);
  };

  const dateChangeHandler = (ev) => {
    setEnteredDate(ev.target.value);
  };

  const formSubmitHandler = (ev) => {
    ev.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            onChange={amountChangeHandler}
            value={enteredAmount}
            id='amount'
            min={0.01}
            step={0.01}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            onChange={dateChangeHandler}
            value={enteredDate}
            id='date'
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={cancelEditing}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
