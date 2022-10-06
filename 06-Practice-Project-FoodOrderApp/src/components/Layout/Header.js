import styles from './Header.module.css';
import mealsImg from '../../images/meals.jpg';
const Header = (props) => {
  return (
    <>
      <header>
        <h1>Food Order</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImg} alt='food' />
      </div>
    </>
  );
};

export default Header;
