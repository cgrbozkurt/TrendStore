import "./CartItem.css"
const CartItem = (props) => {
const {product}=props

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        
        <img src={product.img} alt="" />
      </div>
      <div className="cart-item info">
        <div className="cart-item-texts">
            <b>Cart Item Name</b>
        <div>
            <span>₺150 X</span>
            <span>1</span>
        </div>
        </div>

      <a href="/" className="cart-item-remove">x</a>
      </div>
      
    </li>
  );
};

export default CartItem;
