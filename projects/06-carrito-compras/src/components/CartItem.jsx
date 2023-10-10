export default function CartItem({ product, addToCart }) {
  const { title, quantity, thumbnail, price, description } = product;
  return (
    <li>
      <img src={thumbnail} alt={description} />
      <div>
        <strong>{title} </strong> - $ {price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
