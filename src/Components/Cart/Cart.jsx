import CartItem from "./CartItem";
import products from "../../productData";
import "./Cart.css";
import OffCanvas from "../UI/OffCanvas";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    
      
       <OffCanvas onClose={props.onClose}>
         <div>
          <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={props.onClose}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>10₺</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear">Temizle</button>
        </div>
    
        </div>
       </OffCanvas>
  
  );
};

export default Cart;
