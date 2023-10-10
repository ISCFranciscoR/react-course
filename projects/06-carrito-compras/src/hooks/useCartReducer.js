import { useReducer } from 'react';
import { cartInitialState, cartReducer, CART_ACTIONS } from '../reducers/cart';

export default function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addToCart = (product) =>
    dispatch({ type: CART_ACTIONS.ADD_PRODUCT, payload: product });
  const removeFromCart = (product) =>
    dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, payload: product });
  const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR });
  return { addToCart, removeFromCart, clearCart, state };
}
