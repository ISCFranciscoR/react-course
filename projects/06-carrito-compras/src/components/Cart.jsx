import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckboxId} />
      <aside className="cart">
        {cart.length === 0 && <p>No hay productos en el carrito</p>}
        <ul>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                addToCart={() => addToCart(product)}
              />
            );
          })}
        </ul>
        {cart.length > 0 && (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  );
}
