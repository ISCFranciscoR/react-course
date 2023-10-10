import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import useFilters from './hooks/useFilters';
import { useState } from 'react';
import initialProducts from './mocks/products.json';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const [products] = useState(initialProducts.products);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
