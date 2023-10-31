import './App.css';
import {useState,useEffect} from "react"
import Header from './Components/Header';
import Products from './Components/products.json';
import Product from "./Components/Product"

function App() {

  const [money , setMoney]=useState(10000);

  return (
  <>
   <Header money={money}  />
{Products.map(product=>(
  <Product key={product.id} product={product} />
))}

  </>
  );
}

export default App;
