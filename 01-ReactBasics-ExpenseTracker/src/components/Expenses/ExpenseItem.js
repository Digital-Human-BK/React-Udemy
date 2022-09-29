import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expense.date} />
        <div className='expense-item__description'>
          <h2>{expense.title}</h2>
          <div className='expense-item__price'>
            ${Number(expense.amount).toFixed(2)}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
