import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onExpenseFilter={expenseFilterHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
