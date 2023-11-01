import './App.css';
import {useState,useEffect} from "react"
import Header from './Components/Header';
import Products from './Components/products.json';
import Product from "./Components/Product"

function App() {

  const [money , setMoney]=useState(10000);
  const [basket, setBasket]=useState([]);
  useEffect(()=>{
    console.log(basket);
  },[basket]) 

  return (
  <>
   <Header money={money}  />
{Products.map(product=>(
  <Product key={product.id} product={product}  basket={basket} setBasket={setBasket} />
))}

  </>
  );
}

export default App;
