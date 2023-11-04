import './App.css';
import {useState,useEffect} from "react"
import Header from './Components/Header';
import Products from './Components/products';
import Product from "./Components/Product"

function App() {

  const [money , setMoney]=useState(10000);
  const [basket, setBasket]=useState([]);
  const [total,setTotal]=useState(0);


  
  useEffect(()=>{
   const t= basket.reduce((acc,item)=>{
  return acc+ (item.amount*(Products .find(product=>item.id===product.id).price))  
    },0)
    console.log(t);
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
