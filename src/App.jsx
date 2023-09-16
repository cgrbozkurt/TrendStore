import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";


function App() {
  const [cartIsShow,setCartIsShow]=useState(false);

  const showCardHandler=()=>{
    setCartIsShow(true);
  }
  const hideCardHandler=(e)=>{
    e.preventDefault();
    setCartIsShow(false);
  }

  return (
    <div className="App">
      {cartIsShow && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}  />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
