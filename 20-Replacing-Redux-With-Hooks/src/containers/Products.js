import React from 'react';
import { useContext } from 'react';
// import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import { ProductsCtx } from '../context/products-ctx';
import './Products.css';

const Products = (props) => {
  // const productList = useSelector(state => state.shop.products);
  const { products } = useContext(ProductsCtx);
  return (
    <ul className='products-list'>
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
