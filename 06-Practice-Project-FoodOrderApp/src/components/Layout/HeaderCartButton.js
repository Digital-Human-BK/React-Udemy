import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onToggleCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>7</span>
    </button>
  );
};

export default HeaderCartButton;
