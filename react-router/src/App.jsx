import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/home";
import ProductsPage from "./pages/Products";
import { Fragment } from "react";
import MainNavigationBar from "./layouts/MainNavigationBar";


const router= createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"products",
    element: <ProductsPage />
  }
])

function App() {
  return (
    <Fragment>
      
    <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
