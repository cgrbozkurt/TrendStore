import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";


function App() {
  return (
    <div className="App">
      <Cart/>
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
