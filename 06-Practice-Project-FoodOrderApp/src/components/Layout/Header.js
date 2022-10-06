import classes from './Header.module.css';
import mealsImg from '../../images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodOrder</h1>
        <HeaderCartButton onToggleCart={props.onToggleCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='food' />
      </div>
    </>
  );
};

export default Header;
