import { createContext } from "react";

export const CartContext= createContext()

const CartProvider = ({ children }) => {
  const cartContext = {
    items: [],
    totalAmounts: 0,
    addItem: (item) => {  console.log(item);},
    removeItem: () => {},
    clearItem: () => {},
  };
  return <CartContext.Provider value={cartContext} >{children}</CartContext.Provider>;
};

export default CartProvider;
