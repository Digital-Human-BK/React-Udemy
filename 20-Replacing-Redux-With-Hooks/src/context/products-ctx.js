import React, { createContext, useState } from 'react';

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

export const ProductsCtx = createContext({
  products: [],
  toggleFav: (id) => {}
});

const ProductsProvider = (props) => {
  const [productsList, setProductsList] = useState(DUMMY_DATA);

  const toggleFavorite = (productId) => {
    setProductsList((prev) => {
      const prodIndex = prev.findIndex((p) => p.id === productId);
      const newFavStatus = !prev[prodIndex].isFavorite;
      const updatedProducts = [...prev];
      updatedProducts[prodIndex] = {
        ...prev[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsCtx.Provider value={{ products: productsList, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsCtx.Provider>
  );
};

export default ProductsProvider;
