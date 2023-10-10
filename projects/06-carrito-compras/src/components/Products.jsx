import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export default function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const knowProductInCart = (product) =>
    cart.some((item) => item.id === product.id);
  return (
    <main className="products">
      <ul>
        {products &&
          products.map((product) => {
            const isProductInCart = knowProductInCart(product);
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div className="product-options">
                  <button onClick={() => addToCart(product)}>
                    <AddToCartIcon />
                  </button>
                  {isProductInCart && (
                    <button
                      style={{ backgroundColor: '#e74c3c' }}
                      onClick={() => removeFromCart(product)}
                    >
                      <RemoveFromCartIcon />
                    </button>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
