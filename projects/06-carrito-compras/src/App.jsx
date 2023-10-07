import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import products from './mocks/products.json';

function App() {
  return (
    <>
      <Products products={products.products} />
    </>
  );
}

export default App;
