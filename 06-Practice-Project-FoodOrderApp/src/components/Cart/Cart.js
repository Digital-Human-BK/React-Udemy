import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'id1', name: 'Sushi', price: 12.99 }].map((item) => (
        <li key={'i'}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onToggleCart={props.onToggleCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.52</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onToggleCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
