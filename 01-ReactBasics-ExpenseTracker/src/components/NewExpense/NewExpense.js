import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    toggleEditingHandler();
  };

  const toggleEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={toggleEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelEditing={toggleEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
