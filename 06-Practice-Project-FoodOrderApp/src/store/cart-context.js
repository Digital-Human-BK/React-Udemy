import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;