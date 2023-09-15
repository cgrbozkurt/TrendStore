import "./Cart.css";
import products from "../../productData";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem product={product} key={product.id}  />
      ))}
    </ul>
  );
  return (
    <div className="offcanvas">
      <div className="content">
        <div className="cart-head">
          Sepetim
          <a href="/" className="cart-close">
            X
          </a>
        </div>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>10₺</span>
      </div>
      <div className="actions">
        <button className="cart-order">Sipariş ver</button>
        <button className="cart-clear">Temizle</button>
      </div>
    </div>
  );
};

export default Cart;
