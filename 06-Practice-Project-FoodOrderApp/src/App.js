import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const toggleCartHandler = () => {
    setCartIsShown(prevState => !prevState);
  }

  return (
    <>
      {cartIsShown && <Cart onToggleCart={toggleCartHandler}/>}
      <Header onToggleCart={toggleCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
