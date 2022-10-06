import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = () => {};

  const removeItemFromCart = () => {};

  const cartCtx = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
