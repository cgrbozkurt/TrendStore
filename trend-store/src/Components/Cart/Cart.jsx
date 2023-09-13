import "./Cart.css"

const Cart = () => {
  return (
    <div className="offcanvas">
      <div className="content">
        <div className="cart-head">Sepetim</div>
        <a href="/">X</a>
      </div>
      Cart Items
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
